export default function Niches() {
  const niches = [
    { 
      title: "Prestadores de Serviço", 
      desc: "Advogados, médicos, contadores e clínicas. Transformamos seu site na maior fonte de captação de leads desqualificando curiosos e atraindo clientes High-Ticket.",
      tag: "Leads Qualificados"
    },
    { 
      title: "Negócios Locais", 
      desc: "Dominamos o Google Meu Negócio e as buscas geolocalizadas. Quando alguém na sua cidade pesquisar pelo seu serviço, é a sua empresa que vai aparecer primeiro.",
      tag: "Domínio Regional"
    },
    { 
      title: "E-commerces & Lojas", 
      desc: "Reduza a sua dependência de tráfego pago. Ranqueamos seus produtos nas primeiras páginas para você vender 24h por dia sem pagar por clique.",
      tag: "Vendas Orgânicas"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 border-t border-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-4">Especialistas no seu modelo de negócio</h2>
          <p className="text-slate-400 font-light text-lg">Não fazemos SEO genérico. Nossa estratégia é desenhada milimetricamente para a jornada de compra do seu setor.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {niches.map((item, index) => (
            <div key={index} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-yellow-600/30 transition-all shadow-lg">
              <div className="inline-block px-3 py-1 bg-yellow-600/10 text-yellow-500 text-xs font-bold uppercase tracking-widest rounded mb-6 border border-yellow-600/20">
                {item.tag}
              </div>
              <h3 className="text-2xl font-jakarta font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
