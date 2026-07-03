export default function Faq() {
  const faqs = [
    {
      q: "O que exatamente é AEO?",
      a: "AEO (Answer Engine Optimization) é a evolução do SEO. Ao invés de otimizar apenas para o buscador do Google, nós otimizamos a sua marca para que ela seja a resposta exata fornecida por Inteligências Artificiais como o ChatGPT, Copilot e Gemini quando o seu cliente fizer uma pergunta."
    },
    {
      q: "Em quanto tempo o SEO dá resultado?",
      a: "O SEO não é um botão mágico como anúncios pagos (que param de funcionar assim que o seu saldo acaba). É uma construção de patrimônio. Dependendo da sua autoridade atual, os primeiros resultados robustos começam a aparecer entre o 3º e o 6º mês de projeto intenso."
    },
    {
      q: "Vocês também fazem Tráfego Pago (Anúncios)?",
      a: "Nossa especialidade master é a infraestrutura orgânica (SEO/AEO e Web Development). Nós preparamos o seu terreno para converter melhor qualquer tipo de tráfego. Um site otimizado por nós vai fazer os seus anúncios atuais renderem o triplo."
    },
    {
      q: "Como funciona o Diagnóstico Gratuito?",
      a: "É uma reunião online estratégica. Faremos uma auditoria básica na sua presença digital atual, mostraremos falhas técnicas que estão te impedindo de rankear e desenharemos um escopo do que precisa ser feito. Sem compromisso."
    }
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-400 font-light">Respostas rápidas sobre a nossa consultoria e metodologias.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-yellow-600/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2 flex items-start">
                <span className="text-yellow-500 mr-3">Q.</span>
                {faq.q}
              </h4>
              <p className="text-slate-400 font-light pl-8 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
