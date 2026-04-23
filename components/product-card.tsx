'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  name: string
  price: string
  image: string
  hoverImage?: string
}

export function ProductCard({ name, price, image, hoverImage }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover object-center transition-all duration-700 ease-out ${
            isHovered && hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${name} — alternate view`}
            fill
            className={`object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        )}

        {/* Quick view overlay */}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground bg-background/90 px-4 py-2">
            View
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex justify-between items-start">
        <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-sans font-medium">
          {name}
        </h3>
        <span className="text-xs text-foreground/60 font-sans tracking-wider">
          {price}
        </span>
      </div>
    </article>
  )
}
