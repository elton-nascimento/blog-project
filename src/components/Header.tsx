// src/components/Header.tsx

// Importamos o 'Link' do Next.js. Ele é usado para criar links entre as páginas
// da nossa aplicação. É como a tag <a> do HTML, mas otimizado para o Next.js,
// permitindo uma navegação mais rápida e sem recarregar a página inteira.
import Link from 'next/link';

// Definimos e exportamos o nosso componente Header.
// 'export default' permite que este componente seja importado em outros arquivos.
export default function Header() {
  // O 'return' define o que o componente vai renderizar na tela (o seu HTML/JSX).
  return (
    // <header> é uma tag semântica do HTML5 para cabeçalhos.
    // As classes do Tailwind CSS são usadas para estilização:
    // - 'bg-gray-800': Define a cor de fundo como um cinza escuro.
    // - 'text-white': Define a cor do texto como branco.
    // - 'p-4': Adiciona um "padding" (espaçamento interno) de 1rem em todos os lados.
    <header className="bg-gray-800 text-white p-4">
      {/* Um container para alinhar o conteúdo.
          - 'container': Centraliza o conteúdo e define uma largura máxima.
          - 'mx-auto': Aplica margem automática nos eixos x (esquerda/direita), ajudando a centralizar.
          - 'flex justify-between items-center': Cria um layout flexbox para alinhar os itens.
            - 'justify-between': Coloca espaço entre os itens (título na esquerda, navegação na direita).
            - 'items-center': Alinha os itens verticalmente ao centro.
      */}
      <div className="container mx-auto flex justify-between items-center">
        {/* O título do blog, que também é um link para a página inicial. */}
        <Link href="/" className="text-2xl font-bold">
          Meu Blog Tech
        </Link>

        {/* A navegação do site. */}
        <nav>
          {/* Uma lista não ordenada para os links de navegação.
              - 'flex gap-4': Cria um layout flexbox com um espaçamento ('gap') de 1rem entre os itens.
          */}
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              {/* Este link aponta para uma página que ainda vamos criar. */}
              <Link href="/about" className="hover:text-gray-300">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
