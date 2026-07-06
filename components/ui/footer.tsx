import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B1528] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Logo />
        <div className="text-slate-500 text-sm font-light text-left md:text-right space-y-1">
          <p className="text-slate-300 font-medium mb-2">Contato</p>
          <p>
            <a href="https://www.instagram.com/kelevra_corp/" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center justify-start md:justify-end gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @kelevra_corp
            </a>
          </p>
          <p>(61) 98184-9873</p>
          <p>kelevracontato@gmail.com</p>
          <p className="max-w-xs mt-2">Quadra 24 lote 11 apartamento 1 Parque Estrela Dalva XI, Santo Antônio do Descoberto - Goiás</p>
          <p className="pt-4 text-slate-600">Kelevra Corp &copy; 2026.</p>
        </div>
      </div>
    </footer>
  );
}
