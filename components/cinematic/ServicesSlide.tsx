export default function ServicesSlide() {
  const pillars = [
    {
      id: "pilar-1",
      number: "01",
      title: "Dominância Local (GMN)",
      focus: "Ser a única escolha lógica da região",
      items: [
        {
          subTitle: "Setup de Alta Conversão",
          desc: "Sua empresa não existe se não está no mapa. Construímos o seu ativo digital do absoluto zero no Google, aplicando engenharia de palavras-chave locais para que o seu negócio seja encontrado pelos clientes exatos do seu bairro. Fazer o seu telefone tocar antes do seu concorrente."
        },
        {
          subTitle: "Recuperação e Dominância",
          desc: "Você está perdendo vendas todos os dias para concorrentes piores que você, apenas porque eles estão na sua frente no Google. Nossa auditoria diagnostica os gargalos da sua ficha, corrige punições e aplica SEO Local para empurrar seu negócio para o top 3 das buscas. Uma máquina de captação diária."
        }
      ]
    },
    {
      id: "pilar-2",
      number: "02",
      title: "Engenharia de Delivery (iFood)",
      focus: "Sair da guerra de preços e liderar os pedidos",
      items: [
        {
          subTitle: "Lançamento Estratégico",
          desc: "Não basta abrir o aplicativo, é preciso jogar o jogo do algoritmo. Estruturamos a sua loja no iFood do zero com categorização inteligente, fotos que geram desejo imediato e descrições persuasivas que dão fome. A loja pronta para faturar."
        },
        {
          subTitle: "Alavancagem de Cardápio",
          desc: "Sua loja tem visitas, mas não vende? Re-desenhamos a arquitetura do seu cardápio. Aplicamos engenharia de preços, combos lucrativos e venda cruzada (cross-sell) para aumentar o ticket médio. Transformamos cliques em pedidos finalizados."
        }
      ]
    },
    {
      id: "pilar-3",
      number: "03",
      title: "Aquisição Ativa (Tráfego)",
      focus: "Previsibilidade e fim do boca a boca",
      items: [
        {
          subTitle: "Injeção de Caixa Imediata",
          desc: "Chega de panfletagem digital que só traz curiosos. Compramos os clientes certos para você. Criamos campanhas cirúrgicas no Google e Meta Ads, exibindo sua oferta apenas para quem mora em Santo Antônio do Descoberto e já tem intenção de compra."
        },
        {
          subTitle: "Aceleração de Negócios Físicos",
          desc: "Criamos campanhas de tráfego de guerrilha hiper-localizadas num raio curto ao redor da sua empresa. Colocamos sua oferta na tela do cliente no momento exato da decisão. Fim das mesas vazias e estoque parado."
        }
      ]
    },
    {
      id: "pilar-4",
      number: "04",
      title: "Percepção de Valor (Branding)",
      focus: "Confiança absoluta e blindagem contra preço",
      items: [
        {
          subTitle: "Design de Autoridade",
          desc: "O cliente de Santo Antônio do Descoberto julga a qualidade do seu serviço nos primeiros 3 segundos. Criamos uma identidade visual premium que transmite confiança, profissionalismo e justifica cobrar mais caro. Torne-se a referência definitiva do seu mercado."
        }
      ]
    },
    {
      id: "pilar-5",
      number: "05",
      title: "Engenharia Comercial",
      focus: "Transformar atendentes em closers de alta performance",
      items: [
        {
          subTitle: "Esquadrão de Vendas",
          desc: "Ter leads não adianta se o time queima a venda. Entregamos a mais avançada consultoria de vendas de Santo Antônio do Descoberto. Implementamos processos de alta conversão (SPIN Selling, BANT, AIDA) e análise comportamental (DISC). Escale sua taxa de conversão e domine o Entorno."
        }
      ]
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#050507] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-duration="1000">
          <p className="tracking-widest uppercase font-bold text-xs mb-4 border-b border-slate-600 inline-block pb-1 text-[#D4AF37]">
            O Ecossistema
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-200">
            Os 5 Pilares da <span className="text-metallic italic">Kelevra Corp.</span>
          </h2>
          <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg">
            A infraestrutura comercial de alto padrão que domina Santo Antônio do Descoberto e região.
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="bg-[#08090C] border border-slate-800 hover:border-[#D4AF37]/50 transition-colors duration-500 rounded-sm p-8 md:p-12 relative overflow-hidden group"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              {/* Decorative Number */}
              <div className="absolute -right-4 -top-8 text-8xl font-playfair font-black text-slate-800/20 group-hover:text-[#D4AF37]/5 transition-colors duration-500 pointer-events-none select-none">
                {pillar.number}
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-playfair font-bold text-slate-200 mb-2 flex items-center gap-4">
                  <span className="text-[#D4AF37] text-xl">◆</span> {pillar.title}
                </h3>
                <p className="text-sm tracking-widest uppercase text-slate-500 mb-8 border-b border-slate-800 pb-4">
                  Foco: <span className="text-slate-400">{pillar.focus}</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pillar.items.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <h4 className="text-[#D4AF37] text-sm uppercase font-semibold tracking-wider mb-3">
                        {item.subTitle}
                      </h4>
                      <p className="text-slate-400 font-light leading-relaxed text-base">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
