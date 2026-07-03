import "./css/style.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Kelevra Corp. | O Futuro é Iluminado",
  description: "Especialistas em SEO, AEO e Desenvolvimento de Alta Performance para posicionar sua empresa no topo das buscas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} bg-slate-950 font-inter tracking-tight text-slate-300 antialiased selection:bg-yellow-500/30 selection:text-yellow-200`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
