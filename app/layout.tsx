import "./css/style.css";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Kelevra Corp. | Agência de Marketing e SEO em Santo Antônio do Descoberto - GO",
  description: "A principal Agência de Marketing, SEO e AEO de Santo Antônio do Descoberto, Goiás. Dominamos as buscas do Google e transformamos sites em máquinas de vendas B2B.",
  keywords: "Agência de Marketing Santo Antônio do Descoberto, SEO Goiás, Criação de Sites Santo Antônio do Descoberto, Marketing Digital GO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#0B1528] font-inter tracking-tight text-slate-300 antialiased selection:bg-[#D4AF37]/30 selection:text-white`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
