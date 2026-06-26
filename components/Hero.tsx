export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
          Pike Place Market &middot; Seattle, WA
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
          The Slap Has Landed.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal-soft sm:text-xl">
          Premium proteins, bold sauces, and fresh fixings, steamed inside a
          warm, hand-held bun. Order two, three, or four &mdash; eat your way
          down the market.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-orange px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Find Us at the Market
          </a>
          <a
            href="#"
            className="rounded-full border border-charcoal/15 px-8 py-4 text-center text-base font-semibold text-charcoal transition-colors hover:border-charcoal/30 hover:bg-cream"
          >
            See the Slaps
          </a>
        </div>
      </div>

      {/* Hero photography placeholder — swap for a vibrant, shallow-depth-of-field shot of a single Slap */}
      <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 sm:px-8">
        <div className="aspect-16/10 w-full overflow-hidden rounded-4xl bg-linear-to-br from-cream via-[#f6e3d3] to-[#f0d2b8] shadow-xl shadow-charcoal/5 sm:aspect-21/9" />
      </div>
    </section>
  );
}
