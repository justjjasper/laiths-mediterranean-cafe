import Image from "next/image";

import Hero from './components/Hero/Hero';
import Carousel from './components/Carousel/Carousel';
import OurStory from './components/OurStory/OurStory';
import Menu from './components/Menu/Menu';

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <OurStory />
      <Menu />
    </main>
  );
}
