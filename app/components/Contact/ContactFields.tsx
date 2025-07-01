'use client'

import { useController, useFormContext } from 'react-hook-form'
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const InputField = tw.input`

`

const AreaField = tw.input`

`
export const NameField = () => {

  const { control } = useFormContext()

  const { field } = useController({
    name: 'name',
    control
  })

  return (
    <div>
      <label htmlFor="name">Name</label>
      <InputField id="name" {...field} />
    </div>
  )
}

export const EmailField = () => {

  const { control } = useFormContext()

  const { field } = useController({
    name: 'email',
    control
  })

  return (
    <div>
      <label htmlFor="email">Email</label>
      <InputField id="email" {...field} />
    </div>
  )
}

export const MessageField = () => {

  const { control } = useFormContext()

  const { field } = useController({
    name: 'message',
    control
  })

  return (
    <div>
      <label htmlFor="message">Message</label>
      <AreaField id="message" {...field} />
    </div>
  )
}