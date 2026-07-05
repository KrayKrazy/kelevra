import Logo from "./logo";

export default function Header() {
  const whatsappLink = "https://wa.me/5561981849873?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Kelevra%20Corp%20e%20gostaria%20de%20entender%20como%20transformar%20meu%20Google%20Meu%20Neg%C3%B3cio%20em%20uma%20m%C3%A1quina%20de%20vendas%20org%C3%A2nica.";

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
