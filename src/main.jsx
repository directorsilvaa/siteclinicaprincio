import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  Bone,
  BrainCircuit,
  CalendarCheck,
  Clock3,
  HeartPulse,
  HandHeart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldPlus,
  Stethoscope,
  X,
} from "lucide-react";
import "./styles.css";

const whatsappNumber = "5511979610690";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const siteUrl = "https://clinicaprincipia.com.br/";

const navLinks = [
  ["Sobre", "#sobre"],
  ["Especialidades", "#especialidades"],
  ["Unidades", "#unidades"],
  ["Perguntas", "#perguntas"],
  ["Contato", "#contato"],
];

const specialties = [
  {
    title: "Neurocirurgia",
    icon: BrainCircuit,
    description:
      "Procedimentos minimamente invasivos para coluna, doenças degenerativas e condições do sistema nervoso central e periférico.",
  },
  {
    title: "Endocrinologia",
    icon: Activity,
    description:
      "Investigação e tratamento de alterações hormonais, metabolismo, crescimento e saúde metabólica com acompanhamento próximo.",
  },
  {
    title: "Ortopedia",
    icon: Bone,
    description:
      "Tratamento de lesões, artrite, artrose, hérnia de disco, fraturas e limitações musculoesqueléticas com foco em recuperação funcional.",
  },
  {
    title: "Reumatologia",
    icon: ShieldPlus,
    description:
      "Cuidado clínico para doenças articulares, musculares e autoimunes, buscando reduzir inflamação, dor e perda de mobilidade.",
  },
  {
    title: "Traumatologia",
    icon: Stethoscope,
    description:
      "Diagnóstico e condução de lesões traumáticas, esportivas ou acidentais, com protocolos para retorno seguro às atividades.",
  },
  {
    title: "Medicina da Dor",
    icon: HeartPulse,
    description:
      "Estratégias avançadas para dores persistentes, incluindo bloqueios, infiltrações e terapias intervencionistas guiadas.",
  },
  {
    title: "Ginecologia",
    subtitle: "Saúde da Mulher",
    icon: HandHeart,
    description:
      "Atenção integral à saúde feminina em diferentes fases da vida, com prevenção, tratamento e acolhimento especializado.",
  },
];

const processSteps = [
  {
    title: "Avaliação precisa",
    description:
      "Entendemos sua história, seus exames e o impacto real da dor na sua rotina.",
  },
  {
    title: "Plano integrado",
    description:
      "Especialistas combinam condutas clínicas, procedimentos e reabilitação quando necessário.",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "A evolução guia os próximos passos para recuperar movimento com segurança.",
  },
];

const units = [
  {
    city: "Butantã | SP",
    name: "Clínica Principia Butantã",
    address: ["Rua Alvarenga, 220"],
    streetAddress: "Rua Alvarenga, 220",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
    phones: ["11 2305-9638", "11 97961-0690"],
    mapQuery: "Rua Alvarenga 220 Butanta Sao Paulo SP",
  },
  {
    city: "Itaim Bibi | SP",
    name: "Clínica Principia Itaim Bibi",
    address: ["Rua Joaquim Floriano, 533", "Sala 1313"],
    streetAddress: "Rua Joaquim Floriano, 533 - Sala 1313",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
    phones: ["11 3079-6701", "11 97201-3639"],
    mapQuery: "Rua Joaquim Floriano 533 Sala 1313 Itaim Bibi Sao Paulo SP",
  },
  {
    city: "Brasília | DF",
    name: "Clínica Principia Brasília",
    address: [
      "OHB Centro Médico",
      "SHLS Quadra 716 - Conjunto L",
      "Bloco B - Sala 616",
      "Asa Sul - Brasília/DF",
      "CEP 70390-700",
    ],
    streetAddress: "SHLS Quadra 716 - Conjunto L, Bloco B - Sala 616, Asa Sul",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70390-700",
    addressCountry: "BR",
    phones: ["11 2305-9638", "11 97961-0690"],
    mapQuery: "OHB Centro Medico SHLS Quadra 716 Conjunto L Bloco B Sala 616 Asa Sul Brasilia DF CEP 70390-700",
  },
  {
    city: "Salvador | BA",
    name: "Clínica Principia Salvador",
    address: [
      "Centro Médico Bela Vista",
      "Shopping Bela Vista",
      "Rua Alameda Euvaldo Luz, 92 - Piso L2",
      "Pernambués - Salvador",
      "Próximo à Leroy Merlin",
    ],
    streetAddress: "Rua Alameda Euvaldo Luz, 92 - Piso L2, Shopping Bela Vista",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
    phones: ["11 2305-9638", "11 97961-0690"],
    mapQuery: "Shopping Bela Vista Alameda Euvaldo Luz 92 Pernambues Salvador BA",
  },
];

