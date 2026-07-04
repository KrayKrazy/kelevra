export default function HeroHome() {
  return (
    <section className="relative bg-[#0B1528] border-b border-slate-800/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <div className="pb-16 pt-40 md:pb-24 md:pt-48 max-w-4xl">
          
          <div 
            className="inline-flex items-center mb-6"
            data-aos="fade-down"
          >
            <span className="text-[#D4AF37] font-medium text-sm tracking-[0.15em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              O FUTURO É ILUMINADO.
            </span>
          </div>

          <h1
            className="mb-8 text-5xl md:text-7xl font-playfair font-medium text-white leading-[1.1] tracking-tight"
            data-aos="fade-up"
            data-aos-delay={150}
          >
            Seu site traz clientes reais ou é um panfleto esquecido no <span className="text-[#D4AF37] italic">Google?</span>
          </h1>
          
          <p
            className="mb-10 text-xl text-slate-300 font-light leading-relaxed max-w-2xl"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            A Kelevra é a principal agência de Marketing Orgânico (SEO e AEO) de Santo Antônio do Descoberto e região. Posicionamos a sua marca como a resposta definitiva.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay={450}>
            <a
              className="inline-flex justify-center items-center px-8 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-[#0B1528] font-semibold transition-colors rounded-sm"
              href="https://wa.me/5561999999999" target="_blank"
            >
              Solicitar Diagnóstico
            </a>
            <a
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white font-medium transition-colors rounded-sm"
              href="#servicos"
            >
              Entender a Metodologia
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
