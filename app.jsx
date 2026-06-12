const { useState, useEffect, useRef, useMemo } = React;
const D = window.PORTFOLIO_DATA;

// ============ Icons ============
function IconMail({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5l8.5 7 8.5-7" />
    </svg>);

}
function IconLinkedIn({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z" />
    </svg>);

}
function IconGitHub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>);

}
function IconSun({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>);

}
function IconMoon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>);

}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "ink";
  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "cream" : "ink")}>
      
      <span className="theme-toggle__track">
        <span className="theme-toggle__icon theme-toggle__icon--sun"><IconSun /></span>
        <span className="theme-toggle__icon theme-toggle__icon--moon"><IconMoon /></span>
        <span className="theme-toggle__thumb" />
      </span>
    </button>);

}

// ============ Small primitives ============
function Mono({ children, dim, className = "" }) {
  return <span className={`mono ${dim ? "mono--dim" : ""} ${className}`}>{children}</span>;
}

function SectionHeader({ index, kicker, title, lead }) {
  return (
    <header className="section__header">
      <div className="section__index"><Mono>{index}</Mono><span className="section__rule" /></div>
      <div>
        <Mono dim className="section__kicker">{kicker}</Mono>
        <h2 className="section__title">{title}</h2>
        {lead && <p className="section__lead">{lead}</p>}
      </div>
    </header>);

}

// ============ Hero ============
function Waveform() {
  // Subtle two-tone signal trace — drawn deliberately, not slop
  const pts = useMemo(() => {
    const n = 220;
    const arr = [];
    for (let i = 0; i < n; i++) {
      const x = i / (n - 1) * 1200;
      const y =
      90 +
      Math.sin(i * 0.08) * 22 +
      Math.sin(i * 0.21 + 1.3) * 10 +
      Math.sin(i * 0.55 + 2.7) * 4;
      arr.push([x, y]);
    }
    return arr.map((p) => p.join(",")).join(" ");
  }, []);
  const carrier = useMemo(() => {
    const n = 220;
    const arr = [];
    for (let i = 0; i < n; i++) {
      const x = i / (n - 1) * 1200;
      const y = 90 + Math.sin(i * 0.42) * 4;
      arr.push([x, y]);
    }
    return arr.map((p) => p.join(",")).join(" ");
  }, []);
  return (
    <svg className="hero__wave" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true">
      <polyline points={carrier} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="1.4" />
    </svg>);

}

function Constellation() {
  // QPSK constellation — references his NOMA-QPSK work
  const pts = [
  [1, 1], [-1, 1], [-1, -1], [1, -1]];

  return (
    <svg className="constellation" viewBox="-3 -3 6 6" aria-hidden="true">
      <line x1="-3" y1="0" x2="3" y2="0" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.015" />
      <line x1="0" y1="-3" x2="0" y2="3" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.015" />
      {[1, 2].map((r) =>
      <circle key={r} cx="0" cy="0" r={r * 1.414} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.012" strokeDasharray="0.08 0.08" />
      )}
      {pts.map(([x, y], i) =>
      <g key={i}>
          {/* received scatter cloud */}
          {Array.from({ length: 14 }).map((_, j) => {
          const dx = Math.sin(i * 7 + j * 3.1) * 0.18;
          const dy = Math.cos(i * 5 + j * 2.3) * 0.18;
          return <circle key={j} cx={x + dx} cy={y + dy} r="0.04" fill="var(--accent)" opacity="0.35" />;
        })}
          <circle cx={x} cy={y} r="0.11" fill="var(--accent)" />
          <circle cx={x} cy={y} r="0.22" fill="none" stroke="var(--accent)" strokeWidth="0.02" />
        </g>
      )}
    </svg>);

}

