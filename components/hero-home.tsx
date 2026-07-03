export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Dark Blue/Gold elements */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-slate-900 rounded-full blur-[120px] opacity-80 translate-x-1/3"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[100px] -translate-x-1/2"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-16 pt-36 md:pb-24 md:pt-48 text-center max-w-4xl mx-auto">
          
          <div 
            className="inline-flex items-center px-4 py-1.5 border border-yellow-600/30 bg-yellow-500/5 mb-8"
            data-aos="fade-down"
          >
            <span className="text-yellow-500 font-bold text-xs tracking-[0.2em] uppercase">Pare de perder dinheiro com anúncios</span>
          </div>

          <h1
            className="mb-8 text-5xl md:text-6xl lg:text-7xl font-jakarta font-extrabold text-white leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay={150}
          >
            Seu site traz clientes reais ou é um <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">panfleto esquecido no Google?</span>
          </h1>
          
          <p
            className="mb-10 text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Terceirize a aquisição de clientes para o SEO e AEO. A Kelevra Corp posiciona a sua marca como a primeira resposta no Google e nas IAs (ChatGPT/Gemini). Tráfego gratuito, qualificado e previsível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay={450}>
            <a
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold text-lg transition-all tracking-wide shadow-[0_0_20px_rgba(202,138,4,0.3)] hover:shadow-[0_0_30px_rgba(202,138,4,0.5)] uppercase"
              href="https://wa.me/5561999999999" target="_blank"
            >
              Pedir Diagnóstico Orgânico Gratuito
            </a>
          </div>
          
          <div className="mt-8 text-slate-500 text-sm font-medium" data-aos="fade-up" data-aos-delay={500}>
            *Analisamos gratuitamente o potencial orgânico da sua empresa.
          </div>

        </div>
      </div>
    </section>
  );
}
