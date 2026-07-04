export default function Faq() {
  const faqs = [
    {
      q: "O que exatamente é AEO?",
      a: "AEO (Answer Engine Optimization) é a evolução do SEO. Nós otimizamos os dados estruturados do seu site para que Inteligências Artificiais como ChatGPT, Copilot e Gemini compreendam e citem a sua marca como a solução primária do mercado."
    },
    {
      q: "Vocês também gerenciam tráfego pago?",
      a: "Nossa atuação principal é a engenharia orgânica. Preparamos o terreno para que o seu Custo de Aquisição de Cliente (CAC) reduza drasticamente a longo prazo, aumentando também a performance dos seus anúncios."
    },
    {
      q: "Qual é o tempo médio para os resultados orgânicos?",
      a: "O SEO é a construção de um patrimônio perene, não um interruptor imediato de anúncios. Dependendo da autoridade inicial do domínio, a escala robusta começa a aparecer entre o terceiro e o sexto mês de implementação técnica e semântica."
    }
  ];

  return (
    <section className="bg-[#0A0F1C] py-24 border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-4">FAQ.</h2>
        </div>

        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-6 border-b border-slate-800 last:border-0">
              <h4 className="text-base font-medium text-white mb-3">
                {faq.q}
              </h4>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