function Hero() {
  return (
    <section className="hero" id="top">
      <Waveform />
      <div className="hero__inner">
        <div className="hero__meta">
          <Mono dim>PHD · ECEE · PROTON LAB</Mono>
          <Mono dim>PHX · AZ</Mono>
          <Mono dim>EXP. GRAD · Dec 2026</Mono>
        </div>

        <div className="hero__head">
          <img
            className="hero__photo"
            src={D.profilePhoto}
            alt={D.name}
            width="128"
            height="128"
            loading="eager" />
          <h1 className="hero__name">
            <span>Dipanjan</span>
            <span className="hero__name-row">
              Adhikary <span className="hero__caret" aria-hidden="true" />
            </span>
          </h1>
        </div>

        <p className="hero__lede">
          Ph.D. researcher in Electrical and Computer Engineering at Arizona State University, specializing in wireless
          PHY layer, Digital Signal Processing, and Software-Defined Radio systems. Combines strong theoretical
          foundations with hands-on SDR hardware experience (ADALM-Pluto, USRP B210) and published works in
          IEEE IoT Journal, ICC, and Globecom. Industry experience from embedded wireless roles in Norway (Nordic
          Semiconductor). Expected graduation in December 2026.
        </p>

        <div className="hero__rail">
          <div className="hero__rail-left">
            <a className="btn btn--primary" href="#publications">
              <span>Selected work</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a className="btn btn--ghost" href={`mailto:${D.email}`} aria-label="Email" title="Email">
              <IconMail />
            </a>
            <a className="btn btn--ghost" href={`https://linkedin.com/in/${D.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <IconLinkedIn />
            </a>
            <a className="btn btn--ghost" href={`https://github.com/${D.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <IconGitHub />
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ============ Sidebar nav ============
const SECTIONS = [
{ id: "about", label: "About" },
{ id: "research", label: "Research" },
{ id: "publications", label: "Publications" },
{ id: "experience", label: "Experience" },
{ id: "projects", label: "Projects" },
{ id: "skills", label: "Skills" },
{ id: "education", label: "Education" },
{ id: "contact", label: "Contact" }];


function SideNav({ theme, setTheme }) {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) ob.observe(el);
    });
    return () => ob.disconnect();
  }, []);

  return (
    <nav className="sidenav" aria-label="Section navigation">
      <div className="sidenav__top">
        <a href="#top" className="sidenav__brand">
          <span className="sidenav__brand-mark">DA</span>
          <span className="sidenav__brand-name">Dipanjan Adhikary</span>
        </a>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <ol className="sidenav__list">
        {SECTIONS.map((s, i) =>
        <li key={s.id} className={`sidenav__item ${active === s.id ? "is-active" : ""}`}>
            <a href={`#${s.id}`}>
              <span className="sidenav__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sidenav__lbl">{s.label}</span>
              <span className="sidenav__bar" />
            </a>
          </li>
        )}
      </ol>
      <div className="sidenav__foot">
        <Mono dim>{D.affiliation}</Mono>
      </div>
    </nav>);

}

// ============ About ============
function About() {
  return (
    <section id="about" className="section section--about" data-screen-label="About">
      <SectionHeader index="01" kicker="About" title="Specializing in wireless physical-layer systems." />
      <div className="about__grid">
        <div className="about__body">
          {D.about.map((p, i) => <p key={i} className="prose" dangerouslySetInnerHTML={{ __html: p }} />)}
        </div>
        <aside className="about__facts">
          <div className="fact">
            <Mono dim>Now</Mono>
            <p>PhD candidate, ASU<br /><span className="muted">PROTON Lab · ECEE</span></p>
          </div>
          <div className="fact">
            <Mono dim>Focus</Mono>
            <p>Wireless PHY · AirComp · SDR</p>
          </div>
        </aside>
      </div>
    </section>);

}

// ============ Research focus ============
function Research() {
  return (
    <section id="research" className="section" data-screen-label="Research">
      <SectionHeader
        index="02"
        kicker="Research areas"
        title="Current research interests."
        lead="Work spans theoretical analysis, simulation, and hardware implementation on Software-Defined Radio." />
      
      <div className="research__grid">
        {D.researchFocus.map((r) =>
        <article key={r.tag} className="research-card">
            <Mono dim className="research-card__tag">{r.tag} / 03</Mono>
            <h3 className="research-card__title">{r.title}</h3>
            <p className="research-card__body">{r.body}</p>
          </article>
        )}
      </div>
    </section>);

}

