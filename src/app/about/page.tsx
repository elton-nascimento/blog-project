// src/app/about/page.tsx

// Importamos o componente 'Link' para criar um link de volta para a Home.
import Link from 'next/link';

// Este é o componente da nossa página "Sobre".
export default function AboutPage() {
  // O return define o que será renderizado na tela.
  return (
    // Usamos a tag <section> para agrupar o conteúdo da página.
    <section>
      {/* Título da página */}
      <h1 className="text-4xl font-bold mb-8">Sobre Mim</h1>

      {/* Container para o conteúdo, com layout flexível para a imagem e o texto */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* 
          A tag <p> para o texto.
          - 'text-lg': Tamanho de fonte um pouco maior para melhor legibilidade.
          - 'text-gray-700': Cor do texto.
          - 'leading-relaxed': Aumenta o espaçamento entre as linhas do parágrafo.
          - 'space-y-4': Adiciona um espaço vertical entre os elementos filhos diretos (neste caso, os parágrafos dentro do div).
        */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Olá! Meu nome é Elton Nascimento e sou um entusiasta de tecnologia e desenvolvimento de software. Este blog é o meu espaço na internet para compartilhar conhecimentos, tutoriais e reflexões sobre o mundo da programação.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Este projeto foi construído com Next.js, TypeScript e Tailwind CSS, com o conteúdo gerenciado por um CMS Headless. É um projeto de estudo contínuo para aplicar e aprofundar conceitos de desenvolvimento web moderno.
          </p>
          <p>
            <Link href="/" className="text-blue-600 hover:underline">
              Voltar para a Home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
