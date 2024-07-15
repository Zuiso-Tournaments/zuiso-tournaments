'use client';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/Toasts/use-toast';
import { cn } from '@/utils/cn';
import { set } from 'lodash';

const formSchema = z.object({
  topic: z.string().min(1, 'Selecciona un asunto'),
  name: z
    .string()
    .min(3, { message: 'Nombre entre 3-50 caracteres' })
    .max(50, { message: 'Nombre entre 3-50 caracteres' }),
  email: z.string().email('Email no válido'),
  message: z
    .string()
    .min(10, { message: 'Mensaje entre 10-500 caracteres' })
    .max(500, { message: 'Mensaje entre 10-500 caracteres' }),
  pictures: z.array(z.string()).max(10, 'Máximo 10 archivos').optional()
});

/**
 * ContactForm component.
 * Renders a form for users to submit their contact information.
 * @returns {React.ReactElement} The ContactForm component.
 */
const ContactForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null); // Create a ref for the file input element

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
      pictures: []
    }
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedFileUrls, setSelectedFileUrls] = useState<string[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray: File[] = Array.from(e.target.files);

      if (filesArray.length > 10) {
        toast({
          title: 'Error',
          description: 'Se permite un máximo de 10 archivos.',
          variant: 'destructive'
        });
        e.target.value = '';
        setSelectedFileUrls([]);
        setSelectedFiles([]);
        return;
      }

      const allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'image/webp',
        'image/tiff',
        'image/bmp',
        'image/x-icon',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'video/mp4',
        'video/quicktime',
        'video/x-msvideo'
      ];

      const invalidFiles = filesArray.filter(
        (file) => !allowedTypes.includes(file.type)
      );

      if (invalidFiles.length > 0) {
        toast({
          title: 'Error',
          description: `El archivo '${invalidFiles[0].name}' no es un formato válido.`,
          variant: 'destructive'
        });
        e.target.value = '';
        setSelectedFileUrls([]);
        setSelectedFiles([]);
      } else {
        setSelectedFiles(filesArray);
        const urls = filesArray.map((file) => URL.createObjectURL(file));
        setSelectedFileUrls(urls);
        console.log(typeof urls);
        console.log(form.getValues());
      }
    }
  };

  const { toast } = useToast();

  function onSubmit() {
    const values = form.getValues();
    console.log(values);
    const pictureUrls = selectedFileUrls.map((url) => url.toString());
    const dataToSend = {
      ...values,
      pictures: pictureUrls
    };
    console.log(dataToSend);
    onReset();
    toast({
      title: 'Mensaje enviado',
      description: 'Gracias por tu mensaje'
    });
  }

  function onReset() {
    form.reset({
      name: '',
      email: '',
      topic: '',
      message: '',
      pictures: []
    });
    setSelectedFiles([]);
    setSelectedFileUrls([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  useEffect(() => {
    return () => {
      selectedFileUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [selectedFileUrls]);

  const renderPreview = (file: File, index: number) => {
    if (file.type.startsWith('image/')) {
      return (
        <img
          key={index}
          src={selectedFileUrls[index]}
          alt={`Preview ${index}`}
          className="h-32 rounded-md border-white border-2"
        />
      );
    } else {
      return (
        <img
          key={index}
          src="https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png"
          alt={`Error Preview ${index}`}
          className="h-32 rounded-md border-white border-2"
        />
      );
    }
  };

  return (
    <div className="mt-4 text-black ">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            form.handleSubmit(() => onSubmit())();
          }}
          onReset={onReset}
        >
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Asunto</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecciona un asunto"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Asunto</SelectLabel>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="support">Soporte</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Mensaje</FormLabel>
                <FormControl>
                  <Input placeholder="Mensaje" {...field} />
                </FormControl>
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pictures"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Adjuntar imágenes relacionadas con la solicitud
                </FormLabel>
                <FormControl className="cursor-pointer">
                  <Input
                    className="w-96 mt-16 cursor-pointer"
                    type="file"
                    ref={fileInputRef} // Assign the ref to the file input element
                    multiple
                    accept="image/*, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp4, .mov, .avi, .mp3, .wav"
                    onChange={(e) => {
                      handleFileChange(e);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage {...field} />
                <div className="flex flex-row gap-4 pt-4 flex-wrap">
                  {selectedFiles.map((file, index) =>
                    renderPreview(file, index)
                  )}
                </div>
              </FormItem>
            )}
          />

          <div className="flex flex-row justify-between">
            <button
              type="reset"
              className={cn(
                'bg-red-500 text-white rounded-md py-2 px-4 w-[180px]',
                'hover:bg-red-600'
              )}
            >
              Limpiar
            </button>

            <button
              type="submit"
              className={cn(
                'bg-blue-500 text-white rounded-md py-2 px-4 w-[180px]',
                'hover:bg-blue-600'
              )}
            >
              Enviar
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
