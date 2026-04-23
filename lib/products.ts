export interface Product {
  slug: string
  name: string
  subtitle: string
  price: string
  description: string
  image?: string
}

export const products: Product[] = [
  {
    slug: 'the-pillar',
    name: 'THE PILLAR',
    subtitle: 'Structured Overcoat',
    price: '$680',
    description:
      'The column does not apologize for its weight. A structured overcoat draped with the certainty of something load-bearing.',
    image: '/images/pillar.svg',
  },
  {
    slug: 'the-ark',
    name: 'THE ARK',
    subtitle: 'Enclosed Vessel Coat',
    price: '$920',
    description:
      'Carry only what cannot be burned. A vessel garment — considered, closed, built to contain what matters most.',
    image: '/images/ark.svg',
  },
  {
    slug: 'the-veil',
    name: 'THE VEIL',
    subtitle: 'Sheer Threshold Layer',
    price: '$480',
    description:
      'The curtain between the holy and the seen. Worn at the threshold — sheer, deliberate, enduring.',
    image: '/images/veil.svg',
  },
]
