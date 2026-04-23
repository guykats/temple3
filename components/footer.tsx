import Link from 'next/link'
import { Instagram, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="text-xs tracking-[0.3em] uppercase text-foreground"
          >
            Structure
          </Link>
          <p className="mt-6 text-sm text-foreground/50 max-w-xs leading-relaxed tracking-wide font-sans">
            What is sacred is also structural. Every seam is a decision made
            once and never reconsidered.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 block mb-6">
            Navigate
          </span>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Collection', href: '#collection' },
              { label: 'About', href: '#about' },
              { label: 'Shipping', href: '#' },
              { label: 'Returns', href: '#' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-sans tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div id="about">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 block mb-6">
            Connect
          </span>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:studio@thestructureofmemory.com"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors font-sans tracking-wide"
            >
              studio@thestructureofmemory.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors font-sans tracking-wide"
            >
              <Instagram size={14} />
              Instagram
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 md:mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-[10px] tracking-[0.15em] text-foreground/30">
          © {new Date().getFullYear()} THE STRUCTURE OF MEMORY. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-[10px] tracking-[0.15em] text-foreground/30 hover:text-foreground/60 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-[10px] tracking-[0.15em] text-foreground/30 hover:text-foreground/60 transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
