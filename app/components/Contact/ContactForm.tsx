'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { NameField, EmailField, MessageField } from './ContactFields'

export const ContactForm = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form>
        <div>
          <NameField/>
          <EmailField/>
        </div>

        <MessageField/>
      </form>
    </FormProvider>
  )
}