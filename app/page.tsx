import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { ProductsGrid } from '@/components/products-grid'
import { Manifesto } from '@/components/manifesto'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductsGrid />
      <Manifesto />
      <Footer />
    </main>
  )
}
