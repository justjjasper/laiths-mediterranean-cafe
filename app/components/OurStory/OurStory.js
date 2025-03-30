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
  pb-16 md:pb-20
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
  rounded-xl
  pb-10 md:pb-0
`;

//! ---> COMPONENT <---
export default function OurStory() {
  return (
    <ContainerSection id='our-story' className='scroll-smooth relative'>
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
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="#5F3C1b"
      >
        <path d="M0,0 C720,100 720,100 1440,30 L1440,100 L0,100 Z" />
      </svg>
    </ContainerSection>
  );
}
