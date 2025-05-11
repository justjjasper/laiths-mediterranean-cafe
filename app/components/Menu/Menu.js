import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Image from 'next/image';

//! ---> STYLES <---
const ContainerSection = tw.section`
  flex flex-col items-center
  bg-main-color gap-5
  py-20 bg-secondary-color
  px-5 xsm:px-10 sm:px-5 lg:px-16
  pb-16 md:pb-20
`;

const H3 = tw.h3`
  font-inknut text-white
  text-3xl xsm:text-4xl
  mx-auto
  mb-10
`
const MenuContainer = tw.div`
  flex flex-col items-center
  w-full
  p-6 rounded-lg
  mb-6
`

const CategoryTitle = tw.span`
  font-inknut text-white text-2xl
  mb-2
`

const CategorySubTitle = tw.span`
  font-inknut text-white text-lg
  mb-6
`

const MenuItems = tw.div`
  grid grid-cols-3 gap-10 text-center
  w-full
`

const ItemName = tw.span`
  font-inknut text-white text-2xl font-semibold
`

const MenuItem = tw.div`
  flex flex-col items-center gap-4
`

//! ---> DATA <---
const menu = [
  {
    category: "Mediterranean Plates",
    subtitle: "Choose 3 Sides and 2 Sauces",
    items: [
      { name: "Falafel", img: "/images/falafel-plate.avif" },
      { name: "Gyro", img: "/images/gyro-plate.avif" },
      { name: "Chicken Shawarma", img: "/images/chicken-shawarma-plate.avif" },
      { name: "Beef Shawarma", img: "/images/beef-shawarma-plate.avif" },
      { name: "Mix Grill Combo", img: "/images/mix-grill-combo-plate.avif" },
      { name: "No Protein", img: "" },
    ]
  },
  {
    category: "Wraps",
    items: [
      { name: "Gyro", img: "/images/gyro-wrap.avif" },
      { name: "Chicken Shawarma", img: "/images/chicken-shawarma-wrap.avif" },
      { name: "Beef Shawarma", img: "/images/beef-shawarma-wrap.avif" },
      { name: "Falafel Veggie", img: "" },
      { name: "Hummus Veggie", img: "" },
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Hummus", img: "" },
      { name: "Baba Ghanoush", img: "" },
      { name: "Tzatziki", img: "" },
      { name: "Basamati Rice", img: "" },
      { name: "Tabouleh Salad", img: "" },
      { name: "Cucumber Salad", img: "" }
    ]
  },
  {
    category: "Sauces",
    items: [
      { name: "Garlic Sauce", img: "" },
      { name: "Hot Sauce", img: "" },
      { name: "Tahini Sauce", img: "" }
    ]
  }
];

//! ---> COMPONENT <---
export default function Menu() {
  return (
    <ContainerSection>
      <H3>Savor Mediterranean Delights Today</H3>
      {menu.map((section, index) => {
        return (
          <MenuContainer key={section + index}>
            <CategoryTitle>{section.category}</CategoryTitle>
            {section.subtitle && <CategorySubTitle>({section.subtitle})</CategorySubTitle>}
            <MenuItems>
            {section.items.map((item, index) => {
              return (
                <MenuItem key={item + index}>
                  <ItemName>
                    {item.name}
                  </ItemName>
                  {item.img && <Image
                    className="rounded-lg"
                    src={item.img}
                    alt={item.name}
                    width={200}
                    height={200}
                  />}
                </MenuItem>
              )
            })}
            </MenuItems>
          </MenuContainer>
        )
      })}
    </ContainerSection>
  )
}