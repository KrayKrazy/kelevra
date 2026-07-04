export default function Niches() {
  const niches = [
    { 
      title: "Prestadores de Serviço", 
      desc: "Advogados, clínicas e consultórios. Transformamos seu site na maior fonte de captação, desqualificando curiosos e atraindo perfis High-Ticket.",
    },
    { 
      title: "Negócios Locais", 
      desc: "Domínio absoluto no Google Meu Negócio e nas buscas geolocalizadas em Goiás e Brasília. Quando buscam pelo seu serviço, você é a única opção.",
    },
    { 
      title: "Comércio & E-commerce", 
      desc: "Redução drástica do Custo de Aquisição (CAC). Posicionamos seus produtos organicamente para vendas 24h sem dependência de anúncios.",
    }
  ];

  return (
    <section className="bg-[#0B1528] py-24 border-b border-slate-800/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-12 border-l-2 border-[#D4AF37] pl-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-[#D4AF37] mb-4">Arquitetura focada no seu modelo de negócio.</h2>
          <p className="text-slate-300 font-light max-w-2xl">Não aplicamos fórmulas genéricas. Desenhamos a estrutura orgânica baseada em como o seu cliente ideal pesquisa na internet.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-800/50">
          {niches.map((item, index) => (
            <div key={index} className="p-8 border-b border-r border-slate-800/50 bg-[#0B1528] hover:bg-slate-800/20 transition-colors">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                <span className="text-[#D4AF37] text-xs">◆</span> {item.title}
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
