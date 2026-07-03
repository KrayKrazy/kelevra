import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center">
        <Logo />
        <p className="text-slate-500 mt-6 text-sm font-light text-center max-w-md">
          Especialistas em SEO, AEO e Desenvolvimento Web B2B de Alta Performance.
        </p>
        <div className="text-slate-600 text-xs mt-10 tracking-[0.2em] uppercase">
          Kelevra Corp &copy; 2026. O Futuro é Iluminado.
        </div>
      </div>
    </footer>
  );
}
