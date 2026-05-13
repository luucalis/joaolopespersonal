// Components for João Lopes landing page
// Exported globally at bottom for cross-script access

const { useState, useEffect, useRef } = React;

/* ───────── Icons ───────── */
const IconCheck = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#cg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF6A00"/>
        <stop offset="100%" stopColor="#FFC300"/>
      </linearGradient>
    </defs>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconWhatsapp = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const IconDumbbell = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5L17.5 17.5"/>
    <path d="M21 21l-1-1"/>
    <path d="M3 3l1 1"/>
    <path d="M18 22l4-4"/>
    <path d="M2 6l4-4"/>
    <path d="M3 10l7-7"/>
    <path d="M14 21l7-7"/>
  </svg>
);

const IconLaptop = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="1"/>
    <path d="M2 20h20"/>
    <path d="M9 11l2 2 4-4"/>
  </svg>
);

const IconShield = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const IconPin = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

/* ───────── Reveal hook ───────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ───────── WhatsApp link helper ───────── */
const WA_NUMBER = "5547999999999"; // placeholder — to be updated
function waLink(msg = "Olá João! Vim pelo site e quero começar agora.") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ───────── Nav ───────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        <img src={window.__r("assets/logo.png")} alt="JP" />
        <div>
          <div className="name">João Lopes <span>/ Personal</span></div>
        </div>
      </a>
      <div className="nav-links">
        <a href="#metodo">Método</a>
        <a href="#resultados">Resultados</a>
        <a href="#defesa">Defesa</a>
        <a href="#sobre">Sobre</a>
        <a href="#depoimentos">Depoimentos</a>
      </div>
      <a href={waLink()} target="_blank" rel="noopener" className="nav-cta">
        <IconWhatsapp size={14} /> WhatsApp
      </a>
    </nav>
  );
}

/* ───────── Hero ───────── */
function Hero({ headlineVariant = "default", heroImage = window.__r("assets/hero.png") }) {
  const headlines = {
    default: (
      <>TRANSFORME<br/>SEU CORPO COM<br/><span className="accent">DISCIPLINA</span> E MÉTODO</>
    ),
    short: (
      <>FORÇA.<br/>FOCO.<br/><span className="accent">RESULTADO.</span></>
    ),
    challenge: (
      <>DEIXE DE SER<br/>QUEM TE LIMITA.<br/><span className="accent">COMECE HOJE.</span></>
    ),
  };
  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{backgroundImage: `url(${window.__r(heroImage)})`}}></div>
      <div className="hero-bg" style={{position: "absolute", inset: 0}}>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-text-shield"></div>
      <div className="hero-content">
        <div className="reveal in">
          <span className="hero-eyebrow eyebrow">Personal Trainer · Blumenau</span>
        </div>
        <h1 className="display reveal in delay-1">{headlines[headlineVariant] || headlines.default}</h1>
        <p className="hero-sub reveal in delay-2">
          Treinamento personalizado, consultoria online e defesa pessoal com Jiu-Jitsu em Blumenau. Método direto, sem atalhos, com acompanhamento próximo.
        </p>
        <ul className="hero-bullets reveal in delay-3">
          <li><IconCheck/> Treino presencial na Panobianco</li>
          <li><IconCheck/> Acompanhamento contínuo</li>
          <li><IconCheck/> Defesa pessoal na sua casa</li>
        </ul>
        <div className="hero-cta-row reveal in delay-4">
          <a className="btn-whatsapp" href={waLink("Olá João! Quero começar agora — me chamou pelo site.")} target="_blank" rel="noopener">
            <IconWhatsapp/> Quero começar agora
          </a>
          <a className="btn-ghost" href="#metodo">Ver método <IconArrow/></a>
        </div>
        <div className="microcopy reveal in delay-4">
          Sem compromisso<span className="dot">•</span>Resposta rápida<span className="dot">•</span>Vagas limitadas
        </div>
      </div>
    </section>
  );
}

