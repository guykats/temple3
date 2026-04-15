import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Atelier', href: '/atelier' },
]

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <Link
        href="/"
        className="font-serif text-xs tracking-[0.3em] uppercase text-foreground hover:opacity-60 transition-opacity"
      >
        The Structure of Memory
      </Link>

      <nav className="flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-sans text-[10px] tracking-[0.25em] uppercase text-foreground hover:opacity-50 transition-opacity"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
