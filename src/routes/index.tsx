import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-nuclear.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MessageCircle, Clock, ShieldCheck, Wrench, Zap, Droplets, Truck, CheckCircle2, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desentupidora Nuclear — 24h | Força e Tecnologia" },
      { name: "description", content: "Desentupidora Nuclear: atendimento 24h todos os dias. Desentupimento de pias, ralos, vasos e esgoto com força e tecnologia. Orçamento sem compromisso." },
    ],
  }),
});

const PHONE = "(11) 99999-0000";
const WHATS = "https://wa.me/5511999990000";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-hazard text-hazard-foreground text-xs sm:text-sm font-bold tracking-wider uppercase">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Atendimento 24h — Todos os dias</span>
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="Desentupidora Nuclear" className="h-12 sm:h-14 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#servicos" className="hover:text-hazard transition">Serviços</a>
            <a href="#sobre" className="hover:text-hazard transition">Sobre</a>
            <a href="#contato" className="hover:text-hazard transition">Contato</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-hazard text-hazard-foreground px-5 py-2.5 font-display font-bold uppercase tracking-wide text-sm hover:scale-105 transition-transform">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden grit-texture">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-hazard text-hazard-foreground px-3 py-1 mb-6 font-display font-bold uppercase text-xs tracking-widest">
              <Zap className="w-3.5 h-3.5" /> Emergência 24h
            </div>
            <h1 className="font-display font-black uppercase leading-[0.85] text-5xl sm:text-7xl md:text-8xl">
              <span className="block text-foreground">Força e</span>
              <span className="block text-hazard" style={{ textShadow: "0 0 40px oklch(0.85 0.18 95 / 0.3)" }}>tecnologia</span>
              <span className="block text-foreground">para resolver</span>
              <span className="block text-stroke">seu problema</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Desentupimento profissional de pias, ralos, vasos sanitários e redes de esgoto.
              Equipamento de alta pressão, equipe técnica especializada e atendimento imediato.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATS} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-hazard text-hazard-foreground px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "var(--shadow-brutal)" }}>
                <MessageCircle className="w-5 h-5" /> Chamar agora
              </a>
              <a href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-3 border-2 border-hazard text-hazard px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:bg-hazard hover:text-hazard-foreground transition">
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
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

      {/* Serviços */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">O que fazemos</div>
              <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none">
                Nossos <span className="text-hazard">serviços</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Atuamos em residências, comércios e indústrias com equipamento de ponta e equipe treinada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: "Desentupimento de pias", desc: "Cozinhas, banheiros e áreas de serviço com gordura e resíduos acumulados." },
              { icon: Wrench, title: "Vasos sanitários", desc: "Remoção de obstruções com equipamento adequado, sem quebrar pisos." },
              { icon: Zap, title: "Ralos e tubulações", desc: "Hidrojateamento de alta pressão para limpeza profunda." },
              { icon: Truck, title: "Caixa de gordura e fossa", desc: "Limpeza completa, sucção e destinação correta dos resíduos." },
              { icon: ShieldCheck, title: "Esgoto residencial", desc: "Diagnóstico com câmera e desobstrução de redes principais." },
              { icon: Clock, title: "Emergência 24h", desc: "Equipe pronta para atender a qualquer hora, todos os dias do ano." },
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
        </div>
      </section>

      {/* Diferenciais */}
      <section id="sobre" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-hazard/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-hazard font-display font-bold uppercase tracking-widest text-sm mb-2">Por que a Nuclear</div>
              <h2 className="font-display font-black uppercase text-4xl md:text-6xl leading-none mb-6">
                Potência que <span className="text-hazard">resolve</span>.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Não improvisamos. Cada serviço é executado com equipamento profissional,
                protocolos de segurança e garantia escrita. Quando você chama, a gente chega — e resolve.
              </p>
              <ul className="space-y-4">
                {[
                  "Orçamento sem compromisso e sem taxa de visita",
                  "Equipe uniformizada e identificada",
                  "Equipamento de hidrojateamento de alta pressão",
                  "Garantia de até 90 dias no serviço executado",
                  "Atendimento em toda a região metropolitana",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-hazard flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-card border-2 border-hazard p-8 flex flex-col justify-between" style={{ boxShadow: "var(--shadow-brutal)" }}>
                <div>
                  <Clock className="w-16 h-16 text-hazard mb-4" strokeWidth={1.5} />
                  <div className="font-display font-black uppercase text-7xl md:text-8xl text-hazard leading-none">24H</div>
                  <div className="font-display font-bold uppercase text-2xl text-foreground mt-2">Todos os dias</div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Domingo, feriado, madrugada. A Desentupidora Nuclear nunca para.
                  Ligue agora e tenha resposta em minutos.
                </p>
                <a href={WHATS} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-hazard text-hazard-foreground py-3 font-display font-bold uppercase tracking-wider hover:opacity-90 transition">
                  <MessageCircle className="w-4 h-4" /> Falar agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="inline-flex items-center gap-3 bg-background text-hazard px-8 py-4 font-display font-black uppercase tracking-wider text-lg hover:scale-105 transition">
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

      {/* Contato */}
      <section id="contato" className="py-20 border-t border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: "Telefone", lines: [PHONE, "Ligação 24h"] },
            { icon: MapPin, title: "Atendimento", lines: ["Região Metropolitana", "Capital e Grande São Paulo"] },
            { icon: Mail, title: "E-mail", lines: ["contato@desentupidoranuclear.com.br", "Resposta em até 1h"] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex gap-4">
              <div className="w-12 h-12 bg-hazard text-hazard-foreground flex-shrink-0 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-bold uppercase tracking-wider text-sm text-hazard mb-1">{title}</div>
                {lines.map((l) => <div key={l} className="text-foreground">{l}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-secondary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Desentupidora Nuclear" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Desentupidora Nuclear — Força e tecnologia para solucionar seu problema.
          </p>
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
