import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B1528] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <div className="text-slate-500 text-sm mt-4 md:mt-0 font-light">
          Kelevra Corp &copy; 2026. Santo Antônio do Descoberto, GO.
        </div>
      </div>
    </footer>
  );
}