// ============ Publications ============
const PUB_TYPES = ["All", "Patent", "Journal", "Conference"];
function Publications() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () =>
    D.publications.filter((p) => filter === "All" || p.type === filter).
    sort((a, b) => Number(b.year) - Number(a.year)),
    [filter]
  );
  const counts = useMemo(() => {
    const c = { All: D.publications.length };
    D.publications.forEach((p) => c[p.type] = (c[p.type] || 0) + 1);
    return c;
  }, []);

  return (
    <section id="publications" className="section section--pubs" data-screen-label="Publications">
      <SectionHeader
        index="03"
        kicker="Selected publications"
        title="Publications and patents."
        lead="Authored or co-authored work in IEEE journals, conferences, and a provisional patent." />
      

      <div className="pubs__filters" role="tablist">
        {PUB_TYPES.map((t) =>
        <button
          key={t}
          role="tab"
          aria-selected={filter === t}
          className={`chip ${filter === t ? "is-active" : ""}`}
          onClick={() => setFilter(t)}>
          
            <span>{t}</span>
            <Mono dim>{counts[t] || 0}</Mono>
          </button>
        )}
      </div>

      <ol className="pubs__list">
        {list.map((p, i) => {
          const isLive = p.url && p.url !== "#";
          const Tag = isLive ? "a" : "div";
          const linkProps = isLive ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};
          return (
            <li key={i} className={`pub ${isLive ? "pub--linked" : ""}`}>
              <Tag {...linkProps} className="pub__inner">
                <div className="pub__rail">
                  <Mono className="pub__year">{p.year}</Mono>
                  <span className={`pub__type pub__type--${p.type.toLowerCase()}`}>{p.type}</span>
                </div>
                <div className="pub__body">
                  <h3 className="pub__title">{p.title}</h3>
                  <p className="pub__authors">{p.authors}</p>
                  <p className="pub__venue">
                    <Mono dim>{p.venue}</Mono>
                    {p.status && <span className="pub__status"> · {p.status}</span>}
                  </p>
                </div>
                <div className="pub__action" aria-hidden="true">
                  {isLive
                    ? <span className="pub__arrow">↗</span>
                    : <Mono dim>[{String(i + 1).padStart(2, "0")}]</Mono>}
                </div>
              </Tag>
            </li>
          );
        })}
      </ol>
    </section>);

}

// ============ Experience timeline ============
function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="Experience">
      <SectionHeader index="04" kicker="Experience" title="Professional experience." />
      <ol className="timeline">
        {D.experience.map((e, i) =>
        <li key={i} className="timeline__item">
            <div className="timeline__dot" aria-hidden="true">
              <span /><span />
            </div>
            <div className="timeline__row">
              <Mono dim className="timeline__period">{e.period}</Mono>
              <div className="timeline__head">
                <h3 className="timeline__role">{e.role}</h3>
                <p className="timeline__org">{e.org}</p>
              </div>
              <ul className="timeline__bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="timeline__stack">
                {e.stack.map((s) => <Mono key={s} className="tag">{s}</Mono>)}
              </div>
            </div>
          </li>
        )}
      </ol>
    </section>);

}

