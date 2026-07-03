import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Kelevra Corp">
      <div className="relative h-12 w-auto">
        <Image 
          src={LogoImg} 
          alt="Kelevra Corp Logo" 
          width={180} 
          height={48} 
          className="object-contain h-full w-auto" 
          priority
        />
      </div>
    </Link>
  );
}
