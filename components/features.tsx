export default function Features() {
  const services = [
    { 
      title: "Dominância em SEO", 
      desc: "Deixamos as métricas de vaidade de lado. Otimizamos o código, conteúdo e autoridade do seu site para interceptar clientes exatos no momento em que eles buscam pelo seu serviço no Google.",
      icon: "🔍"
    },
    { 
      title: "Inteligência Artificial (AEO)", 
      desc: "Enquanto seus concorrentes focam no SEO de 2010, nós estruturamos seus dados para que IAs generativas como ChatGPT mencionem a SUA marca como a única solução viável.",
      icon: "🧠"
    },
    { 
      title: "Máquinas de Conversão", 
      desc: "Não fazemos sites 'bonitinhos'. Desenvolvemos plataformas corporativas ultrarrápidas pensadas para ranqueamento agressivo e captura máxima de leads B2B e B2C.",
      icon: "💻"
    }
  ];

  return (
    <section id="servicos" className="relative py-24 bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-4">A Nossa Solução para o seu Negócio</h2>
          <p className="text-slate-400 font-light text-lg">Paramos de alugar espaço na internet. Construímos a fundação orgânica que vai gerar vendas pelas próximas décadas.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="bg-slate-950 p-8 border border-slate-800 hover:border-yellow-600/50 transition-colors group relative overflow-hidden rounded-xl">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl group-hover:opacity-10 transition-opacity text-white">
                {item.icon}
              </div>
              <div className="w-14 h-14 bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl text-yellow-500 mb-6 group-hover:bg-yellow-600 group-hover:text-slate-950 transition-colors rounded-lg">
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
