export default function Features() {
  const services = [
    { 
      title: "SEO Técnico e Auditoria", 
      desc: "Otimizamos a performance de carregamento, semântica e rastreabilidade do seu código para as diretrizes rigorosas do Google.",
    },
    { 
      title: "AEO (Answer Engine Optimization)", 
      desc: "Estruturamos os dados da sua empresa para que IAs como ChatGPT, Copilot e Gemini citem você como a principal referência do mercado.",
    },
    { 
      title: "Engenharia Web B2B", 
      desc: "Desenvolvimento de Landing Pages e sites corporativos com Next.js e React, voltados exclusivamente para conversão institucional.",
    }
  ];

  return (
    <section id="servicos" className="bg-[#0A0F1C] py-24 border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-4">A tríade do crescimento orgânico.</h2>
        </div>
        
        <div className="space-y-4">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start p-8 border border-slate-800 bg-transparent">
              <div className="md:w-1/3 mb-4 md:mb-0 text-slate-500 font-mono text-sm">
                0{index + 1} // {item.title}
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
