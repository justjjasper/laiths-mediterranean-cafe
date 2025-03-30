'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const ContainerSection = tw.section`
  flex flex-col items-center justify-center
  bg-main-color gap-5
  py-20
`;

const H1 = tw(motion.h1)`
  font-inknut w-[20ch] leading-relaxed text-center
  text-3xl xsm:text-4xl
`;

const Subheader = tw(motion.p)`
  font-epilogue font-thin text-xl text-center
  w-[90%] xsm:w-[80%] md:w-[50%]
  mb-4
`;

const CTAContainer = tw(motion.div)`
  flex gap-5 font-epilogue
`;

const CTAExternalLink = tw(Link)`
  bg-cta-primary px-4 py-3
  rounded-md text-white
  font-epilogue
`;

//! ---> COMPONENT <---
export default function Hero() {
  return (
    <ContainerSection>
      <H1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Elevate Your Meals with Mediterranean Delights
      </H1>
      <Subheader
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Indulge in an authentic Mediterranean dining experience that tantalizes
        your taste buds and elevates your dining expectations.
      </Subheader>
      <CTAContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <CTAExternalLink
          href='https://www.grubhub.com/restaurant/laiths-mediterranean-cafe-860-e-carson-st-carson/7583424'
          target='_blank'
          aria-label='Link to Laith`s Mediterranean Cafe Grubhub'
        >
          Order Now
        </CTAExternalLink>
      </CTAContainer>
    </ContainerSection>
  );
}
