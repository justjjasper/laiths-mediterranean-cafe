'use client';

import Image from 'next/image'
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const ContainerSection = tw.section`
  flex items-center justify-between
  flex-col md:flex-row
  bg-main-color
  px-5 xsm:px-10 sm:px-5 lg:px-16
  pb-10 md:pb-20
`;

const Content = tw(motion.div)`
  pb-10 md:pb-0
`;

const H2 = tw.h2`
  text-2xl text-[#DB531F]
  mb-4
`

const P = tw.p`
  text-lg font-epilogue
   md:w-[65%]
`

const MotionImage = tw(Image)`
  h-[25rem] w-[25rem]
  lg:h-[30rem] lg:w-[30rem]
  rounded-lg
`;

//! ---> COMPONENT <---
export default function OurStory() {
  return (
    <ContainerSection id='our-story' className='scroll-smooth'>
      <Content>
        <H2>Our Story</H2>
        <P>Experience authentic Mediterranean flavors with every bite at My Mediterranean Restaurant. Join us in Carson, CA today!</P>
      </Content>
      <MotionImage
        src='https://cdn.durable.co/getty/36IkKHbqhDRYcVVutjyUDsHrFnuG9xpdlLAxoZMsKfqIkicXB4cMMKsU8ngKyprY.jpeg'
        alt="Laith's Mediterranean Cafe Picture"
        width={200}
        height={200}
      />
    </ContainerSection>
  );
}
