'use client'

import Link from 'next/link';
import Hamburger from 'hamburger-react';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const NavContainer = tw.nav`
  flex justify-between items-center
  px-16 py-7
  bg-header-black border-2
`

const LogoLink = tw(Link)`
  text-white
`

const MenuItemUl = tw.ul`
  flex gap-10
  text-white
`
const MenuItemLi = tw.li`
  bg-cta-primary px-4 py-3
  rounded-md
  font-inknut
`
//! ---> DATA <---
const menuItems = [
  {
    name: 'Our Story',
    href: '#our-story',
    ariaLabel: 'Scroll to Our Story Section'
  },
  {
    name: 'Menu',
    href: '#menu',
    ariaLabel: 'Scroll to Menu Section'
  },
  {
    name: 'Contact',
    href: '#contact',
    ariaLabel: 'Scroll to Contact Section'
  }
];

//! COMPONENT
export default function Header() {
  return (
    <NavContainer>
      <LogoLink
        href= '/'
        aria-label= 'Go to Home Page'
      >
        Laith's Mediterranean Cafe
      </LogoLink>

      <MenuItemUl>
        { menuItems.map((item, i) => (
          <MenuItemLi key={item.name+i}>
            <Link
              href={item.href}
              aria-label={item.ariaLabel}
            >
              {item.name}
            </Link>
          </MenuItemLi>
        ))}
      </MenuItemUl>
    </NavContainer>
  )
}