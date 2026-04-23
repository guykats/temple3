import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefix public-dir paths with basePath for GitHub Pages static export.
// next/image with unoptimized:true does not inject basePath into src automatically.
export function pub(src: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`
}
