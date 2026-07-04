import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Kelevra Corp">
      <div className="relative h-12 flex items-center">
        <span className="text-xl font-medium font-playfair text-white tracking-tight">Kelevra.</span>
      </div>
    </Link>
  );
}
