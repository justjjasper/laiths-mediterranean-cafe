'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const NavContainer = tw.nav`
  sticky top-0 flex justify-between items-center z-10
  bg-header-black shadow-[#1C2526] shadow-md
  px-5 py-3
  xsm:px-10 sm:px-5 lg:px-16
  xsm:py-5 sm:p-7
`;

const LogoLink = tw(Link)`
  text-white
`;

const MenuItemUl = tw.ul`
  hidden
  md:flex gap-10
  text-white
`;

const MenuItemLink = tw(Link)`
  bg-cta-primary px-4 py-3
  rounded-md
  font-epilogue
`;

//! ---> DATA <---
const menuItems = [
  {
    name: 'Our Story',
    href: '#our-story',
    ariaLabel: 'Scroll to Our Story Section',
  },
  {
    name: 'Menu',
    href: '#menu',
    ariaLabel: 'Scroll to Menu Section',
  },
  {
    name: 'Contact',
    href: '#contact',
    ariaLabel: 'Scroll to Contact Section',
  },
];

//! COMPONENT
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavContainer>
      <LogoLink href='/' aria-label='Go to Home Page'>
        Laith's Mediterranean Cafe
      </LogoLink>

      <MenuItemUl>
        {menuItems.map((item, i) => (
          <li key={item.name + i}>
            <MenuItemLink href={item.href} aria-label={item.ariaLabel}>
              {item.name}
            </MenuItemLink>
          </li>
        ))}
      </MenuItemUl>

      {/* MobileMenu */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setToggleMenu(!toggleMenu)}
        aria-expanded={toggleMenu}
        aria-label={toggleMenu ? 'Close menu' : 'Open menu'}
        className='block md:hidden'
      >
        <Hamburger
          color={isHovered ? 'gray' : 'white'}
          transitionDuration={0.3}
          toggled={toggleMenu}
          toggle={setToggleMenu}
          aria-label='Mobile Menu'
        />
      </button>
    </NavContainer>
  );
}
