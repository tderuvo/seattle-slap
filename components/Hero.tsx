export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal">
      {/* Hero image placeholder — swap for real warm-lit Slap photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3a342f_0%,_#211d1a_55%,_#13110f_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Pike Place Market &middot; Seattle, WA
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            The Slap Has Landed.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            Premium proteins, bold sauces, and fresh fixings, steamed inside a
            warm, hand-held bun. Order two, three, or four &mdash; eat your way
            down the market.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-orange px-8 py-4 text-center text-base font-semibold text-cream transition-colors hover:bg-orange-dark"
            >
              Find Us at the Market
            </a>
            <a
              href="#"
              className="rounded-full border border-cream/30 px-8 py-4 text-center text-base font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              See the Slaps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
