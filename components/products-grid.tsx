import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

export function ProductsGrid() {
  return (
    <section className="px-8 py-28">
      <div className="flex items-end justify-between mb-20">
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] text-foreground">
          The First
          <br />
          <em>Dwelling</em>
        </h2>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground pb-1">
          Collection I
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
