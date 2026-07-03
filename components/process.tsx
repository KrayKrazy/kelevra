export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Mapeamento & Diagnóstico",
      desc: "Analisamos a fundo a sua infraestrutura digital, seus concorrentes diretos e as palavras-chave mais lucrativas do seu setor."
    },
    {
      num: "02",
      title: "Plano de Ataque (Estratégia)",
      desc: "Desenhamos o escopo de otimizações técnicas de SEO e a arquitetura de informação necessária para as IAs (AEO)."
    },
    {
      num: "03",
      title: "Execução & Desenvolvimento",
      desc: "Seja arrumando a casa atual ou construindo um site novo, nosso time aplica o código perfeito voltado para o rastreamento do Google."
    },
    {
      num: "04",
      title: "Autoridade Omnipresente",
      desc: "Sua marca escala para as primeiras posições. Aumento drástico de leads orgânicos, ligações e vendas com Custo Zero de mídia."
    }
  ];

  return (
    <section className="bg-slate-900 py-24 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-4">Como funciona a Consultoria Kelevra?</h2>
          <p className="text-slate-400 font-light text-lg">Um processo validado e transparente para dominar as buscas.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-6xl font-jakarta font-extrabold text-slate-800 mb-4 group-hover:text-yellow-600/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{step.desc}</p>
              
              {/* Arrow connector (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-slate-700 text-2xl">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
