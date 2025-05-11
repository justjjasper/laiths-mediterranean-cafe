'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import tw from 'tailwind-styled-components';
import clsx from 'clsx';


//! Change Full screen mobileMenu, to show the header too

//! ---> STYLES <---
const NavContainer = tw.nav`
  sticky top-0 flex justify-between items-center z-10
  bg-header-green shadow-[#1C2526] shadow-md
  px-5 py-3
  xsm:px-10 sm:px-5 lg:px-16
  xsm:py-3 md:py-10
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

const MobileMenu = tw.div`
  w-full bg-main-color z-50
  md:hidden fixed inset-0
  transform transition-transform duration-500 ease-in-out
  overflow-y-auto
`;

const MobileMenuItem = tw(Link)`
  block border-b-[0.5px] border-white
  text-center text-3xl hover:text-gray-600 font-proxima
  py-4
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
      <LogoLink href="/" aria-label="Go to Home Page" className={clsx( toggleMenu ? 'z-[-2]' : '')}>
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

      {/* MobileMenu Toggle Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setToggleMenu(!toggleMenu)}
        aria-expanded={toggleMenu}
        aria-label={toggleMenu ? 'Close menu' : 'Open menu'}
        className={clsx(
          'block md:hidden',
          'p-1',
          toggleMenu ? 'bg-black rounded-lg' : 'bg-transparent'
        )}
      >
        <Hamburger
          color={isHovered ? 'gray' : 'white'}
          transitionDuration={0.3}
          toggled={toggleMenu}
          toggle={setToggleMenu}
          aria-label="Mobile Menu"
        />
      </button>

      {/* Mobile Menu Content */}
      <MobileMenu
        className={clsx(
          toggleMenu ? 'translate-x-0' : 'translate-x-full',
          'w-full h-screen z-[-1]'
        )}
      >
        <ul className="flex flex-col items-center text-black gap-8 pt-16 mt-10">
          {menuItems.map((item, i) => (
            <li key={i} className="w-full">
              <MobileMenuItem href={item.href} aria-label={item.ariaLabel} onClick={() => setToggleMenu(!toggleMenu)}>
                {item.name}
              </MobileMenuItem>
            </li>
          ))}
        </ul>
      </MobileMenu>
    </NavContainer>
  );
}