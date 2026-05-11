import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-nuclear.png";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-team.jpg";
import imgPia from "@/assets/service-pia.jpg";
import imgVaso from "@/assets/service-vaso.jpg";
import imgRalo from "@/assets/service-ralo.jpg";
import imgFossa from "@/assets/service-fossa.jpg";
import imgEsgoto from "@/assets/service-esgoto.jpg";
import imgHidro from "@/assets/service-hidrojato.jpg";
import {
  Phone, Clock, ShieldCheck, Wrench, Zap, Droplets, Truck,
  CheckCircle2, MapPin, Mail, PhoneCall, Search, Sparkles, ThumbsUp,
  Award, Users, DollarSign, Timer, Star, ChevronDown, Camera, Building2, Home, Factory, Menu, X,
} from "lucide-react";

const SITE_URL = "https://desentupidoranuclear.com.br";
const PHONE = "(31) 99952-1637";
const WHATS_NUMBER = "5531999521637";
const WHATS = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent("Olá! Preciso de atendimento de desentupidora.")}`;
const TEL = `tel:+${WHATS_NUMBER}`;

const SEO_TITLE = "Desentupidora 24h em BH e Região Metropolitana | Nuclear";
const SEO_DESC = "Desentupidora 24h em Belo Horizonte e Região Metropolitana. Pia, vaso, ralo, esgoto e fossa. Hidrojato, equipe em 60 min, sem taxa de visita e 90 dias de garantia.";

const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Desentupidora Nuclear",
  "image": `${SITE_URL}/og.jpg`,
  "url": SITE_URL,
  "telephone": `+${WHATS_NUMBER}`,
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Belo Horizonte",
    "addressRegion": "MG",
    "addressCountry": "BR",
  },
  "areaServed": [
    "Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Sabará", "Santa Luzia",
    "Ribeirão das Neves", "Ibirité", "Vespasiano", "Lagoa Santa", "Pedro Leopoldo",
  ].map((c) => ({ "@type": "City", "name": c })),
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1280" },
  "sameAs": [],
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { q: "Vocês atendem 24h de verdade mesmo?", a: "Sim, com técnicos de plantão todos os dias do ano em BH e Região Metropolitana." },
    { q: "Quanto tempo até chegar?", a: "Em emergências em BH e região, costumamos chegar entre 30 e 60 minutos." },
    { q: "Cobram taxa de visita ou orçamento?", a: "Não. Vamos até você, avaliamos e fechamos o preço. Você só paga se autorizar." },
    { q: "Vão precisar quebrar piso ou parede?", a: "Quase nunca. Usamos hidrojato, sondas elétricas e câmera para resolver sem destruir nada." },
    { q: "Que garantia vocês dão?", a: "Garantia escrita de até 90 dias. Se entupir no mesmo ponto, voltamos sem cobrar." },
    { q: "Quais regiões atendem?", a: "Belo Horizonte e toda Região Metropolitana de BH: Contagem, Betim, Nova Lima, Sabará, Santa Luzia, Ibirité, Ribeirão das Neves e demais cidades." },
    { q: "Como posso pagar?", a: "PIX, dinheiro, débito e crédito (à vista ou parcelado). Emitimos nota fiscal." },
  ].map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      { name: "keywords", content: "desentupidora bh, desentupidora belo horizonte, desentupidora 24h, hidrojateamento, limpeza de fossa, desentupimento de pia, desentupimento de vaso, região metropolitana bh" },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESC },
      { name: "geo.region", content: "BR-MG" },
      { name: "geo.placename", content: "Belo Horizonte" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS_LD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_LD) },
    ],
  }),
});

// Official WhatsApp icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.918 2.722.918.301 0 .53-.057.731-.158.687-.358.989-1.13.989-1.847 0-.27-.043-.515-.158-.715-.157-.244-1.16-.788-1.547-.974zM16 26.5c-1.793 0-3.524-.443-5.085-1.275l-.357-.215-3.71.974.99-3.624-.244-.387a10.35 10.35 0 0 1-1.59-5.487c0-5.703 4.654-10.355 10.357-10.355 5.704 0 10.357 4.654 10.357 10.357 0 5.704-4.654 10.357-10.357 10.357zm0-22.7C9.097 3.8 3.5 9.397 3.5 16.3c0 2.21.586 4.32 1.7 6.215L3.067 30l7.65-2.005a12.62 12.62 0 0 0 5.283 1.16h.005c6.9 0 12.495-5.598 12.495-12.5C28.5 9.398 22.9 3.8 16 3.8z"/>
    </svg>
  );
}

function Section({ id, eyebrow, title, accent, children, kicker, className = "" }: any) {
  return (
    <section id={id} className={`py-16 sm:py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10 sm:mb-12">
          {eyebrow && <div className="text-hazard font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">{eyebrow}</div>}
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-6xl leading-none">
            {title} {accent && <span className="text-hazard">{accent}</span>}
          </h2>
          {kicker && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{kicker}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [navOpen, setNavOpen] = useState(false);

  const services = [
    { img: imgPia, icon: Droplets, title: "Pia entupida", desc: "Cozinha parada, banheiro alagado? Removemos gordura e resíduos sem quebrar nada." },
    { img: imgVaso, icon: Wrench, title: "Vaso sanitário", desc: "Desentupimos com segurança e sem sujeira — você usa o banheiro no mesmo dia." },
    { img: imgRalo, icon: Zap, title: "Ralo e tubulação", desc: "Hidrojato de alta pressão que limpa por dentro e evita o próximo entupimento." },
    { img: imgFossa, icon: Truck, title: "Caixa de gordura e fossa", desc: "Sucção completa, descarte legal e local higienizado. Adeus mau cheiro." },
    { img: imgEsgoto, icon: ShieldCheck, title: "Esgoto transbordando", desc: "Diagnóstico com câmera + desobstrução da rede principal antes do prejuízo crescer." },
    { img: imgHidro, icon: Camera, title: "Hidrojateamento", desc: "Limpeza profunda com jato de alta pressão. Resolve o entupimento e previne o próximo." },
  ];

  const faqs = [
    { q: "Vocês atendem 24h de verdade mesmo?", a: "Sim, com técnicos de plantão todos os dias do ano. Madrugada, domingo, feriado de Natal — basta chamar." },
    { q: "Quanto tempo até chegar?", a: "Em emergências em BH e Região Metropolitana, costumamos chegar entre 30 e 60 minutos do seu chamado." },
    { q: "Cobram taxa de visita ou orçamento?", a: "Não. Vamos até você, avaliamos e fechamos o preço. Você só paga se autorizar — e o serviço é feito na hora." },
    { q: "Vão precisar quebrar piso ou parede?", a: "Quase nunca. Usamos hidrojato, sondas elétricas e câmera para resolver sem destruir nada. Se houver risco, avisamos antes." },
    { q: "Que garantia vocês dão?", a: "Garantia escrita de até 90 dias. Se o entupimento voltar no mesmo ponto, voltamos sem cobrar." },
    { q: "Quais regiões atendem?", a: "Belo Horizonte e toda a Região Metropolitana: Contagem, Betim, Nova Lima, Sabará, Santa Luzia, Ibirité, Ribeirão das Neves, Vespasiano, Lagoa Santa e demais cidades." },
    { q: "Como posso pagar?", a: "PIX, dinheiro, débito e crédito (à vista ou parcelado). Emitimos nota fiscal em todos os serviços." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-hazard text-hazard-foreground text-[11px] sm:text-sm font-bold tracking-wider uppercase">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Plantão 24h em BH — Resposta em 30 min</span>
          <a href={TEL} className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#top" aria-label="Desentupidora Nuclear — Início" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Logo Desentupidora Nuclear" width={240} height={80} className="h-12 sm:h-16 md:h-20 w-auto" decoding="async" />
          </a>
          <nav aria-label="Principal" className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider">
            <a href="#solucoes" className="hover:text-hazard transition">Soluções</a>
            <a href="#diferenciais" className="hover:text-hazard transition">Diferenciais</a>
            <a href="#como-funciona" className="hover:text-hazard transition">Como funciona</a>
            <a href="#sobre" className="hover:text-hazard transition">Sobre</a>
            <a href="#depoimentos" className="hover:text-hazard transition">Depoimentos</a>
            <a href="#faq" className="hover:text-hazard transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATS} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white px-4 md:px-5 py-2.5 font-display font-bold uppercase tracking-wide text-xs md:text-sm hover:scale-105 transition-transform rounded-sm">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
            <button
              type="button"
              aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
              className="lg:hidden p-2 border border-border"
            >
              {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <nav aria-label="Mobile" className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider">
              {[
                ["#solucoes", "Soluções"], ["#diferenciais", "Diferenciais"],
                ["#como-funciona", "Como funciona"], ["#sobre", "Sobre"],
                ["#depoimentos", "Depoimentos"], ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setNavOpen(false)} className="py-2 border-b border-border hover:text-hazard">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden grit-texture">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" width={1600} height={1000} fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-hazard text-hazard-foreground px-3 py-1 mb-6 font-display font-bold uppercase text-xs tracking-widest animate-pulse">
              <Zap className="w-3.5 h-3.5" /> Emergência em BH? Atendemos em minutos
            </div>
            <h1 className="font-display font-black uppercase leading-[0.85] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Entupiu?</span>
              <span className="block text-hazard" style={{ textShadow: "0 0 40px oklch(0.85 0.18 95 / 0.3)" }}>Desentope</span>
              <span className="block text-foreground">agora.</span>
              <span className="block text-stroke">Sem dor de cabeça.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Cada minuto de espera é mais risco de transbordamento, mau cheiro e prejuízo.
              <span className="text-foreground font-semibold"> Chame a Nuclear e resolva em 1 visita</span> — hidrojato profissional, equipe uniformizada e <span className="text-hazard font-semibold">90 dias de garantia por escrito</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              <a href={WHATS} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-4 font-display font-black uppercase tracking-wider text-base sm:text-lg hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "var(--shadow-brutal)" }}>
                <WhatsAppIcon className="w-5 h-5" /> Resolver no WhatsApp
              </a>
              <a href={TEL}
                className="inline-flex items-center justify-center gap-3 border-2 border-hazard text-hazard px-6 sm:px-8 py-4 font-display font-black uppercase tracking-wider text-base sm:text-lg hover:bg-hazard hover:text-hazard-foreground transition">
                <Phone className="w-5 h-5" /> Ligar: {PHONE}
              </a>
            </div>
            <div className="mt-4 flex items-start sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-hazard flex-shrink-0 mt-0.5 sm:mt-0" /> Orçamento grátis · Sem taxa de visita · Pagamento só após o serviço pronto
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              {[
                { n: "24h", l: "Atendimento" },
                { n: "+15", l: "Anos de experiência" },
                { n: "100%", l: "Garantia do serviço" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-hazard pl-2 sm:pl-3">
                  <div className="font-display font-black text-2xl sm:text-3xl text-hazard">{s.n}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
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
          {services.map(({ img, icon: Icon, title, desc }) => (
            <article key={title}
              className="group bg-card border border-border hover:border-hazard transition-all overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={img} alt={`Serviço de ${title.toLowerCase()} — Desentupidora Nuclear BH`} loading="lazy" decoding="async" width={800} height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-3 left-3 w-12 h-12 bg-hazard text-hazard-foreground flex items-center justify-center">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold uppercase text-xl mb-2 tracking-wide">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <a
                  href={`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(`Olá! Preciso de atendimento para: ${title}.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 font-display font-bold uppercase tracking-wider text-sm hover:opacity-90 transition"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Solicitar pelo WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-hazard/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-12">
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Por que somos diferentes</div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-6xl leading-none">
              Chegamos rápido. <span className="text-hazard">Resolvemos de verdade.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">Sem improviso, sem enrolação e sem aquela velha história de "amanhã eu volto".</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
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
        kicker="Do primeiro 'oi' no WhatsApp à garantia assinada na sua mão. Tudo no mesmo dia.">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
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
      <section id="sobre" className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Quem somos</div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-6xl leading-none mb-6">
              +15 anos tirando gente do <span className="text-hazard">sufoco</span> em BH.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              A Nuclear nasceu cansada de ouvir histórias de cliente enganado, serviço mal feito e taxa surpresa.
              Por isso fazemos diferente: equipe própria, equipamento de ponta e palavra que se cumpre.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Mais de <span className="text-foreground font-semibold">10 mil atendimentos</span> em residências, comércios e indústrias de Belo Horizonte e Região Metropolitana.
              Quando a Nuclear chega, o problema vai embora — com nota fiscal, garantia e o respeito que você merece.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { n: "+15", l: "Anos de estrada" },
                { n: "+10k", l: "Clientes atendidos" },
                { n: "98%", l: "Voltariam a chamar" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-hazard pl-2 sm:pl-3">
                  <div className="font-display font-black text-2xl sm:text-3xl text-hazard">{s.n}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-hazard" style={{ boxShadow: "var(--shadow-brutal)" }}>
              <img src={aboutImg} alt="Equipe técnica da Desentupidora Nuclear em ação com hidrojato" loading="lazy" decoding="async" width={1000} height={1000}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display font-black uppercase text-5xl sm:text-7xl text-hazard leading-none">24H</div>
                <div className="font-display font-bold uppercase text-lg sm:text-2xl text-foreground mt-1">A Nuclear nunca dorme</div>
                <a href={WHATS} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 font-display font-bold uppercase tracking-wider text-sm hover:opacity-90 transition">
                  <WhatsAppIcon className="w-4 h-4" /> Atendimento agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Realizados */}
      <Section id="realizados" eyebrow="Para qualquer obra ou imóvel" title="Sua estrutura," accent="nossa especialidade."
        kicker="Mesmo time, mesma garantia, mesmo nível técnico — seja para destravar a pia da sua casa ou liberar a rede principal de uma fábrica.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Vantagens reais</div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-6xl leading-none">
              6 motivos para parar de adiar e <span className="text-hazard">chamar agora</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { icon: Award, t: "+15 anos sem improviso", d: "Já desentupimos mais de 10 mil casos. O seu, com certeza, a gente já viu antes." },
              { icon: Users, t: "Equipe que você reconhece", d: "Técnicos uniformizados, identificados e treinados para entrar na sua casa com respeito." },
              { icon: Timer, t: "Chega em até 60 minutos", d: "Frota distribuída pela Grande BH. Quando você liga, alguém já está saindo." },
              { icon: ShieldCheck, t: "Garantia escrita de 90 dias", d: "Voltou a entupir no mesmo ponto? A gente volta sem custo nenhum." },
              { icon: Sparkles, t: "Local mais limpo do que estava", d: "Nada de sujeira espalhada. Saímos só depois de higienizar tudo." },
              { icon: ThumbsUp, t: "Preço fechado antes", d: "Orçamento na hora, por escrito. Sem 'apareceu um extra' no fim." },
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
      <Section id="depoimentos" eyebrow="Quem chamou, indica" title="Resolveu o problema." accent="Conquistou o cliente."
        kicker="Mais de 10 mil atendimentos e nota 4,9 nas avaliações. Veja o que dizem quem já passou pelo aperto que você está agora.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { n: "Marina S.", c: "Savassi, BH", t: "Atenderam às 2h da manhã, em pleno feriado. Em 40 minutos a equipe estava aqui e resolveu. Salvaram minha cozinha." },
            { n: "Carlos R.", c: "Contagem", t: "Chamei três desentupidoras antes. Só a Nuclear chegou no horário, fechou o preço antes e resolveu na primeira visita." },
            { n: "Juliana A.", c: "Nova Lima", t: "Equipe educada, uniformizada e com equipamento sério. Deixaram tudo limpo. Recomendo de olhos fechados." },
          ].map((d) => (
            <figure key={d.n} className="bg-card border border-border p-7 relative">
              <div className="flex gap-1 mb-4" aria-label="Avaliação 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-hazard text-hazard" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">"{d.t}"</blockquote>
              <figcaption className="border-t border-border pt-4">
                <div className="font-display font-bold uppercase tracking-wide">{d.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12">
          <div>
            <div className="text-hazard font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Antes de chamar</div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl leading-none">
              Tira a dúvida e <span className="text-hazard">chama</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">Não achou aqui? Mande no WhatsApp — respondemos em minutos, sem compromisso.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="bg-background border border-border">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
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
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-hazard text-hazard-foreground p-8 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent 0 30px, oklch(0.08 0 0) 30px 32px)"
            }} />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 inline-flex items-center gap-2"><Zap className="w-4 h-4" /> Atenção: cada hora conta</div>
                <h2 className="font-display font-black uppercase text-3xl sm:text-4xl md:text-6xl leading-none">
                  Hoje é mais barato que amanhã.
                </h2>
                <p className="mt-4 text-base md:text-lg max-w-2xl opacity-90">
                  Entupimento ignorado vira esgoto na sala, piso estourado e conta triplicada.
                  Resolva agora — equipe disponível em BH e Região Metropolitana neste exato momento.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <a href={WHATS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-4 font-display font-black uppercase tracking-wider text-base sm:text-lg hover:scale-105 transition" style={{ boxShadow: "var(--shadow-brutal)" }}>
                  <WhatsAppIcon className="w-5 h-5" /> Atendimento agora
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-3 border-2 border-hazard-foreground px-6 sm:px-8 py-4 font-display font-black uppercase tracking-wider text-base sm:text-lg hover:bg-hazard-foreground hover:text-hazard transition">
                  <Phone className="w-5 h-5" /> Ligar: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary">
        <div className="container mx-auto px-4 py-12 sm:py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div>
            <img src={logo} alt="Logo Desentupidora Nuclear" width={200} height={64} className="h-14 w-auto mb-4" loading="lazy" decoding="async" />
            <p className="text-sm text-muted-foreground">Desentupimento sério, com hidrojato profissional, equipe própria e garantia escrita. 24h em Belo Horizonte e Região Metropolitana.</p>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Soluções</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Desentupimento de pias</li>
              <li>Vasos sanitários</li>
              <li>Hidrojateamento</li>
              <li>Limpeza de fossa</li>
              <li>Inspeção com câmera</li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Atendemos</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Belo Horizonte</li>
              <li>Contagem · Betim</li>
              <li>Nova Lima · Sabará</li>
              <li>Santa Luzia · Ibirité</li>
              <li>Ribeirão das Neves</li>
              <li>Vespasiano · Lagoa Santa</li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-3">Contato</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href={TEL} className="flex items-center gap-2 hover:text-hazard"><Phone className="w-4 h-4 text-hazard" /> {PHONE}</a></li>
              <li><a href={WHATS} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-hazard"><WhatsAppIcon className="w-4 h-4" /> WhatsApp 24h</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-hazard" /> contato@desentupidoranuclear.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-hazard" /> Belo Horizonte — MG</li>
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
      <a href={WHATS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ boxShadow: "0 10px 30px -5px rgba(37, 211, 102, 0.6)" }}>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 relative" />
      </a>
    </div>
  );
}
