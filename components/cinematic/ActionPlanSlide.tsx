export default function ActionPlanSlide() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row bg-[#050507]">
        
        {/* Esquerda: Conclusão Textual */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end justify-center p-12 md:pr-24 border-b md:border-b-0 md:border-r border-slate-800 relative">
            <div data-aos="fade-left" data-aos-duration="1000" className="text-left md:text-right w-full">
              <p className="tracking-widest uppercase font-bold text-xs mb-4 text-[#D4AF37]">Diagnóstico</p>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold tracking-tight mb-6 text-metallic leading-tight">
                Plano<br/>de Ação.
              </h2>
              <p className="text-slate-400 font-light mt-4 text-lg md:text-xl max-w-sm ml-0 md:ml-auto">
                Uma presença orgânica sólida blinda sua marca contra a dependência de anúncios pagos.
              </p>
            </div>
            
            {/* Detalhes arquitetônicos (cantoneiras) */}
            <div className="absolute right-0 top-0 w-4 h-4 border-b border-l border-slate-600 hidden md:block"></div>
            <div className="absolute right-0 bottom-0 w-4 h-4 border-t border-l border-slate-600 hidden md:block"></div>
        </div>

        {/* Direita: CTA / Contato */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:pl-24 space-y-12 bg-[#08090C]/50">
            <div className="max-w-md border-l-2 border-[#D4AF37] pl-8 py-2" data-aos="fade-up" data-aos-delay="200">
                <p className="text-xs tracking-widest uppercase text-slate-500 mb-3 font-bold">Passo 1</p>
                <p className="text-2xl md:text-3xl text-slate-200 font-playfair leading-snug">
                  Auditoria Gratuita<br/>
                  <span className="text-slate-400 italic font-inter text-lg font-light block mt-2">
                    Mapeamos seus concorrentes no Google.
                  </span>
                </p>
            </div>
            <div className="max-w-md border-l-2 border-[#D4AF37] pl-8 py-2" data-aos="fade-up" data-aos-delay="400">
                <p className="text-xs tracking-widest uppercase text-slate-500 mb-3 font-bold">Passo 2</p>
                <p className="text-2xl md:text-3xl text-slate-200 font-playfair leading-snug">
                  Implementação<br/>
                  <span className="text-slate-400 italic font-inter text-lg font-light block mt-2">
                    Ajustes de SEO on-page e arquitetura web.
                  </span>
                </p>
            </div>
            
            <div className="pt-8" data-aos="fade-up" data-aos-delay="600">
                <a
                  href="https://wa.me/5561981849873?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Kelevra%20Corp%20e%20gostaria%20de%20entender%20como%20transformar%20meu%20Google%20Meu%20Neg%C3%B3cio%20em%20uma%20m%C3%A1quina%20de%20vendas%20org%C3%A2nica."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050507] font-semibold tracking-widest uppercase text-sm transition-all duration-300"
                >
                  Falar com o Especialista
                </a>
            </div>
        </div>
    </section>
  );
}
