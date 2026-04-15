import Link from 'next/link'

const FOOTER_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Atelier', href: '/atelier' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-8 py-16 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-serif text-xs tracking-[0.3em] uppercase text-foreground mb-1">
            The Structure of Memory
          </p>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Studio — Jerusalem · Paris · New York
          </p>
        </div>

        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-sans text-[10px] tracking-[0.1em] text-muted-foreground">
          © {year} The Structure of Memory. All rights reserved.
        </p>
        <p className="font-sans text-[10px] tracking-[0.1em] text-muted-foreground">
          studio@thestructureofmemory.com
        </p>
      </div>
    </footer>
  )
}
