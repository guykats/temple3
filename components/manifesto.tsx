import Link from 'next/link'

export function Manifesto() {
  return (
    <section className="px-8 py-36 bg-foreground text-background">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-background/50 mb-14">
          On the Nature of Form
        </p>

        <blockquote className="font-serif text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.25] tracking-[-0.01em] italic mb-14">
          "We do not design for seasons.
          <br />
          We build for time."
        </blockquote>

        <div className="w-8 h-px bg-background/25 mx-auto mb-14" />

        <p className="font-sans text-xs tracking-[0.04em] text-background/60 leading-[2.2] max-w-sm mx-auto">
          What is sacred is also structural. Every seam is a decision made once
          and never reconsidered. The garment does not perform — it endures. It
          is worn by those who understand that to dress deliberately is to
          remember what was built before you arrived.
        </p>

        <Link
          href="/manifesto"
          className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase border border-background/30 px-10 py-4 mt-14 hover:bg-background hover:text-foreground transition-colors duration-300"
        >
          Read the Manifesto
        </Link>
      </div>
    </section>
  )
}
