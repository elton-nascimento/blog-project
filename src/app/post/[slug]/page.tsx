// src/app/post/[slug]/page.tsx

// 1. IMPORTAÇÕES
import { client } from '../../../../sanity/client'; // Importa nosso cliente Sanity
import { PortableText } from '@portabletext/react'; // Componente para renderizar o conteúdo do corpo do post

// 2. DEFINIÇÃO DE TIPO PARA O POST COMPLETO
// Agora precisamos de mais campos do que na listagem
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  body: any; // O tipo do 'body' é complexo, 'any' é suficiente por agora
}

// 3. FUNÇÃO PARA BUSCAR UM ÚNICO POST
// Esta função recebe o 'slug' da URL como parâmetro
async function getPost(slug: string) {
  // A query GROQ agora filtra pelo slug específico
  // *[_type == "post" && slug.current == $slug][0]
  // - _type == "post": Busca documentos do tipo post.
  // - && slug.current == $slug: E que tenham o slug igual ao parâmetro que passamos.
  // - [0]: Pega o primeiro (e único) resultado do array.
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;

  // Passamos a query e os parâmetros (o slug) para o cliente Sanity
  const post = await client.fetch<Post>(query, { slug });
  return post;
}

// 4. O COMPONENTE DA PÁGINA DINÂMICA
// O Next.js nos dá acesso aos parâmetros da URL através da prop 'params'
export default async function PostPage({ params }: { params: { slug: string } }) {
  // Pegamos o slug da URL e chamamos nossa função para buscar os dados do post
  const post = await getPost(params.slug);

  return (
    <article className="prose lg:prose-xl mx-auto">
      {/* 
        A classe 'prose' vem do plugin '@tailwindcss/typography'.
        Ela aplica automaticamente uma estilização bonita para textos longos como artigos de blog.
        Isso nos poupa muito tempo de estilização manual.
        (Precisaremos instalar este plugin)
      */}
      
      {/* Título do post */}
      <h1>{post.title}</h1>
      
      {/* Data de publicação */}
      <p className="text-sm text-gray-500">
        Publicado em: {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
          year: 'numeric', month: 'long', day: 'numeric'
        })}
      </p>

      {/* 
        Corpo do post renderizado com PortableText.
        Este componente sabe como transformar os dados do editor de texto rico do Sanity
        (que são um JSON complexo) em HTML real (parágrafos, listas, negrito, etc.).
      */}
      <PortableText value={post.body} />
    </article>
  );
}
