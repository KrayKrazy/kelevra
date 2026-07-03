export default function Cta() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      
      {/* Golden accents */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative border border-slate-800 bg-slate-900 px-8 py-16 text-center shadow-2xl">
          
          <h2 className="mb-6 text-3xl font-jakarta font-bold text-white md:text-5xl">
            Pronto para iluminar o seu negócio?
          </h2>
          <p className="mb-10 text-slate-400 font-light text-lg max-w-2xl mx-auto">
            Agende um diagnóstico orgânico sem compromisso. Vamos analisar a sua presença digital atual e desenhar o roteiro para o topo do Google.
          </p>

          <a
            href="https://wa.me/5561999999999"
            target="_blank"
            className="inline-flex justify-center items-center px-10 py-4 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold text-lg transition-all uppercase tracking-wide"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
