import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-8 overflow-hidden bg-background">
      {/* Placeholder for editorial image — replace src with actual asset */}
      <div className="absolute inset-0 bg-secondary opacity-40" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Collection I — The First Dwelling
        </p>

        <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[-0.02em] text-foreground mb-10">
          What Was Built
          <br />
          <em>To Last,</em>
          <br />
          Lasts.
        </h1>

        <p className="font-sans text-sm tracking-[0.05em] text-muted-foreground max-w-xs mb-14 leading-loose">
          A deliberate collection. Worn by those who remember without being
          told. Drawn from the architecture of something older.
        </p>

        <Link
          href="/collection"
          className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-colors duration-300"
        >
          Enter the Collection
        </Link>
      </div>
    </section>
  )
}
