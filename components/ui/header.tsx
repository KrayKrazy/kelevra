import Logo from "./logo";

export default function Header() {
  const whatsappLink = "https://wa.me/5561999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20Kelevra.";

  return (
    <header className="fixed top-0 z-30 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li>
              <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-yellow-500 transition-colors hidden md:block">
                Especialidades
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                className="px-6 py-2.5 bg-yellow-600/10 text-yellow-500 border border-yellow-600/50 font-medium text-sm rounded-none hover:bg-yellow-600 hover:text-slate-900 transition-all uppercase tracking-widest"
              >
                Falar com Consultor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
