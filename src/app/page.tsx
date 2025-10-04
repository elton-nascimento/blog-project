// src/app/page.tsx

// 1. IMPORTAÇÕES
// Importamos nosso cliente Sanity recém-criado
import { client } from '../../sanity/client';
// Importamos o Link para criar links para cada post
import Link from 'next/link';

// 2. DEFINIÇÃO DE TIPO
// É uma boa prática definir o tipo de dados que esperamos receber.
// Isso nos dá autocompletar e segurança de tipo no código.
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

// 3. FUNÇÃO PARA BUSCAR OS DADOS (getPosts)
// Esta função assíncrona é responsável por buscar os dados no Sanity.
// Usar uma função separada mantém nosso componente de página limpo.
async function getPosts() {
  // A query GROQ. É como o SQL, mas para documentos JSON.
  // *[_type == "post"] seleciona todos os documentos do tipo "post".
  // { ... } define quais campos de cada post queremos buscar.
  const query = `*[_type == "post"] {
    _id,
    title,
    slug
  }`;

  // Usamos o cliente Sanity para fazer a busca (fetch) com a nossa query.
  const posts = await client.fetch<Post[]>(query);

  // A função retorna a lista de posts.
  return posts;
}

// 4. O COMPONENTE DA PÁGINA (agora assíncrono)
// Marcamos o componente como 'async' para que possamos usar 'await' dentro dele.
export default async function HomePage() {
  // Chamamos nossa função e esperamos pelos posts.
  // O Next.js vai esperar essa busca terminar antes de renderizar a página.
  const posts = await getPosts();

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Últimos Posts</h1>

      {/* 5. RENDERIZAÇÃO DA LISTA DE POSTS */}
      {/* Criamos uma lista não ordenada para exibir os posts.
          - 'space-y-4': Adiciona um espaço vertical entre cada item da lista.
      */}
      <ul className="space-y-4">
        {/* 
          Usamos o método .map() para iterar sobre o array de 'posts'.
          Para cada 'post' no array, criamos um item de lista (<li>).
          A 'key' é um atributo especial que o React usa para otimizar a renderização de listas.
          Deve ser um valor único para cada item, como o _id do post.
        */}
        {posts.map((post) => (
          <li key={post._id}>
            {/* 
              Cada item da lista é um Link que leva para a página daquele post.
              A URL é construída usando o slug do post. Ex: /post/meu-primeiro-post
              (Ainda não criamos essa página, faremos isso no próximo passo).
            */}
            <Link href={`/post/${post.slug.current}`}>
              <span className="text-2xl text-blue-600 hover:underline">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

