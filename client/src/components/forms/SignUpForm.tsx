"use client"

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import EmailIcon from '../icons/EmailIcon'
import PasswordIcon from '../icons/PasswordIcon'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { signUpSchema, SignUpSchema } from '@/validations/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import useSignUp from '@/lib/hooks/services/userServices/useSignUp'

function SignUpForm() {
    const { handleSignUp, isPending } = useSignUp()
    const form = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    function onSubmit(data: SignUpSchema) {
        handleSignUp(data)
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
                    <FormLabel>Create password</FormLabel>
                    <FormControl>
                        <Input
                            type='password'
                            placeholder="At least 8 characters" 
                            {...field}
                            icon={<PasswordIcon />}
                            error={form.control._formState.errors.password && form.control._formState.errors.password.message} 
                        />
                    </FormControl>
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                        <Input
                            type='password'
                            placeholder="At least 8 characters" 
                            {...field}
                            icon={<PasswordIcon />}
                            error={form.control._formState.errors.confirmPassword && form.control._formState.errors.confirmPassword.message} 
                        />
                    </FormControl>
                </FormItem>
                )}
            />

            <div>
                <span className='text-xs text-grey'>Password must contain at least 8 characters</span>
            </div>

            <Button type="submit" className='w-full' disabled={isPending}>Create new account</Button>
        </form>
    </Form>
  )
}

export default SignUpForm