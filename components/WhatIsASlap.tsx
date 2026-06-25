import Image from "next/image";
import FadeIn from "./FadeIn";

function ChooseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <path d="M8.5 12.5l2.5 2.5 5-5.5" />
    </svg>
  );
}

function SteamIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 10c-1.2-1.4-1.2-2.8 0-4.5" />
      <path d="M12 10c-1.2-1.4-1.2-2.8 0-4.5" />
      <path d="M16 10c-1.2-1.4-1.2-2.8 0-4.5" />
      <path d="M4.5 13.5h15a1.5 1.5 0 0 1 1.5 1.5v.5a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 15.5v-.5a1.5 1.5 0 0 1 1.5-1.5z" />
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

const STEPS = [
  {
    icon: ChooseIcon,
    title: "Choose Your Slap",
    description: "Select from our signature proteins.",
  },
  {
    icon: SteamIcon,
    title: "We Slap It Fresh",
    description: "Every order is assembled fresh in our signature steamed bun.",
  },
  {
    icon: ExploreIcon,
    title: "Explore Seattle",
    description:
      "Take your Slaps and wander Pike Place Market, the waterfront or wherever the day takes you.",
  },
];

export default function WhatIsASlap() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/seattleslap01.png"
                alt="Seattle Slap clamshell bun concept illustration"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              The Sandwich, Reimagined
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              What Exactly Is a Slap?
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-charcoal-soft">
              <p>
                A Slap begins with our signature steamed bun, inspired by the
                bao but designed for life on the move.
              </p>
              <p>
                Inside goes premium protein, bold sauces and fresh
                fixin&apos;s&mdash;all prepared fresh and &ldquo;slapped&rdquo;
                together to create Seattle&apos;s newest handheld favorite.
              </p>
              <p>
                They&apos;re intentionally smaller than a traditional
                sandwich, so instead of choosing one, you can explore two,
                three or even four different flavors in a single visit.
              </p>
            </div>

            <p className="mt-7 text-2xl font-semibold tracking-tight text-charcoal">
              This isn&apos;t fast food.
              <br />
              It&apos;s Seattle street food.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="mt-24 lg:mt-28">
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {STEPS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-evergreen/10 text-evergreen sm:mx-0">
                  <Icon />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal-soft">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
