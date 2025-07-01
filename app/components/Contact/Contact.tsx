import { ContactForm } from './ContactForm'
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const ContainerSection = tw.section`
  flex items-center gap-5 md:flex-col flex-row
  justify-around
  py-20 bg-secondary-color
  px-5 xsm:px-10 sm:px-5 lg:px-16
  pb-16 md:pb-20
`;

const CopyContent = tw.div`
  flex flex-col
`

export const Contact = () => {
  return (
    <ContainerSection>
      <CopyContent>
        <span>Get in touch</span>
        <span>Feel free to leave a message and reach out to us!</span>
      </CopyContent>

      <ContactForm/>
    </ContainerSection>
  )
}