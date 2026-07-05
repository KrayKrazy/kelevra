export default function ValueMatrixSlide() {
  return (
    <section id="matriz" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-8 md:p-24 bg-[#08090C] overflow-hidden border-t border-slate-800">
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex justify-end opacity-20 pointer-events-none">
          <svg className="w-full h-full wireframe-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid meet">
              <circle cx="150" cy="100" r="80" fill="none" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="150" cy="100" r="60" fill="none" strokeWidth="1.5"/>
              <circle cx="150" cy="100" r="30" className="fill-white" opacity="0.1"/>
              <path d="M150 20 L150 40 M150 160 L150 180 M70 100 L90 100 M210 100 L230 100" strokeWidth="2"/>
          </svg>
      </div>

      <div className="z-10 max-w-2xl w-full" data-aos="fade-right" data-aos-duration="1000">
          <p className="tracking-widest uppercase font-bold text-xs mb-4 border-b border-slate-600 inline-block pb-1 text-slate-400">
            A Arquitetura
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-slate-200">
              A matriz de busca do <span className="text-metallic italic">seu cliente ideal.</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-[#D4AF37] to-transparent mb-10 opacity-50"></div>
          
          <ul className="space-y-8 text-xl font-light text-slate-300">
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <span className="mr-6 mt-1 font-bold border border-[#D4AF37] text-[#D4AF37] rounded-full w-8 h-8 flex shrink-0 items-center justify-center text-sm">1</span>
                  <div>
                    <strong className="text-slate-200 uppercase tracking-wide text-sm block mb-2">Engenharia AEO (Inteligência Artificial)</strong>
                    <span className="leading-relaxed text-slate-400 text-lg">Preparamos o seu site para ser lido e recomendado pelos novos motores de busca como ChatGPT e Gemini.</span>
                  </div>
              </li>
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                  <span className="mr-6 mt-1 font-bold border border-[#D4AF37] text-[#D4AF37] rounded-full w-8 h-8 flex shrink-0 items-center justify-center text-sm">2</span>
                  <div>
                    <strong className="text-slate-200 uppercase tracking-wide text-sm block mb-2">Dominação Local e Nacional</strong>
                    <span className="leading-relaxed text-slate-400 text-lg">Estruturamos as palavras-chave exatas para você dominar Santo Antônio do Descoberto e as regiões que importam.</span>
                  </div>
              </li>
          </ul>
      </div>

    </section>
  );
}
