import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Kelevra Corp">
      <div className="relative h-12 flex items-center">
        <span className="text-2xl font-bold font-playfair text-[#D4AF37] tracking-tight">Kelevra</span>
        <span className="text-2xl font-light font-playfair text-white ml-1">corp.</span>
      </div>
    </Link>
  );
}
