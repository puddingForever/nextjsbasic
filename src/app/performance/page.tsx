import Image from 'next/image';
import performanceImg from '/public/performance.jpg'
import Hero from '@/components/hero'

export const runtime = "edge";

export default function PerformancePage() {
  return (
      <Hero imgData={performanceImg} imgAlt='welding' title='We serve high performance' />
  )
}
