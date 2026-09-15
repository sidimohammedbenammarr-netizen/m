import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import VideoGrid from "@/components/VideoGrid";
import type { Video } from "@/lib/types";
import {
  SKILLS,
  SOFTWARE,
  PROCESS,
  QUICK_FACTS,
  QUOTE,
  CONTACT_LINKS,
} from "@/lib/content";
import {
  IconArrowUpRight,
  IconCompass,
  IconDot,
  IconGlobe,
  IconMapPin,
  IconPalette,
  IconQuote,
  IconRocket,
  IconScissors,
  IconSearch,
  IconStar,
  IconTarget,
} from "@/components/icons";

export const revalidate = 0;

const FACT_ICONS = [IconStar, IconCompass, IconRocket, IconGlobe];
const PROCESS_ICONS = [IconSearch, IconTarget, IconScissors, IconPalette, IconRocket];

export default async function HomePage() {
  const supabase = createClient();

  const { data: featuredData } = await supabase
    .from("videos")
    .select("*")
    .eq("published", true)
    .order("order", { ascending: true })
    .limit(3);

  const featured = (featuredData ?? []) as Video[];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line/60 bg-ink">
        {/* giant background wordmark */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden">
          <p className="translate-y-[-6%] whitespace-nowrap bg-gradient-to-b from-bronze/80 via-bronze/30 to-transparent bg-clip-text font-heavy text-[26vw] uppercase leading-none text-transparent">
            Editor
          </p>
        </div>

        <div className="relative mx-auto max-w-content px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
            <p>
              Creative <span className="text-bone underline decoration-bronze underline-offset-4">Portfolio</span>
            </p>
            <p className="flex items-center gap-2">
              Available for projects
              <IconDot className="h-2 w-2 text-bronze2" />
            </p>
          </div>

          <div className="relative mt-24 md:mt-32">
            <p className="font-script text-3xl text-bronze2 md:text-4xl">Hello, I&apos;m</p>
            <h1 className="mt-2 font-heavy text-4xl uppercase leading-[0.95] text-bone sm:text-5xl md:text-6xl">
              Sidi Mohammed
            </h1>
            <p className="mt-3 text-lg font-medium uppercase tracking-wide text-bronze2 md:text-xl">
              Video Editor
            </p>
            <p className="mt-1 text-sm uppercase tracking-wide text-muted">
              Creative Editor &amp; Post-Production Professional
            </p>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              I cut reels, ads, motion graphics and YouTube videos for brands
              and creators who need pace, clarity and a look that holds up on
              any screen — from a six-second hook to a ten-minute story.
            </p>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <IconMapPin className="h-4 w-4 text-bronze2" />
              Based in: Algeria
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-sm bg-bronze px-7 py-3.5 text-sm font-medium text-bone transition-transform hover:scale-[1.02] hover:bg-bronze2"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-line px-7 py-3.5 text-sm text-bone transition-colors hover:border-bronze/70 hover:text-bronze2"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* quick facts */}
          <div className="mt-16 grid gap-6 border-t border-line/60 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_FACTS.map((fact, i) => {
              const Icon = FACT_ICONS[i % FACT_ICONS.length];
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bronze/50 text-bronze2">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-muted">
                      {fact.label}
                    </span>
                    <span className="block text-sm text-bone">{fact.value}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-heavy text-2xl uppercase tracking-wide text-bone md:text-3xl">
              Selected Projects
            </h2>
            <Link
              href="/work"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm text-muted transition-colors hover:text-bronze2"
            >
              View all projects
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <VideoGrid videos={featured} numbered />
        </section>
      )}

      {/* SKILLS / PROCESS / QUOTE */}
      <section className="border-t border-line/60">
        <div className="mx-auto grid max-w-content gap-px overflow-hidden rounded-2xl border border-line/60 bg-line/60 md:px-0 lg:grid-cols-[1fr_1fr_0.9fr]">
          {/* skills */}
          <div className="bg-ink px-6 py-12 md:px-10">
            <h2 className="font-heavy text-xl uppercase tracking-wide text-bone">
              Skills &amp; Tools
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {[...SKILLS.map((s) => s.title), ...SOFTWARE].map((chip) => (
                <span
                  key={chip}
                  className="rounded-sm border border-line px-3 py-1.5 text-xs uppercase tracking-wide text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* process */}
          <div className="bg-ink px-6 py-12 md:px-10">
            <h2 className="font-heavy text-xl uppercase tracking-wide text-bone">
              Work Process
            </h2>
            <ol className="mt-8 space-y-7">
              {PROCESS.map((step, i) => {
                const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
                return (
                  <li key={step.step} className="flex gap-4">
                    <span className="flex flex-col items-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze text-xs text-bronze2">
                        {step.step}
                      </span>
                      {i < PROCESS.length - 1 && (
                        <span className="mt-1 h-full w-px flex-1 border-l border-dashed border-line" />
                      )}
                    </span>
                    <span>
                      <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-bronze2">
                        <Icon className="h-4 w-4" />
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {step.description}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* quote */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-bronze/25 via-panel to-ink px-6 py-12 md:px-10">
            <IconQuote className="h-8 w-8 text-bronze2" />
            <p className="mt-5 font-display text-2xl leading-snug text-bone">
              {QUOTE.text}
            </p>
            <p className="mt-6 font-script text-2xl text-bronze2">{QUOTE.author}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-heavy text-3xl uppercase text-bone md:text-4xl">
                Let&apos;s Work Together
                <IconDot className="h-2.5 w-2.5 text-bronze2" />
              </h2>
              <p className="mt-4 max-w-sm text-muted">
                I&apos;m always open to new projects and exciting
                collaborations.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-bronze px-7 py-3.5 text-sm font-medium text-bone transition-transform hover:scale-[1.02] hover:bg-bronze2"
              >
                Let&apos;s create something amazing
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-8 border-b border-line/60 pb-3 text-muted transition-colors hover:text-bronze2"
                >
                  <span className="text-xs uppercase tracking-wide">{c.label}</span>
                  <span className="text-bone/90 group-hover:text-bronze2">{c.value}</span>
                </a>
              ))}
              <p className="flex items-center gap-2 pt-1 text-muted">
                <IconMapPin className="h-4 w-4 text-bronze2" />
                Algeria
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
