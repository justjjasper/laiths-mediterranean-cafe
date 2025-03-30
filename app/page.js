import Image from "next/image";

import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import OurStory from './components/OurStory/OurStory';

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <OurStory />
    </main>
  );
}
