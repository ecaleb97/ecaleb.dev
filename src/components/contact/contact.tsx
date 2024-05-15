'use client';

import { SectionHeading } from '@/components/heading/section-heading';
import styles from '@/components/intro/intro.module.css';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmailFormSchema } from '@/schemas/send-email';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Path } from '../breadcrumb/path';

export function Contact() {

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof sendEmailFormSchema>>({
    resolver: zodResolver(sendEmailFormSchema),
    defaultValues: {
      email: '',
      message: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof sendEmailFormSchema>) => {
    // console.log(values);
    const { email, message } = values;
    startTransition(() => {
      async function sendEmail() {
        try {
          await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
          });
          toast.success('Message sent successfully');
          form.reset();
        } catch (error) {
          console.error(error);
          toast.error('An error occurred while sending the message');
        }
      }
      sendEmail();
    });
  };

  return (
    <SectionWrapper
      className='my-28 sm:my-40'
    >
      <Path name='Contact' />
      <SectionHeading>
        Contact
      </SectionHeading>
      <p className='tracking-wider text-sm sm:text-base leading-7'>
        Please contact me if you have any questions or would like to work together.
        <a
          href="mailto:ecaleb.vz@gmail.com"
          className={`underline font-bold ${styles.textAnimate} 
          dark:bg-gradient-to-r from-[#fff08b] from-20% 
          via-[#00affa] via-30%
          to-[#fff08b] to-80%`} 
        >
          ecaleb.vz@gmail.com
        </a>
      </p>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel 
                    htmlFor='email'
                    className='tracking-wider'
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      id='email'
                      type='email'
                      {...field}
                      placeholder='example@gmail.com'
                      className='dark:bg-customDark border dark:border-[#fafafa]'
                      autoComplete='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel 
                    htmlFor='message'
                    className='tracking-wider'
                  >
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id='message'
                      placeholder='Your message here...'
                      className='dark:bg-customDark border dark:border-[#fafafa]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button 
            className='dark:bg-[#fafafa] hover:scale-105 tracking-wider
            bg-primary hover:bg-primary/90'
            type='submit'
            disabled={isPending}
          >
            Send Message
          </Button>
        </form>
      </Form>
    </SectionWrapper>
  );
}