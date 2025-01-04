import Image from 'next/image';
import reliabilityImg from '/public/reliability.jpg'
import Hero from '@/components/hero'
export default function ReliabilityPage() {
  return (
      <Hero imgData={reliabilityImg} imgAlt='reliability' title='We serve high reliability' />
  )
}
