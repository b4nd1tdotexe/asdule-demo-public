'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Ime mora sadržati najmanje 2 karaktera. ' }).max(40, { message: 'Ime može sadržati najviše 40 karaktera. ' }),
  email: z.string().email({ message: 'Uneti mejl nije validan. ' }),
  phone: z.string().min(5, { message: 'Telefon mora sadržati najmanje 5 karaktera. ' }).max(15, { message: 'Telefon može sadržati najviše 15 karaktera. ' }),
  msg: z.string().min(10, { message: 'Poruka mora sadržati najmanje 10 karaktera. ' }).max(500, { message: 'Poruka može sadržati najviše 500 karaktera. ' })
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      msg: ''
    },
    reValidateMode: 'onBlur'
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: 'Poruka je poslata',
      description: JSON.stringify(values),
      style: {
        wordBreak: 'break-word'
      }
    })
  }

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <p className='text-4xl font-semibold text-[#48606E]'>Kontaktirajte nas</p>
        <p className='text-sm text-[#333333]'>Za sve dodatne informacije, pitanja ili sugestije možete nas kontaktirati preko naše kontakt forme.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8'>
          <div className='flex flex-col gap-8 md:flex-row'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='grow'>
                  <FormLabel>Ime</FormLabel>
                  <FormControl>
                    <input className='block px-4 py-2 rounded-lg w-full' maxLength={40} placeholder='Marko' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='grow'>
                  <FormLabel>Mejl</FormLabel>
                  <FormControl>
                    <input className='block px-4 py-2 rounded-lg w-full' maxLength={40} placeholder='marko@gmail.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='grow'>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <input className='block px-4 py-2 rounded-lg w-full' maxLength={40} placeholder='0642257435' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='msg'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poruka</FormLabel>
                <FormControl>
                  <textarea className='block px-4 py-2 rounded-lg w-full' placeholder='Zdravo...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className='bg-[#333333] max-w-[300px] px-6 py-4 rounded-full text-white font-semibold text-xl'>Pošalji poruku</button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm;