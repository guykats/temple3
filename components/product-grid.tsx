import { ProductCard } from './product-card'

const products = [
  {
    id: 1,
    name: 'The Pillar',
    price: '$680',
    image: '/images/pillar.svg',
  },
  {
    id: 2,
    name: 'The Ark',
    price: '$920',
    image: '/images/ark.svg',
  },
  {
    id: 3,
    name: 'The Veil',
    price: '$480',
    image: '/images/veil.svg',
  },
]

export function ProductGrid() {
  return (
    <section id="collection" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-16 md:mb-24">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 block mb-3">
            Collection I
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            The First Dwelling
          </h2>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 hidden md:block">
          3 Pieces
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}