/* ───────── Stats strip ───────── */
function StatsStrip() {
  const stats = [
    { num: "+20", label: "Anos de Esporte" },
    { num: "+100", label: "Alunos Transformados" },
    { num: "Faixa Preta", label: "Jiu-Jitsu" },
    { num: "100%", label: "Foco em Resultado" },
  ];
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat reveal" style={{transitionDelay: `${i * 0.06}s`}} key={i}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Services ───────── */
function Services() {
  const services = [
    {
      n: "01",
      icon: <IconDumbbell/>,
      title: "Treino Presencial",
      desc: "Treino guiado, presencial, com correção em tempo real. Programação periodizada para evolução constante — força, condicionamento e estética.",
      meta: <><IconPin/> Panobianco · Blumenau</>,
    },
    {
      n: "02",
      icon: <IconLaptop/>,
      title: "Consultoria Online",
      desc: "Treino estruturado para sua rotina, com acompanhamento à distância. Ajustes semanais, suporte direto e métricas claras de progresso.",
      meta: <>Suporte remoto · acompanhamento diário</>,
    },
    {
      n: "03",
      icon: <IconShield/>,
      title: "Defesa Pessoal",
      desc: "Aulas privadas de Jiu-Jitsu na sua casa. Tatame incluso, técnicas reais para situações reais. Discrição, conforto e foco total no aluno.",
      meta: <>Aulas in-home · tatame incluído</>,
    },
  ];
  return (
    <section className="section-pad" id="metodo">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O Método</span>
          <h2 className="display">Três caminhos. Um único compromisso: <span className="text-grad">resultado.</span></h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal" style={{transitionDelay: `${i * 0.08}s`}} key={i}>
              <div className="service-num">{s.n}</div>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="meta">{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Results — Before/After slider ───────── */
function BeforeAfter({ before, after, name, desc }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const onMove = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    setPos((x / r.width) * 100);
  };

  useEffect(() => {
    const move = (e) => {
      if (!draggingRef.current) return;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      onMove(cx);
    };
    const up = () => { draggingRef.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const start = (e) => {
    draggingRef.current = true;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    onMove(cx);
  };

  return (
    <div
      className="result-card reveal"
      ref={ref}
      style={{ "--clip": `${100 - pos}%`, "--handle": `${pos}%` }}
      onMouseDown={start}
      onTouchStart={start}
    >
      <div className="ba-img ba-after" style={{backgroundImage: `url(${window.__r(after)})`}}></div>
      <div className="ba-img ba-before" style={{backgroundImage: `url(${window.__r(before)})`}}></div>
      <span className="ba-label before">Antes</span>
      <span className="ba-label after">Depois</span>
      <div className="ba-handle"></div>
      <div className="ba-foot">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
}

function Results() {
  // Placeholder before/afters — using available imagery
  const items = [
    { before: window.__r("assets/about.jpeg"), after: window.__r("assets/diferenciais.jpeg"), name: "Marcos R.", desc: "8 meses · -14kg · ganho de massa magra" },
    { before: window.__r("assets/detalhes.jpeg"), after: window.__r("assets/diferenciais.jpeg"), name: "Pedro A.", desc: "5 meses · físico atlético · força +40%" },
    { before: window.__r("assets/about.jpeg"), after: window.__r("assets/diferenciais.jpeg"), name: "Carolina S.", desc: "6 meses · definição muscular · disciplina" },
  ];
  return (
    <section className="section-pad bg-band" id="resultados">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Transformações</span>
          <h2 className="display">Resultados que <span className="text-grad">falam por si.</span></h2>
          <p style={{color: "var(--text-dim)", fontSize: "16px", marginTop: "16px", maxWidth: "52ch"}}>
            Arraste para comparar. Cada aluno tem uma história — todas começaram com a mesma decisão: parar de adiar.
          </p>
        </div>
        <div className="results-grid">
          {items.map((it, i) => (
            <BeforeAfter key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Defense ───────── */
function Defense({ defenseImage = window.__r("assets/diferenciais.jpeg") }) {
  return (
    <section className="defense" id="defesa">
      <div className="defense-bg" style={{backgroundImage: `url(${window.__r(defenseImage)})`}}></div>
      <div className="container defense-content">
        <span className="eyebrow reveal">Defesa Pessoal · Jiu-Jitsu</span>
        <h2 className="display reveal" style={{marginTop: "18px"}}>
          APRENDA A SE<br/>DEFENDER <span className="text-grad">SEM SAIR DE CASA.</span>
        </h2>
        <p className="reveal">
          Aulas privadas com tatame profissional levado até você. Técnicas reais de Jiu-Jitsu para situações reais — sem ego, sem academia cheia, foco total na sua segurança.
        </p>
        <div className="defense-features">
          <div className="defense-feature reveal">
            <div className="lbl">Local</div>
            <div className="val">Sua casa</div>
          </div>
          <div className="defense-feature reveal delay-1">
            <div className="lbl">Equipamento</div>
            <div className="val">Tatame incluso</div>
          </div>
          <div className="defense-feature reveal delay-2">
            <div className="lbl">Formato</div>
            <div className="val">Aula privada 1:1</div>
          </div>
          <div className="defense-feature reveal delay-3">
            <div className="lbl">Foco</div>
            <div className="val">Aplicação real</div>
          </div>
        </div>
        <a className="btn-whatsapp reveal" href={waLink("Olá João! Quero saber sobre as aulas de defesa pessoal em casa.")} target="_blank" rel="noopener">
          <IconWhatsapp/> Quero defesa pessoal
        </a>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
function About() {
  return (
    <section className="section-pad" id="sobre">
      <div className="container">
        <div className="section-head reveal" style={{marginBottom: "48px"}}>
          <span className="eyebrow">Quem te acompanha</span>
          <h2 className="display">Quem vai te acompanhar nessa <span className="text-grad">transformação.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <img src={window.__r("assets/about.jpeg")} alt="João Lopes" />
            <div className="about-img-tag"><span className="accent">JP</span> · Personal Trainer · Blumenau SC</div>
          </div>
          <div className="about-text reveal delay-1">
            <div className="about-name">João Lopes</div>
            <div className="about-authority">"Faixa preta em Jiu-Jitsu e especialista em tirar pessoas do sedentarismo."</div>
            <div className="about-body">
              <p>Estou envolvido com o esporte desde os meus 6 anos de idade. Construí uma trajetória sólida no Jiu-Jitsu, conquistando títulos importantes ao longo dos anos e desenvolvendo uma mentalidade focada em disciplina, consistência e alta performance.</p>
              <p>Durante essa jornada, entendi que a preparação física é um dos pilares fundamentais para qualquer resultado — seja no esporte ou na vida. Tive a oportunidade de aprender com grandes profissionais, o que me permitiu desenvolver um método eficiente, direto e baseado em prática real.</p>
              <p>Hoje, aplico toda essa experiência para ajudar pessoas comuns a saírem do sedentarismo, evoluírem o físico e conquistarem resultados de verdade — com acompanhamento próximo, estratégia e sem atalhos.</p>
              <p>Meu compromisso é simples: entregar <span style={{color: "rgb(255, 106, 0)"}}>resultado</span> com <span style={{color: "rgb(255, 79, 7)"}}>consistência</span>.</p>
            </div>
            <div className="about-creds">
              <div className="cred accent">Faixa Preta · BJJ</div>
              <div className="cred">+20 anos no esporte</div>
              <div className="cred">+100 alunos</div>
              <div className="cred">CREF ativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const items = [
    {
      name: "Lucas M.", status: "online",
      msgs: [
        { t: "João, 6 meses depois eu não me reconheço mais cara 🔥", time: "09:42", me: false },
        { t: "Saí do sofá pro tatame. Perdi 11kg, ganhei foco no trabalho, e minha esposa não para de elogiar 😂", time: "09:42", me: false },
        { t: "Que orgulho mano. Disciplina venceu. 💪", time: "09:43", me: true },
      ],
    },
    {
      name: "Ana P.", status: "online",
      msgs: [
        { t: "Eu nunca tinha treinado na vida. Tinha medo de academia.", time: "18:12", me: false },
        { t: "Hoje treino 4x por semana, faço minhas aulas de defesa em casa e me sinto outra pessoa.", time: "18:13", me: false },
        { t: "Obrigada por nunca ter desistido de mim 🧡", time: "18:13", me: false },
      ],
    },
    {
      name: "Rafael C.", status: "online",
      msgs: [
        { t: "Coach, fiz o teste físico hoje", time: "07:21", me: false },
        { t: "Supino subiu 25kg em 4 meses. Corrida 5km saiu de 32min pra 24min.", time: "07:22", me: false },
        { t: "Sem milagre. Só método e consistência 🤝", time: "07:24", me: true },
      ],
    },
  ];
  return (
    <section className="section-pad bg-band" id="depoimentos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Depoimentos reais</span>
          <h2 className="display">A transformação <span className="text-grad">não é exceção.</span> É padrão.</h2>
        </div>
        <div className="testimonials">
          {items.map((it, i) => (
            <div className="wa-card reveal" style={{transitionDelay: `${i * 0.08}s`}} key={i}>
              <div className="wa-head">
                <div className="wa-avatar">{it.name.charAt(0)}</div>
                <div>
                  <div className="wa-name">{it.name}</div>
                  <div className="wa-status">{it.status}</div>
                </div>
              </div>
              <div className="wa-body">
                {it.msgs.map((m, j) => (
                  <div className={`wa-msg ${m.me ? "me" : ""}`} key={j}>
                    {m.t}
                    <div className="wa-time">{m.time} ✓✓</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
function Diferenciais() {
  const IconUser = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M12 11v0"/>
    </svg>
  );
  const IconChat = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/>
    </svg>
  );
  const IconBolt = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
  const IconPhone = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12" y2="18.01"/>
      <path d="M9 6h6"/>
    </svg>
  );
  const cards = [
    { n: "01", icon: <IconUser/>, title: "Treino Personalizado", body: ["Nenhum treino genérico. Cada plano é construído com base no seu corpo, objetivo e rotina — pra você ter resultado de verdade, não resultado só no papel."] },
    { n: "02", icon: <IconChat/>, title: "Acompanhamento Contínuo", body: ["Você não está sozinho. Suporte direto, ajustes semanais e acompanhamento constante para garantir evolução em cada fase do processo."] },
    { n: "03", icon: <IconBolt/>, title: "Resultados Mais Rápidos", body: ["Com método validado e estratégia definida, você encurta o caminho. Sem tentativa e erro — direto ao que realmente funciona para o seu perfil."] },
    { n: "04", icon: <IconPhone/>, title: "Aplicativo Incluso", body: [
      "Acompanhe seu progresso em tempo real, sem precisar enviar planilhas ou prints.",
      "Acesse vídeos com execução correta dos exercícios, visualize sua evolução e mantenha consistência com muito mais clareza e organização."
    ]},
  ];
  return (
    <section className="diff" id="diferenciais">
      <div className="diff-bg" style={{backgroundImage: `url(assets/diferenciais.jpeg)`}}></div>
      <div className="container diff-inner">
        <div className="section-head reveal">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="display">Por que treinar <span className="text-grad">comigo?</span></h2>
        </div>
        <div className="diff-grid">
          {cards.map((c, i) => (
            <div className="diff-card reveal" data-num={c.n} style={{transitionDelay: `${i * 0.06}s`}} key={i}>
              <div className="diff-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              {c.body.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-content">
        <span className="eyebrow reveal">Última chamada</span>
        <h2 className="display reveal" style={{marginTop: "18px"}}>
          AGORA É SUA<br/>VEZ DE <span className="text-grad">MUDAR.</span>
        </h2>
        <p className="final-cta-sub reveal delay-1">Pare de adiar. Comece hoje.</p>
        <div className="reveal delay-2">
          <a className="btn-whatsapp" href={waLink("Olá João! Decidi começar. Como funciona?")} target="_blank" rel="noopener" style={{fontSize: "18px", padding: "22px 36px"}}>
            <IconWhatsapp size={24}/> Falar com o Personal no WhatsApp
          </a>
        </div>
        <div className="reveal delay-3">
          <div className="urgency"><span className="pulse"></span> Vagas limitadas para o mês</div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={window.__r("assets/logo.png")} alt="JP" />
          <div>
            <div className="name">João Lopes</div>
            <div className="sub">Personal Trainer</div>
          </div>
        </div>
        <div className="footer-loc"><IconPin/> Panobianco · Blumenau SC</div>
        <div className="footer-meta">© 2026 João Lopes · Todos os direitos reservados</div>
      </div>
    </footer>
  );
}

/* ───────── Sticky WhatsApp ───────── */
function StickyWA() {
  return (
    <a className="sticky-wa" href={waLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <IconWhatsapp size={28} color="#0A0A0A"/>
      <span className="sticky-wa-tip">Fale agora</span>
    </a>
  );
}

Object.assign(window, {
  Nav, Hero, StatsStrip, Services, Results, Defense, About, Testimonials, Diferenciais, FinalCTA, Footer, StickyWA,
  useReveal, waLink, IconWhatsapp, IconCheck, IconArrow,
});
