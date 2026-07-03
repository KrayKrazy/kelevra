export default function Features() {
  const services = [
    { 
      title: "SEO Técnico e Estratégico", 
      desc: "Otimização completa do seu site para os motores de busca (Google, Bing). Transformamos a sua plataforma em uma máquina de captação de clientes a custo zero por clique.",
      icon: "🔍"
    },
    { 
      title: "AEO (Otimização para IAs)", 
      desc: "Answer Engine Optimization. Posicionamos a sua marca para ser a resposta exata fornecida por IAs como ChatGPT, Gemini e Claude quando seus clientes fizerem perguntas.",
      icon: "🧠"
    },
    { 
      title: "Criação de Sites e E-commerce", 
      desc: "Desenvolvemos plataformas web de altíssima performance, com código limpo e arquitetura voltada para rankeamento orgânico e conversões.",
      icon: "💻"
    }
  ];

  return (
    <section id="servicos" className="relative py-24 bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-4">A Tríade do Crescimento Orgânico</h2>
          <p className="text-slate-400 font-light text-lg">Deixamos de lado as métricas de vaidade para focar no que realmente importa: presença onipresente, autoridade digital e vendas B2B.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="bg-slate-950 p-8 border border-slate-800 hover:border-yellow-600/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              <div className="w-14 h-14 bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl text-yellow-500 mb-6 group-hover:bg-yellow-600 group-hover:text-slate-950 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-jakarta font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
