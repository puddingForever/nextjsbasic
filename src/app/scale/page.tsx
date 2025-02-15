import Image from 'next/image';
import scaleImg from '/public/scale.jpg'
import Hero from '@/components/hero'

export const runtime = "edge";


export default function ScalePage() {
  return (
      <Hero imgData={scaleImg} imgAlt='scale' title='We serve high scale' />
  )
}
