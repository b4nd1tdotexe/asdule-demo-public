'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const Categories = ['A', 'A1', 'A2', 'B', 'BE', 'C', 'CE'] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: 'Ime mora sadržati najmanje 2 karaktera. ' }).max(40, { message: 'Ime može sadržati najviše 40 karaktera. ' }),
  email: z.string().email({ message: 'Uneti mejl nije validan. ' }),
  phone: z.string().min(5, { message: 'Telefon mora sadržati najmanje 5 karaktera. ' }).max(15, { message: 'Telefon može sadržati najviše 15 karaktera. ' }),
  jmbg: z.string().min(13, { message: 'JMBG sadrži 13 karaktera.' }).max(13, { message: 'JMBG sadrži 13 karaktera.' }),
  category: z
    .enum(Categories, { errorMap: () => ({ message: 'Ovaj tip kategorije ne postoji' }) })
});

const SignUpForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      jmbg: ''
    },
    reValidateMode: 'onBlur'
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: 'Prijava je poslata',
      description: JSON.stringify(values),
      style: {
        wordBreak: 'break-word'
      }
    })
  }

  return (
    <div className='flex flex-col gap-8 w-full max-w-[900px]'>
      <div className='flex flex-col gap-3 text-center'>
        <p className='text-4xl font-semibold text-[#48606E] uppercase'>Prijavi se online!</p>
        <p className='text-sm text-[#333333]'>Upis u Auto školu Dule je postao sada mnogo lakši uz Online prijavu</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='grow'>
                <FormLabel>Ime*</FormLabel>
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
                <FormLabel>Mejl*</FormLabel>
                <FormControl>
                  <input className='block px-4 py-2 rounded-lg w-full' maxLength={15} placeholder='marko@gmail.com' {...field} />
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
                <FormLabel>Telefon*</FormLabel>
                <FormControl>
                  <input className='block px-4 py-2 rounded-lg w-full' maxLength={13} placeholder='0642257435' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='jmbg'
            render={({ field }) => (
              <FormItem>
                <FormLabel>JMBG*</FormLabel>
                <FormControl>
                  <input className='block px-4 py-2 rounded-lg w-full' maxLength={13} placeholder='0101990360007' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategorija*</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange} name='type'>
                    <SelectTrigger onBlur={field.onBlur} className='w-full gap-1 rounded-lg border-black'>
                      <SelectValue placeholder='Izaberite kategoriju' {...field} />
                    </SelectTrigger>
                    <SelectContent className='rounded-xl'>
                      {Categories.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className='bg-[#48606E] max-w-[300px] px-6 py-4 text-white rounded-full font-semibold text-xl'>Prijavi se</button>
        </form>
      </Form>
    </div>
  )
}

export default SignUpForm;