// ============ Projects ============
function Projects() {
  return (
    <section id="projects" className="section section--projects" data-screen-label="Projects">
      <SectionHeader
        index="05"
        kicker="Projects"
        title="Selected research projects."
        lead="Implemented end-to-end on Software-Defined Radio hardware with measured performance." />
      
      <div className="projects__grid">
        {D.projects.map((p, i) =>
        <article key={i} className="project">
            <header className="project__head">
              <Mono dim>P/{String(i + 1).padStart(2, "0")} · {p.tag}</Mono>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__summary">{p.summary}</p>
            </header>
            <ul className="project__details">
              {p.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
            {p.metrics.length > 0 &&
          <dl className="project__metrics">
                {p.metrics.map((m, j) =>
            <div key={j} className="metric">
                    <dt><Mono dim>{m.k}</Mono></dt>
                    <dd>{m.v}</dd>
                  </div>
            )}
              </dl>
          }
          </article>
        )}
      </div>
    </section>);

}

// ============ Skills ============
function Skills() {
  return (
    <section id="skills" className="section" data-screen-label="Skills">
      <SectionHeader index="06" kicker="Skills" title="Technical skills." />
      <div className="skills__grid">
        {Object.entries(D.skills).map(([cat, items]) =>
        <div key={cat} className="skills__group">
            <Mono dim className="skills__cat">{cat}</Mono>
            <ul className="skills__items">
              {items.map((s) => <li key={s}><Mono>{s}</Mono></li>)}
            </ul>
          </div>
        )}
      </div>
    </section>);

}

// ============ Education ============
function Education() {
  return (
    <section id="education" className="section" data-screen-label="Education">
      <SectionHeader index="07" kicker="Education" title="Academic background." />
      <ol className="edu">
        {D.education.map((e, i) =>
        <li key={i} className="edu__item">
            <Mono dim className="edu__period">{e.period}</Mono>
            <div className="edu__body">
              <h3 className="edu__degree">{e.degree}</h3>
              <p className="edu__school">{e.school} <span className="muted">· {e.where}</span></p>
              <p className="edu__detail">{e.detail}</p>
              {e.courses.length > 0 &&
            <div className="edu__courses">
                  {e.courses.map((c) => <Mono key={c} className="tag tag--ghost">{c}</Mono>)}
                </div>
            }
            </div>
          </li>
        )}
      </ol>
      <div className="memberships">
        <Mono dim className="memberships__label">Memberships</Mono>
        <ul>
          {D.memberships.map((m, i) =>
          <li key={i}>
              <strong>{m.name}</strong>
              <Mono dim> · {m.period} · {m.where}</Mono>
            </li>
          )}
        </ul>
      </div>
    </section>);

}

// ============ Contact ============
const SITE_SOURCE_FILES = ["app.jsx", "data.js", "styles.css", "tweaks-panel.jsx"];

function formatLastUpdated(date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function useLastUpdated() {
  const [label, setLabel] = useState(() => formatLastUpdated(new Date(document.lastModified)));

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      const dates = [new Date(document.lastModified)];
      await Promise.all(
        SITE_SOURCE_FILES.map(async (file) => {
          try {
            const res = await fetch(file, { method: "HEAD", cache: "no-store" });
            const header = res.headers.get("Last-Modified");
            if (header) dates.push(new Date(header));
          } catch {
            // Expected when opened via file:// or if HEAD is unavailable.
          }
        })
      );
      if (cancelled) return;
      const latest = dates.reduce((max, date) => date > max ? date : max);
      setLabel(formatLastUpdated(latest));
    }

    resolve();
    return () => { cancelled = true; };
  }, []);

  return label;
}

