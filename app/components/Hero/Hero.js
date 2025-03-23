'use client';

import { useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const ContainerSection = tw.section`
  flex flex-col items-center justify-center
  bg-main-color gap-5
  py-20
`;

const H1 = tw.h1`
  font-inknut text-4xl w-[20ch] leading-relaxed text-center
`;

const H3 = tw.h3`
  font-epilogue font-thin text-xl w-[50%] text-center
`;

const CTAContainer = tw.div`
  flex gap-5
`;

const CTAExternalLink = tw(Link)`
  bg-cta-primary px-4 py-3
  rounded-md text-white
  font-epilogue
`;

const CTALink = tw.a`
  bg-cta-primary px-4 py-3
  rounded-md text-white
  font-epilogue
`;

//! ---> COMPONENT <---
export default function Hero() {
  return (
    <ContainerSection>
      <H1>Elevate Your Meals with Mediterranean Delights</H1>
      <H3>
        Indulge in an authentic Mediterranean dining experience that tantalizes
        your taste buds and elevates your dining expectations.
      </H3>
      <CTAContainer>
        <CTAExternalLink
          href='https://www.grubhub.com/restaurant/laiths-mediterranean-cafe-860-e-carson-st-carson/7583424'
          target='_blank'
          aria-label='Link to Laith`s Mediterranean Cafe Grubhub'
        >
          Order Now
        </CTAExternalLink>
        <CTALink href='#menu'>View Menu</CTALink>
      </CTAContainer>
    </ContainerSection>
  );
}
