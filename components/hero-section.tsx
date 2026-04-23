import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Typography */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-foreground text-balance font-semibold">
              THE
              <br />
              STRUCTURE
              <br />
              OF MEMORY
            </h1>

            <div className="mt-16 md:mt-24">
              <Link
                href="#collection"
                className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-foreground border-b border-foreground pb-2 hover:opacity-60 transition-opacity"
              >
                Shop
                <ArrowDown size={12} />
              </Link>
            </div>

            <p className="mt-16 text-sm text-foreground/60 max-w-xs leading-relaxed tracking-wide font-sans">
              A deliberate collection. Drawn from the architecture of something
              older. Worn by those who remember without being told.
            </p>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-[60vh] lg:h-screen order-1 lg:order-2">
          <Image
            src="/images/hero.jpg"
            alt="The threshold — architectural gateway from THE STRUCTURE OF MEMORY"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient for mobile text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 lg:hidden" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">
          Scroll
        </span>
      </div>
    </section>
  )
}
