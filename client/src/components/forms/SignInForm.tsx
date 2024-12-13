"use client"

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { signInSchema, SignInSchema } from '@/validations/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import EmailIcon from '../icons/EmailIcon'
import PasswordIcon from '../icons/PasswordIcon'

function SignInForm() {
    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function onSubmit(data: SignInSchema) {
        console.log(data)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                    placeholder="e.g. alex@email.com" 
                    {...field}
                    icon={<EmailIcon />}
                    error={form.control._formState.errors.email && form.control._formState.errors.email.message} 
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                    type='password'
                    placeholder="Enter your password" 
                    {...field}
                    icon={<PasswordIcon />}
                    error={form.control._formState.errors.password && form.control._formState.errors.password.message} 
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className='w-full'>Login</Button>
      </form>
    </Form>
  )
}

export default SignInForm