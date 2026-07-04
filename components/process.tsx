export default function Process() {
  const steps = [
    {
      num: "I.",
      title: "Auditoria Inicial",
      desc: "Diagnóstico profundo da saúde digital do seu domínio."
    },
    {
      num: "II.",
      title: "Plano Estratégico",
      desc: "Mapeamento de palavras-chave e adequação para IAs."
    },
    {
      num: "III.",
      title: "Deploy & Otimização",
      desc: "Implementação das correções técnicas no código."
    },
    {
      num: "IV.",
      title: "Escala Orgânica",
      desc: "Acúmulo de autoridade e captação de leads passivos."
    }
  ];

  return (
    <section className="bg-[#0A0F1C] py-24 border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-4">Metodologia de execução.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-slate-800">
          {steps.map((step, index) => (
            <div key={index} className="p-6 border-b border-r border-slate-800">
              <div className="text-sm font-playfair font-medium text-slate-500 mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-medium text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 font-light text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
