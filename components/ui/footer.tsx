import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B1528] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Logo />
        <div className="text-slate-500 text-sm font-light text-left md:text-right space-y-1">
          <p className="text-slate-300 font-medium mb-2">Contato</p>
          <p>(61) 98184-9873</p>
          <p>kelevracontato@gmail.com</p>
          <p className="max-w-xs mt-2">Quadra 24 lote 11 apartamento 1 Parque Estrela Dalva XI, Santo Antônio do Descoberto - Goiás</p>
          <p className="pt-4 text-slate-600">Kelevra Corp &copy; 2026.</p>
        </div>
      </div>
    </footer>
  );
}
