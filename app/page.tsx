import { Hero, Carousel, OurStory, Menu, Location, Contact } from './components'

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <OurStory />
      <Menu />
      {/* <Location /> */}
      <Contact/>
    </main>
  );
}
