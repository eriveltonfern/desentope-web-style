import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-nuclear.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Phone, MessageCircle, Clock, ShieldCheck, Wrench, Zap, Droplets, Truck,
  CheckCircle2, MapPin, Mail, PhoneCall, Search, Sparkles, ThumbsUp,
  Award, Users, DollarSign, Timer, Star, ChevronDown, Camera, Building2, Home, Factory,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desentupidora Nuclear — 24h | Força e Tecnologia" },
      { name: "description", content: "Desentupidora Nuclear: atendimento 24h. Desentupimento de pias, ralos, vasos, esgoto e fossa. Hidrojateamento, câmera de inspeção e garantia." },
      { property: "og:title", content: "Desentupidora Nuclear — Atendimento 24h" },
      { property: "og:description", content: "Força e tecnologia para resolver entupimentos. Orçamento sem compromisso." },
    ],
  }),
});

const PHONE = "(11) 99999-0000";
const WHATS = "https://wa.me/5511999990000";
const TEL = `tel:${PHONE.replace(/\D/g, "")}`;

function Section({ id, eyebrow, title, accent, children, kicker, className = "" }: any) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          {eyebrow && <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">{eyebrow}</div>}
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none">
            {title} {accent && <span className="text-hazard">{accent}</span>}
          </h2>
          {kicker && <p className="mt-4 text-muted-foreground text-lg">{kicker}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-hazard text-hazard-foreground text-xs sm:text-sm font-bold tracking-wider uppercase">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Plantão 24h ativo agora — Resposta em até 30 min</span>
          <a href={TEL} className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>

      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Desentupidora Nuclear" className="h-16 sm:h-20 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider">
            <a href="#solucoes" className="hover:text-hazard transition">Soluções</a>
            <a href="#diferenciais" className="hover:text-hazard transition">Diferenciais</a>
            <a href="#como-funciona" className="hover:text-hazard transition">Como funciona</a>
            <a href="#sobre" className="hover:text-hazard transition">Sobre</a>
            <a href="#depoimentos" className="hover:text-hazard transition">Depoimentos</a>
            <a href="#faq" className="hover:text-hazard transition">FAQ</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-hazard text-hazard-foreground px-5 py-2.5 font-display font-bold uppercase tracking-wide text-sm hover:scale-105 transition-transform">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden grit-texture">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-hazard text-hazard-foreground px-3 py-1 mb-6 font-display font-bold uppercase text-xs tracking-widest animate-pulse">
              <Zap className="w-3.5 h-3.5" /> Emergência? Atendemos em minutos
            </div>
            <h1 className="font-display font-black uppercase leading-[0.85] text-5xl sm:text-7xl md:text-8xl">
              <span className="block text-foreground">Entupiu?</span>
              <span className="block text-hazard" style={{ textShadow: "0 0 40px oklch(0.85 0.18 95 / 0.3)" }}>Desentope</span>
              <span className="block text-foreground">agora.</span>
              <span className="block text-stroke">Sem dor de cabeça.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Cada minuto de espera é um risco maior de transbordamento, mau cheiro e prejuízo.
              <span className="text-foreground font-semibold"> Chame a Nuclear e resolva em 1 visita</span> — com hidrojato profissional, equipe uniformizada e <span className="text-hazard font-semibold">90 dias de garantia por escrito</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATS} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-hazard text-hazard-foreground px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "var(--shadow-brutal)" }}>
                <MessageCircle className="w-5 h-5" /> Resolver agora no WhatsApp
              </a>
              <a href={TEL}
                className="inline-flex items-center gap-3 border-2 border-hazard text-hazard px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:bg-hazard hover:text-hazard-foreground transition">
                <Phone className="w-5 h-5" /> Ligar: {PHONE}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-hazard" /> Orçamento grátis · Sem taxa de visita · Pagamento só após o serviço pronto
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "24h", l: "Atendimento" },
                { n: "+15", l: "Anos de experiência" },
                { n: "100%", l: "Garantia do serviço" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-hazard pl-3">
                  <div className="font-display font-black text-3xl text-hazard">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-3 hazard-stripes opacity-90" />
      </section>

      {/* Nossas Soluções */}
      <Section id="solucoes" eyebrow="O que resolvemos hoje" title="Diga o problema." accent="A gente resolve."
        kicker="Não importa se é pia trancada às 3h da manhã ou esgoto transbordando no comércio: temos o equipamento certo e a equipe pronta para chegar e desentupir na primeira visita.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Droplets, title: "Pia entupida", desc: "Cozinha parada, banheiro alagado? Removemos gordura e resíduos sem quebrar nada." },
            { icon: Wrench, title: "Vaso sanitário", desc: "Desentupimos com segurança e sem sujeira — você usa o banheiro no mesmo dia." },
            { icon: Zap, title: "Ralo e tubulação", desc: "Hidrojato de alta pressão que limpa por dentro e evita o próximo entupimento." },
            { icon: Truck, title: "Caixa de gordura e fossa", desc: "Sucção completa, descarte legal e local higienizado. Adeus mau cheiro." },
            { icon: ShieldCheck, title: "Esgoto transbordando", desc: "Diagnóstico com câmera + desobstrução da rede principal antes do prejuízo crescer." },
            { icon: Camera, title: "Inspeção com câmera", desc: "Mostramos o problema na sua tela. Nada de orçamento no escuro." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="group bg-card border border-border p-7 hover:border-hazard transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-hazard/5 group-hover:bg-hazard/10 transition" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
              <Icon className="w-10 h-10 text-hazard mb-4" strokeWidth={1.5} />
              <h3 className="font-display font-bold uppercase text-xl mb-2 tracking-wide">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-hazard/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-12">
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">Por que somos diferentes</div>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none">
              Chegamos rápido. <span className="text-hazard">Resolvemos de verdade.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Sem improviso, sem enrolação e sem aquela velha história de "amanhã eu volto".</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Plantão 24h real", desc: "Madrugada, domingo, feriado: tem técnico de prontidão para sair agora." },
              { icon: ShieldCheck, title: "90 dias de garantia", desc: "Entupiu de novo no mesmo ponto? A gente volta sem cobrar nada." },
              { icon: Zap, title: "Hidrojato de verdade", desc: "Equipamento profissional que dissolve a obstrução, não só empurra." },
              { icon: DollarSign, title: "Zero taxa de visita", desc: "Orçamento na hora, fechado antes de começar. Sem surpresa na conta." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-2 border-border bg-background p-6 hover:border-hazard transition">
                <Icon className="w-10 h-10 text-hazard mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold uppercase text-lg tracking-wide mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <Section id="como-funciona" eyebrow="Rápido e sem mistério" title="Em 4 passos" accent="seu problema some"
        kicker="Do primeiro 'oi' no WhatsApp à garantia assinada na sua mão. Tudo no mesmo dia, do seu jeito.">
        <div className="grid md:grid-cols-4 gap-6 relative">
          {[
            { icon: PhoneCall, n: "01", title: "Você chama", desc: "Mensagem no WhatsApp ou ligação. Respondemos em minutos, dia ou noite." },
            { icon: Search, n: "02", title: "Diagnóstico na hora", desc: "Equipe vai até você, identifica a causa e fecha o orçamento — antes de iniciar." },
            { icon: Wrench, n: "03", title: "Resolvemos hoje", desc: "Hidrojato, sonda elétrica, câmera. O que for preciso para destravar de uma vez." },
            { icon: ShieldCheck, n: "04", title: "Garantia na mão", desc: "Local limpo, recibo emitido e até 90 dias de garantia escrita. Tudo certo." },
          ].map(({ icon: Icon, n, title, desc }) => (
            <div key={n} className="relative bg-card border border-border p-7">
              <div className="absolute -top-4 -left-2 font-display font-black text-7xl text-hazard/20 leading-none">{n}</div>
              <Icon className="w-10 h-10 text-hazard mb-4 relative" strokeWidth={1.5} />
              <h3 className="font-display font-bold uppercase text-xl mb-2 tracking-wide relative">{title}</h3>
              <p className="text-sm text-muted-foreground relative">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">Quem somos</div>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none mb-6">
              +15 anos tirando gente do <span className="text-hazard">sufoco</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              A Nuclear nasceu cansada de ouvir histórias de cliente enganado, serviço mal feito e taxa surpresa.
              Por isso fazemos diferente: equipe própria, equipamento de ponta e palavra que se cumpre.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Mais de <span className="text-foreground font-semibold">10 mil atendimentos</span> em residências, comércios e indústrias.
              Quando a Nuclear chega, o problema vai embora — com nota fiscal, garantia e o respeito que você merece.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "+15", l: "Anos de estrada" },
                { n: "+10k", l: "Clientes atendidos" },
                { n: "98%", l: "Voltariam a chamar" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-hazard pl-3">
                  <div className="font-display font-black text-3xl text-hazard">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-background border-2 border-hazard p-8 flex flex-col justify-between" style={{ boxShadow: "var(--shadow-brutal)" }}>
              <div>
                <Clock className="w-16 h-16 text-hazard mb-4" strokeWidth={1.5} />
                <div className="font-display font-black uppercase text-7xl md:text-8xl text-hazard leading-none">24H</div>
                <div className="font-display font-bold uppercase text-2xl text-foreground mt-2">A Nuclear nunca dorme</div>
              </div>
              <p className="text-muted-foreground text-sm">
                Enquanto outras desentupidoras só voltam segunda-feira, a gente está saindo com a van agora.
              </p>
              <a href={WHATS} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-hazard text-hazard-foreground py-3 font-display font-bold uppercase tracking-wider hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> Quero atendimento agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Realizados */}
      <Section id="realizados" eyebrow="Para qualquer obra ou imóvel" title="Sua estrutura," accent="nossa especialidade."
        kicker="Mesmo time, mesma garantia, mesmo nível técnico — seja para destravar a pia da sua casa ou liberar a rede principal de uma fábrica.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Home, title: "Residencial", items: ["Atendimento na hora, sem agenda", "Pias, ralos, vasos e caixas", "Equipe que respeita sua casa"] },
            { icon: Building2, title: "Comercial", items: ["Restaurantes sem parar a operação", "Condomínios com NF e contrato", "Lojas, escritórios e clínicas"] },
            { icon: Factory, title: "Industrial", items: ["Hidrojato de alta vazão", "Redes de grande porte", "Manutenção preventiva programada"] },
          ].map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-card border border-border p-8 hover:border-hazard transition">
              <Icon className="w-12 h-12 text-hazard mb-5" strokeWidth={1.5} />
              <h3 className="font-display font-bold uppercase text-2xl mb-4 tracking-wide">{title}</h3>
              <ul className="space-y-2">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-hazard flex-shrink-0 mt-0.5" />{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Por que nos escolher */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">Vantagens</div>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none">
              Por que <span className="text-hazard">nos escolher</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { icon: Award, t: "15+ anos de experiência", d: "Equipe que já viu de tudo, do entupimento simples ao caso mais complexo." },
              { icon: Users, t: "Equipe uniformizada", d: "Profissionais identificados, educados e treinados para entrar na sua casa." },
              { icon: Timer, t: "Resposta em minutos", d: "Atendimento ágil. A gente não enrola, chega e resolve." },
              { icon: ShieldCheck, t: "Garantia escrita", d: "Até 90 dias de garantia em todo serviço executado." },
              { icon: Sparkles, t: "Limpeza após o serviço", d: "Deixamos o local limpo como estava antes da nossa chegada." },
              { icon: ThumbsUp, t: "Preço justo", d: "Orçamento transparente, sem taxas escondidas e sem surpresa." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <div className="w-12 h-12 bg-hazard text-hazard-foreground flex-shrink-0 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-lg mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Section id="depoimentos" eyebrow="Clientes" title="O que dizem nossos" accent="clientes"
        kicker="A nota que importa é a do cliente que voltou a usar a pia em paz.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Marina S.", c: "Vila Mariana", t: "Atenderam às 2h da manhã, em pleno feriado. Equipe educada, resolveu rapidíssimo. Salvaram minha cozinha." },
            { n: "Carlos R.", c: "Santo André", t: "Já chamei outras desentupidoras e sempre era enrolação. A Nuclear chegou no horário e resolveu na primeira visita." },
            { n: "Juliana A.", c: "Tatuapé", t: "Profissionais sérios, uniformizados e com equipamento de verdade. O preço foi justo e ainda deram garantia." },
          ].map((d) => (
            <div key={d.n} className="bg-card border border-border p-7 relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-hazard text-hazard" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{d.t}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold uppercase tracking-wide">{d.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.c}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">Dúvidas</div>
            <h2 className="font-display font-black uppercase text-4xl md:text-5xl leading-none">
              Perguntas <span className="text-hazard">frequentes</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Não achou sua dúvida? Fale com a gente no WhatsApp.</p>
          </div>
          <div className="space-y-3">
            {[
              { q: "Vocês atendem 24h de verdade?", a: "Sim. Atendemos 24 horas, todos os dias do ano, inclusive feriados e madrugadas." },
              { q: "Cobram taxa de visita?", a: "Não. O orçamento é gratuito e sem compromisso. Você só paga se autorizar o serviço." },
              { q: "Precisa quebrar piso ou parede?", a: "Na grande maioria dos casos, não. Usamos equipamento que desobstrui sem quebra." },
              { q: "Qual a garantia?", a: "Oferecemos garantia escrita de até 90 dias no serviço executado." },
              { q: "Quais regiões atendem?", a: "Toda a Região Metropolitana de São Paulo, capital e Grande SP." },
              { q: "Quais formas de pagamento?", a: "Aceitamos PIX, dinheiro, cartão de débito e crédito." },
            ].map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="bg-background border border-border">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-card transition"
                  >
                    <span className="font-display font-bold uppercase tracking-wide text-base sm:text-lg">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-hazard flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-muted-foreground border-t border-border pt-4">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-hazard text-hazard-foreground p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent 0 30px, oklch(0.08 0 0) 30px 32px)"
            }} />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="font-display font-bold uppercase tracking-widest text-sm mb-3">Emergência?</div>
                <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none">
                  Não espere o problema piorar.
                </h2>
                <p className="mt-4 text-base md:text-lg max-w-2xl opacity-90">
                  Quanto mais tempo, maior o estrago. Chame a Nuclear agora e resolva ainda hoje.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={TEL} className="inline-flex items-center gap-3 bg-background text-hazard px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:scale-105 transition">
                  <Phone className="w-5 h-5" /> {PHONE}
                </a>
                <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border-2 border-hazard-foreground px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:bg-hazard-foreground hover:text-hazard transition">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary">
        <div className="container mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Desentupidora Nuclear" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">Força e tecnologia para resolver entupimentos. Atendimento 24h em toda a região metropolitana.</p>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Soluções</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Desentupimento de pias</li>
              <li>Vasos sanitários</li>
              <li>Hidrojateamento</li>
              <li>Limpeza de fossa</li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Navegação</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solucoes" className="hover:text-hazard">Soluções</a></li>
              <li><a href="#sobre" className="hover:text-hazard">Quem somos</a></li>
              <li><a href="#depoimentos" className="hover:text-hazard">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-hazard">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Contato</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-hazard" /> {PHONE}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-hazard" /> contato@desentupidoranuclear.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-hazard" /> Região Metropolitana — SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-5 text-center text-xs text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} Desentupidora Nuclear — Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATS} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-hazard text-hazard-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        style={{ boxShadow: "var(--shadow-hazard)" }}>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
