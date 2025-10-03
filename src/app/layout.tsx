// src/app/layout.tsx

// Importações necessárias.
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. IMPORTAMOS NOSSOS NOVOS COMPONENTES
import Header from '@/components/Header'; // O '@/' é um atalho para a pasta 'src/'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meu Blog Tech',
  description: 'Um blog sobre tecnologia e desenvolvimento.',
};

// Este é o componente de Layout principal.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/*
          As novas classes do Tailwind:
          - 'flex': Ativa o layout Flexbox.
          - 'flex-col': Organiza os itens em uma coluna (um embaixo do outro: Header, main, Footer).
          - 'min-h-screen': Define a altura mínima do body como 100% da altura da tela (viewport height).
            Isso garante que o body sempre ocupe a tela inteira, de cima a baixo.
        */}
        {/* 2. ADICIONAMOS O HEADER AQUI */}
        <Header />

        {/* A tag <main> é onde o conteúdo específico de cada página será renderizado.
            O 'children' representa as páginas (como page.tsx, about/page.tsx, etc.).
            - 'p-4': Adiciona um espaçamento interno para o conteúdo não ficar colado nas bordas.
            Para fazer o conteúdo principal crescer e empurrar o rodapé para baixo,
          adicionamos a classe 'flex-grow' ao <main
        */}
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>

        {/* 3. ADICIONAMOS O FOOTER AQUI */}
        <Footer />
      </body>
    </html>
  );
}
