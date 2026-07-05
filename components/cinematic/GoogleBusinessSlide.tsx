export default function GoogleBusinessSlide() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-8 md:p-24 bg-[#050507] overflow-hidden border-t border-slate-800">
      
      {/* Background Graphic (Pulse rings) */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full flex justify-start opacity-10 pointer-events-none">
          <svg className="w-full h-full wireframe-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet">
              <ellipse cx="50" cy="100" rx="40" ry="80" fill="none" strokeWidth="1" transform="rotate(45 50 100)"/>
              <ellipse cx="50" cy="100" rx="40" ry="80" fill="none" strokeWidth="1" transform="rotate(-45 50 100)"/>
              <circle cx="50" cy="100" r="20" fill="none" strokeWidth="0.5"/>
          </svg>
      </div>

      <div className="z-10 max-w-3xl w-full mx-auto md:ml-auto md:mr-0 md:text-right" data-aos="fade-left" data-aos-duration="1000">
          <p className="tracking-widest uppercase font-bold text-xs mb-4 border-b border-slate-600 inline-block pb-1 text-[#D4AF37]">
            O Fim do Tráfego Pago
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-slate-200">
              Transforme o <span className="text-metallic italic">Google Meu Negócio</span> na sua maior máquina de vendas.
          </h2>
          <div className="h-px w-full max-w-sm bg-gradient-to-l from-[#D4AF37] to-transparent mb-10 opacity-50 ml-auto hidden md:block"></div>
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-[#D4AF37] to-transparent mb-10 opacity-50 block md:hidden"></div>
          
          <div className="space-y-6 text-lg font-light text-slate-300 md:pl-16">
              <p className="leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                O cliente orgânico é aquele que <strong className="text-white font-medium">já está procurando</strong> pelo que você vende. Ele abre o Google Maps ou a Pesquisa, digita o seu serviço e liga para o primeiro resultado.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
                  <div className="bg-[#08090C] border border-slate-800 p-6" data-aos="zoom-in" data-aos-delay="400">
                      <h3 className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm mb-3">Autoridade Local</h3>
                      <p className="text-slate-400 text-sm">Posicionamos sua ficha no Google Maps para dominar o topo das buscas na sua região, gerando visitas e ligações diárias.</p>
                  </div>
                  <div className="bg-[#08090C] border border-slate-800 p-6" data-aos="zoom-in" data-aos-delay="600">
                      <h3 className="text-[#D4AF37] font-semibold uppercase tracking-wider text-sm mb-3">Clientes Gratuitos</h3>
                      <p className="text-slate-400 text-sm">Pare de refém do custo por clique. Clientes orgânicos não cobram pedágio do Facebook ou Google Ads.</p>
                  </div>
              </div>
          </div>
      </div>

    </section>
  );
}
