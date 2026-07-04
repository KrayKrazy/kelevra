import Logo from "./logo";

export default function Header() {
  const whatsappLink = "https://wa.me/5561999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consultoria%20com%20a%20Kelevra.";

  return (
    <header className="fixed top-0 z-30 w-full bg-[#0B1528]/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
