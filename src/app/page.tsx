'use client';
import Image from 'next/image';
import homeImg from '/public/home.jpg'
import Hero from '@/components/hero'
import Test from '@/components/test';
import { useEffect, useState } from 'react';


export const runtime = "edge";

export default function Home() {

  const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/test') // 방금 만든 API 호출
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    setError(result.error);
                } else {
                    setData(result.users);
                }
            })
            .catch((err) => setError(err.message));
    }, []);


  return (
    <>
      <Hero imgData={homeImg} imgAlt='car factory' title='Professional Cloud Hosting' />
      </>
  )
}
