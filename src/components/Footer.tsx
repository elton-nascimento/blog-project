// src/components/Footer.tsx

// Definimos e exportamos o nosso componente Footer.
export default function Footer() {
  // O 'return' define o que o componente vai renderizar.
  return (
    // <footer> é uma tag semântica do HTML5 para rodapés.
    // Estilização com Tailwind CSS:
    // - 'bg-gray-100': Cor de fundo cinza claro.
    // - 'text-gray-600': Cor do texto cinza médio.
    // - 'p-4': Espaçamento interno.
    // - 'text-center': Centraliza o texto.
    // - 'mt-8': Adiciona uma margem no topo ('margin-top') de 2rem, para separar o rodapé do conteúdo acima.
    <footer className="bg-gray-100 text-gray-600 p-4 text-center mt-8">
      {/* Container para manter o alinhamento consistente com o resto do site. */}
      <div className="container mx-auto">
        {/* Texto do rodapé. O `&copy;` é o código HTML para o símbolo de copyright ©. */}
        <p>&copy; {new Date().getFullYear()} Elton Nascimento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
