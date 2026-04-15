import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-6">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-serif text-lg tracking-[0.08em] text-foreground">
            {product.name}
          </h3>
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
            {product.subtitle}
          </p>
        </div>
        <span className="font-sans text-sm text-foreground pt-0.5">
          {product.price}
        </span>
      </div>

      <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5 max-w-[26ch]">
        {product.description}
      </p>

      <Link
        href={`/collection/${product.slug}`}
        className="font-sans text-[10px] tracking-[0.3em] uppercase border-b border-foreground pb-0.5 hover:opacity-40 transition-opacity"
      >
        Acquire
      </Link>
    </article>
  )
}
