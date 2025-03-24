import Image from "next/image";

import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
    </main>
  );
}
