// src/app/page.tsx

// Este é o componente da nossa página inicial.
export default function HomePage() {
  // Por enquanto, vamos retornar apenas um título e um parágrafo.
  // Este será o local onde, no futuro, vamos listar os posts do blog.
  return (
    <section>
      {/* Título da página.
          Estilização com Tailwind CSS:
          - 'text-4xl': Tamanho da fonte grande.
          - 'font-bold': Deixa a fonte em negrito.
          - 'mb-8': Adiciona uma margem inferior ('margin-bottom') de 2rem para dar espaço.
      */}
      <h1 className="text-4xl font-bold mb-8">Últimos Posts</h1>

      {/* Parágrafo placeholder.
          - 'text-gray-600': Cor do texto cinza.
      */}
      <p className="text-gray-600">
        Em breve, os artigos do blog aparecerão aqui. Aguarde!
      </p>
    </section>
  );
}
