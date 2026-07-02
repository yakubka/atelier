import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import heroSilk from "@/assets/hero-silk.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
});

/* ---------------------------------- Data ---------------------------------- */

const WORKS = [
  {
    idx: "01",
    year: "2025",
    title: "Silhouette",
    kind: "Editorial · Fashion",
    image: work1,
    tag: "Scroll choreography",
  },
  {
    idx: "02",
    year: "2025",
    title: "Still Objects",
    kind: "E-commerce · Ceramics",
    image: work2,
    tag: "Product motion",
  },
  {
    idx: "03",
    year: "2024",
    title: "Folded Paper",
    kind: "Brand · Publishing",
    image: work3,
    tag: "Interaction design",
  },
];

const MARQUEE_WORDS = [
  "Layout Craft",
  "Motion Design",
  "Scroll Choreography",
  "Editorial Systems",
  "Interaction",
  "Micro-details",
];

const CAPABILITIES = [
  { k: "Layout", v: "Editorial grids, broken symmetry, responsive rhythm" },
  { k: "Motion", v: "Framer Motion, GSAP, scroll-linked choreography" },
  { k: "Interaction", v: "Cursor states, hover systems, transitions" },
  { k: "Systems", v: "Design tokens, component libraries, theming" },
];

/* --------------------------------- Helpers -------------------------------- */

/* -------------------------------- Sections -------------------------------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-2xl leading-none">
          Atelier<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs uppercase tracking-[0.2em]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available
        </a>
      </div>
    </header>
  );
}

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="flex overflow-hidden border-y border-primary/15 bg-background py-6">
      <div
        className="animate-marquee flex shrink-0 items-center gap-14 pr-14"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-14 font-display text-5xl md:text-7xl">
            {w}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function RevealLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {text}
    </motion.span>
  );
}



function Hero() {
  return (
    <section id="top" className="relative">
      {/* Sticky text layer */}
      <div className="pointer-events-none sticky top-0 z-20 flex h-screen flex-col justify-between px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-muted-foreground"
          >
            Portfolio — 2020 / 2026
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="headline text-foreground text-[14vw] leading-[0.88] md:text-[9vw] mix-blend-difference"
            style={{ color: "var(--paper)" }}
          >
            Layout as<br />craft<span className="text-muted-foreground">.</span>
          </motion.h1>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="md:col-span-5 md:col-start-8 max-w-md text-sm leading-relaxed mix-blend-difference"
              style={{ color: "var(--paper)" }}
            >
              Scroll-driven, motion-forward interfaces — editorial systems
              where every pixel, transition and easing curve is deliberate.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="-mt-[100vh]">
        <SmoothScrollHero
          scrollHeight={1600}
          desktopImage={heroSilk}
          mobileImage={heroSilk}
          initialClipPercentage={12}
          finalClipPercentage={88}
        />
      </div>
    </section>
  );
}



function Intro() {
  return (
    <section id="about" className="relative grain border-t border-primary/15 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="eyebrow text-muted-foreground">§ 01 — Manifesto</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="headline text-5xl md:text-7xl lg:text-8xl">
              <RevealLine text="I build interfaces that" />
              <RevealLine text="feel composed, not" delay={0.08} />
              <RevealLine text="assembled." delay={0.16} />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-12 max-w-2xl text-lg leading-relaxed text-foreground/70"
            >
              Every page here is hand-crafted — no templates, no shortcuts. Scroll
              choreography, kinetic typography, cursor states, layout grids that
              breathe. This portfolio itself is the demo.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  w,
  index,
}: {
  w: (typeof WORKS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const alignRight = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="border-t border-primary/15 py-16 md:py-28"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div
          className={`md:col-span-4 ${alignRight ? "md:order-2 md:col-start-9" : ""} flex flex-col justify-between`}
        >
          <div className="flex items-baseline gap-4">
            <span className="eyebrow text-muted-foreground">{w.idx}</span>
            <span className="eyebrow text-muted-foreground">{w.year}</span>
          </div>
          <div className="mt-10 md:mt-0">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="headline text-5xl md:text-6xl"
            >
              {w.title}
            </motion.h3>

            <div className="mt-4 text-sm text-muted-foreground">{w.kind}</div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.2em]">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {w.tag}
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-8 ${alignRight ? "md:order-1 md:col-start-1" : ""}`}
        >
          <div className="relative overflow-hidden bg-muted aspect-[4/5] md:aspect-[16/10]">
            <motion.img
              src={w.image}
              alt={w.title}
              width={1200}
              height={1500}
              loading="lazy"
              style={{ y, scale }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>
      </div>
    </article>
  );
}

function Works() {
  return (
    <section id="work" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="flex items-end justify-between">
          <div className="eyebrow text-muted-foreground">§ 02 — Selected Work</div>
          <div className="text-sm text-muted-foreground hidden md:block">
            003 / 003
          </div>
        </div>
      </div>
      {WORKS.map((w, i) => (
        <WorkCard key={w.idx} w={w} index={i} />
      ))}
    </section>
  );
}

function KineticType() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  return (
    <section
      ref={ref}
      className="border-y border-primary/15 bg-secondary py-40 md:py-56 overflow-hidden"
    >
      <motion.div style={{ x: x1 }} className="whitespace-nowrap">
        <span className="headline text-[22vw] leading-[0.85]">Motion — Detail —</span>
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap text-right text-muted-foreground italic"
      >
        <span className="font-display text-[22vw] leading-[0.85]">Rhythm — Silence.</span>
      </motion.div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-primary/15 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="eyebrow text-muted-foreground">§ 03 — Capabilities</div>
          </div>
          <ul className="md:col-span-9 divide-y divide-primary/15 border-y border-primary/15">
            {CAPABILITIES.map((c, i) => (
              <motion.li
                key={c.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:gap-16 md:py-10"
              >
                <div className="md:w-56">
                  <span className="font-display text-3xl md:text-4xl">
                    {c.k}
                  </span>
                </div>
                <div className="flex-1 text-lg text-foreground/70">{c.v}</div>
                <div className="eyebrow text-muted-foreground">
                  0{i + 1}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative grain border-t border-primary/15 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <div className="eyebrow text-primary-foreground/60">§ 04 — Let's talk</div>
        <h2 className="headline mt-8 text-[14vw] leading-[0.9] md:text-[10vw]">
          <RevealLine text="Have a" />
          <RevealLine text="project?" delay={0.08} />
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="mailto:yokubjon_nurullaev@mail.ru"
              className="group inline-flex items-baseline gap-4 font-display text-4xl md:text-6xl"
            >
              yokubjon_nurullaev@mail.ru
              <span className="text-primary-foreground/50 transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
          <div className="md:col-span-4 md:col-start-9 space-y-4 text-sm text-primary-foreground/70">
            <div>
              <div className="eyebrow text-primary-foreground/50">Elsewhere</div>
              <ul className="mt-3 space-y-2">
                <li><a className="hover:text-primary-foreground" href="https://github.com/yakubka">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-8 text-xs text-primary-foreground/60 md:px-10">
          <span>© 2026 Yakubjon Nurullaev</span>
          <span>Handmade with care · Framer Motion · TanStack</span>
        </div>
      </footer>
    </section>
  );
}

/* ---------------------------------- Page ---------------------------------- */

function Portfolio() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Works />
      <KineticType />
      <Capabilities />
      <Marquee reverse />
      <Contact />
    </main>
  );
}
