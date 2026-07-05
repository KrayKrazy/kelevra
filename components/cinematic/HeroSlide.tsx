import Link from 'next/link';

export default function HeroSlide() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#050507]">
      {/* Geometria de Fundo (Baseada no Slide 1) */}
      <svg className="absolute inset-0 w-full h-full wireframe-svg opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="30%" y2="40%" strokeWidth="0.5"/>
          <line x1="30%" y1="40%" x2="50%" y2="20%" strokeWidth="0.5"/>
          <line x1="50%" y1="20%" x2="80%" y2="50%" strokeWidth="0.5"/>
          <line x1="80%" y1="50%" x2="60%" y2="80%" strokeWidth="0.5"/>
          <line x1="60%" y1="80%" x2="20%" y2="70%" strokeWidth="0.5"/>
          <line x1="20%" y1="70%" x2="30%" y2="40%" strokeWidth="0.5"/>
          <line x1="50%" y1="20%" x2="60%" y2="80%" strokeWidth="0.5"/>
          <circle cx="10%" cy="20%" r="3" fill="#334155" stroke="none"/>
          <circle cx="30%" cy="40%" r="4" fill="#334155" stroke="none"/>
          <circle cx="50%" cy="20%" r="3" fill="#334155" stroke="none"/>
          <circle cx="80%" cy="50%" r="4" fill="#334155" stroke="none"/>
          <circle cx="60%" cy="80%" r="3" fill="#334155" stroke="none"/>
          <circle cx="20%" cy="70%" r="3" fill="#334155" stroke="none"/>
      </svg>

      <div className="z-10 max-w-5xl px-6 text-center w-full mt-16 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
        <p className="tracking-widest uppercase font-bold text-xs md:text-sm mb-6 border-b border-slate-700 inline-block pb-2 text-slate-400">
          Metodologia Orgânica
        </p>
        <h1 className="font-playfair text-5xl md:text-8xl font-bold tracking-tight mb-8 text-metallic leading-tight">
          Kelevra corp.
        </h1>
        <div className="h-px w-32 bg-[#D4AF37]/50 mx-auto mb-8"></div>
        <p className="text-xl md:text-3xl font-light tracking-widest text-slate-300">
          O FUTURO É ILUMINADO.
        </p>
        
        <div className="mt-16 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
          <Link href="#matriz" className="inline-flex flex-col items-center justify-center text-slate-500 hover:text-[#D4AF37] transition-colors">
            <span className="text-xs tracking-widest uppercase mb-2">Descubra a Matriz</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