function Contact() {
  const lastUpdated = useLastUpdated();

  return (
    <section id="contact" className="section section--contact" data-screen-label="Contact">
      <SectionHeader index="08" kicker="Contact" title="Get in touch." />
      <div className="contact__grid">
        <div className="contact__lede">
          <p className="prose-lg">
            Open to research collaborations on AirComp security, SDR-based physical-layer
            prototyping, and post-graduation industry positions in wireless systems engineering.
          </p>
        </div>
        <ul className="contact__links">
          <li>
            <Mono dim>Email</Mono>
            <a href={`mailto:${D.email}`} className="contact__icon-link" aria-label={D.email} title={D.email}>
              <IconMail size={22} />
            </a>
          </li>
          <li>
            <Mono dim>LinkedIn</Mono>
            <a href={`https://linkedin.com/in/${D.linkedin}`} target="_blank" rel="noreferrer" className="contact__icon-link" aria-label="LinkedIn profile" title="LinkedIn">
              <IconLinkedIn size={22} />
            </a>
          </li>
          <li>
            <Mono dim>GitHub</Mono>
            <a href={`https://github.com/${D.github}`} target="_blank" rel="noreferrer" className="contact__icon-link" aria-label="GitHub profile" title="GitHub">
              <IconGitHub size={22} />
            </a>
          </li>
          <li>
            <Mono dim>Lab</Mono>
            <a
              href="https://sites.google.com/view/eirini-eleni-tsiropoulou/proton-lab"
              target="_blank"
              rel="noreferrer"
              className="contact__link-with-icon"
            >
              <span>PROTON Lab · ASU</span>
              <span className="contact__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <Mono dim>© {new Date().getFullYear()} Dipanjan Adhikary</Mono>
        <Mono dim>Last updated · {lastUpdated}</Mono>
      </footer>
    </section>);

}

// ============ Tweaks ============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "amber",
  "theme": "cream",
  "showWaveform": true,
  "density": "comfortable"
} /*EDITMODE-END*/;

const ACCENT_MAP = {
  amber: "oklch(0.62 0.14 50)",
  signal: "oklch(0.66 0.16 25)",
  lab: "oklch(0.55 0.13 240)",
  forest: "oklch(0.50 0.11 150)",
  ink: "oklch(0.28 0.02 80)"
};

const THEME_MAP = {
  cream: { bg: "oklch(0.97 0.006 80)", surface: "oklch(0.94 0.008 80)", ink: "oklch(0.18 0.01 80)", muted: "oklch(0.50 0.01 80)", line: "oklch(0.85 0.008 80)" },
  paper: { bg: "oklch(0.985 0.002 250)", surface: "oklch(0.96 0.003 250)", ink: "oklch(0.17 0.012 250)", muted: "oklch(0.48 0.012 250)", line: "oklch(0.87 0.005 250)" },
  ink: { bg: "oklch(0.14 0.01 80)", surface: "oklch(0.18 0.012 80)", ink: "oklch(0.94 0.008 80)", muted: "oklch(0.65 0.012 80)", line: "oklch(0.28 0.012 80)" }
};

function Tweaks({ t, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Theme">
        <TweakRadio label="Mode" value={t.theme} options={[
        { value: "cream", label: "Cream" },
        { value: "paper", label: "Paper" },
        { value: "ink", label: "Ink" }]
        } onChange={(v) => setTweak("theme", v)} />
        <TweakSelect label="Accent" value={t.accent} options={[
        { value: "amber", label: "Amber (default)" },
        { value: "signal", label: "Signal" },
        { value: "lab", label: "Lab blue" },
        { value: "forest", label: "Forest" },
        { value: "ink", label: "Monochrome" }]
        } onChange={(v) => setTweak("accent", v)} />
      </TweakSection>
      <TweakSection label="Layout">
        <TweakRadio label="Density" value={t.density} options={[
        { value: "comfortable", label: "Comfortable" },
        { value: "compact", label: "Compact" }]
        } onChange={(v) => setTweak("density", v)} />
        <TweakToggle label="Hero waveform" value={t.showWaveform} onChange={(v) => setTweak("showWaveform", v)} />
      </TweakSection>
    </TweaksPanel>);

}

// ============ App shell ============
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    const theme = THEME_MAP[t.theme] || THEME_MAP.cream;
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(`--${k}`, v));
    root.style.setProperty("--accent", ACCENT_MAP[t.accent] || ACCENT_MAP.amber);
    root.dataset.density = t.density;
    root.dataset.wave = t.showWaveform ? "on" : "off";
  }, [t]);

  return (
    <div className="app">
      <SideNav theme={t.theme} setTheme={(v) => setTweak("theme", v)} />
      <main className="main">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Tweaks t={t} setTweak={setTweak} />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);