const faqs = [
  {
    question: "O que a Clínica Principia trata?",
    answer:
      "A Clínica Principia atende pessoas com dor, alterações de movimento, queixas de coluna, articulações, lesões traumáticas ou esportivas, alterações metabólicas e demandas de saúde da mulher.",
  },
  {
    question: "Quais especialidades estão disponíveis?",
    answer:
      "As áreas de atuação incluem neurocirurgia, endocrinologia, ortopedia, reumatologia, traumatologia, medicina da dor e ginecologia.",
  },
  {
    question: "Em quais cidades a Clínica Principia atende?",
    answer:
      "A Clínica Principia possui unidades em São Paulo, nos bairros Butantã e Itaim Bibi, em Brasília/DF e em Salvador/BA.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "O agendamento é feito pelo WhatsApp. Informe sua queixa, cidade de atendimento e melhor horário para que a equipe direcione você para a unidade e especialidade adequadas.",
  },
];

const getMapUrl = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

const getMapsLink = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Clínica Principia",
      url: siteUrl,
      inLanguage: "pt-BR",
      description:
        "Site oficial da Clínica Principia, com informações sobre especialidades médicas, unidades e agendamento.",
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "MedicalOrganization",
      "@id": `${siteUrl}#organization`,
      name: "Clínica Principia",
      url: siteUrl,
      logo: `${siteUrl}logo.png`,
      image: `${siteUrl}bg-hero.png`,
      telephone: "+55 11 2305-9638",
      sameAs: [],
      medicalSpecialty: specialties.map(({ title }) => title),
      areaServed: [
        { "@type": "City", name: "São Paulo" },
        { "@type": "City", name: "Brasília" },
        { "@type": "City", name: "Salvador" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55 11 97961-0690",
          contactType: "Agendamento",
          availableLanguage: ["pt-BR"],
        },
      ],
    },
    ...units.map((unit) => ({
      "@type": "MedicalClinic",
      "@id": `${siteUrl}#${unit.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")}`,
      name: unit.name,
      url: siteUrl,
      image: `${siteUrl}bg-hero.png`,
      telephone: `+55 ${unit.phones[0]}`,
      parentOrganization: { "@id": `${siteUrl}#organization` },
      medicalSpecialty: specialties.map(({ title }) => title),
      address: {
        "@type": "PostalAddress",
        streetAddress: unit.streetAddress,
        addressLocality: unit.addressLocality,
        addressRegion: unit.addressRegion,
        postalCode: unit.postalCode,
        addressCountry: unit.addressCountry,
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
    const animatedItems = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero" aria-label="Clínica Principia">
        <header className="header">
          <a className="brand" href="#" aria-label="Clínica Principia" onClick={closeMenu}>
            <img src="/logo.png" alt="Clínica Principia" />
          </a>

          <nav className={`nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Menu principal">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>

            <button
              className="menu-button"
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Clínica Principia</span>
            <h1>Cuidado avançado para dor, movimento e qualidade de vida</h1>
            <p>
              Especialistas integrados para investigar a causa da dor, tratar limitações de
              movimento e construir um plano claro para sua recuperação.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Agendar consulta
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#especialidades">
                Ver especialidades
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="about-section" id="sobre" aria-labelledby="about-title">
        <div className="section-grid">
          <div className="section-heading">
            <span className="section-kicker">Sobre a clínica</span>
            <h2 id="about-title">Medicina coordenada para quem precisa voltar a viver melhor.</h2>
          </div>

          <div className="about-copy">
            <p>
              A Clínica Principia nasceu para cuidar de pessoas com dores crônicas, lesões
              esportivas, limitações pós-cirúrgicas e condições que comprometem autonomia.
            </p>
            <p>
              O atendimento combina avaliação médica, tecnologia, procedimentos modernos e
              acompanhamento multidisciplinar. O objetivo é sair do atendimento fragmentado e
              chegar a um plano de cuidado que faça sentido para o corpo, a rotina e o momento
              de cada paciente.
            </p>
          </div>
        </div>

        <div className="about-metrics" aria-label="Diferenciais">
          <article data-animate style={{ "--delay": "0ms" }}>
            <span>01</span>
            <h3>Diagnóstico com contexto</h3>
            <p>Exames, sintomas, histórico e objetivos são avaliados em conjunto.</p>
          </article>
          <article data-animate style={{ "--delay": "90ms" }}>
            <span>02</span>
            <h3>Tratamento personalizado</h3>
            <p>Condutas clínicas e intervencionistas escolhidas para o seu caso.</p>
          </article>
          <article data-animate style={{ "--delay": "180ms" }}>
            <span>03</span>
            <h3>Recuperação acompanhada</h3>
            <p>Monitoramento da evolução para ajustar o plano com responsabilidade.</p>
          </article>
        </div>
      </section>

      <section className="process-section" id="como-funciona" aria-labelledby="process-title">
        <div className="process-inner">
          <div className="section-heading">
            <span className="section-kicker">Como funciona</span>
            <h2 id="process-title">Uma jornada de cuidado clara desde a primeira consulta.</h2>
          </div>

          <div className="process-list">
            {processSteps.map(({ title, description }, index) => (
              <article
                className="process-card"
                key={title}
                data-animate
                style={{ "--delay": `${index * 100}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialties-section" id="especialidades" aria-labelledby="specialties-title">
        <div className="section-heading specialties-heading">
          <span className="section-kicker">Áreas de atuação</span>
          <h2 id="specialties-title">Especialidades conectadas pelo mesmo plano de cuidado.</h2>
          <p>
            Atendimento para dor, mobilidade, coluna, articulações, metabolismo e saúde da
            mulher, sempre com visão integrada.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map(({ title, subtitle, description, icon: Icon }, index) => (
            <article
              className="specialty-card"
              key={title}
              data-animate
              style={{ "--delay": `${(index % 3) * 90}ms` }}
            >
              <span className="specialty-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <div>
                <h3>{title}</h3>
                {subtitle ? <p className="specialty-subtitle">{subtitle}</p> : null}
              </div>
              <p>{description}</p>
            </article>
          ))}

          <aside className="specialties-mini-banner" data-animate style={{ "--delay": "180ms" }}>
            <span>Plano de cuidado Principia</span>
            <h3>Do diagnóstico à solução!</h3>
            <p>
              Uma equipe integrada para entender a causa da queixa, definir o melhor caminho e
              acompanhar cada etapa da sua recuperação com clareza.
            </p>
            <a href="#contato">
              Agendar avaliação
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="units-section" id="unidades" aria-labelledby="units-title">
        <div className="section-heading units-heading">
          <span className="section-kicker">Onde estamos</span>
          <h2 id="units-title">Unidades Principia</h2>
          <p>Escolha a unidade mais conveniente e fale com a equipe para confirmar horários.</p>
        </div>

        <div className="units-grid">
          {units.map(({ city, address, phones, mapQuery }, index) => (
            <article
              className="unit-card"
              key={city}
              data-animate
              style={{ "--delay": `${(index % 2) * 120}ms` }}
            >
              <div className="unit-map">
                <iframe
                  title={`Mapa da unidade ${city}`}
                  src={getMapUrl(mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a className="unit-map-link" href={getMapsLink(mapQuery)} target="_blank" rel="noreferrer">
                  <MapPin size={15} strokeWidth={2.6} aria-hidden="true" />
                  Abrir mapa
                </a>
              </div>

              <div className="unit-info">
                <h3>{city}</h3>
                <address>
                  {address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <div className="unit-contacts">
                  <a href={`tel:+55${phones[0].replace(/\D/g, "")}`}>
                    <Phone size={15} strokeWidth={2.7} aria-hidden="true" />
                    {phones[0]}
                  </a>
                  <a href={`https://wa.me/55${phones[1].replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                    <MessageCircle size={15} strokeWidth={2.7} aria-hidden="true" />
                    {phones[1]}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="perguntas" aria-labelledby="faq-title">
        <div className="faq-inner">
          <div className="section-heading faq-heading">
            <span className="section-kicker">Perguntas frequentes</span>
            <h2 id="faq-title">Respostas rápidas sobre atendimento, unidades e especialidades.</h2>
            <p>
              Informações diretas para quem está procurando uma clínica integrada para dor,
              coluna, movimento, metabolismo ou saúde da mulher.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map(({ question, answer }, index) => (
              <article
                className="faq-item"
                key={question}
                data-animate
                style={{ "--delay": `${index * 70}ms` }}
              >
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div>
            <span className="section-kicker">Agendamento</span>
            <h2 id="contact-title">Pronto para dar o próximo passo?</h2>
            <p>
              Fale pelo WhatsApp e informe sua queixa, cidade de atendimento e melhor horário.
              Nossa equipe direciona você para a unidade e especialidade mais adequadas.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
              <MessageCircle size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <div className="contact-note">
              <CalendarCheck size={18} strokeWidth={2.5} aria-hidden="true" />
              <span>Atendimento com horário agendado</span>
            </div>
            <div className="contact-note">
              <Clock3 size={18} strokeWidth={2.5} aria-hidden="true" />
              <span>Confirmação pela equipe Principia</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="footer-logo" href="#" aria-label="Clínica Principia">
              <img src="/logo.png" alt="Clínica Principia" />
            </a>
            <p>
              Cuidado médico integrado para dor, movimento, coluna, articulações,
              metabolismo e saúde da mulher.
            </p>
            <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} strokeWidth={2.6} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>

          <nav className="footer-column" aria-label="Links do rodapé">
            <h2>Navegação</h2>
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <a href="#como-funciona">Como funciona</a>
          </nav>

          <div className="footer-column">
            <h2>Unidades</h2>
            {units.map(({ city, mapQuery }) => (
              <a key={city} href={getMapsLink(mapQuery)} target="_blank" rel="noreferrer">
                <MapPin size={14} strokeWidth={2.6} aria-hidden="true" />
                {city}
              </a>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h2>Contato</h2>
            <a href="tel:+551123059638">
              <Phone size={14} strokeWidth={2.6} aria-hidden="true" />
              11 2305-9638
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={14} strokeWidth={2.6} aria-hidden="true" />
              11 97961-0690
            </a>
            <span>Atendimento com horário agendado</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clínica Principia. Todos os direitos reservados.</span>
          <a className="developer-credit" href="https://corpad.com.br" target="_blank" rel="noreferrer">
            <span>Desenvolvido por</span>
            <img src="/copard.png" alt="CORPAD" />
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
