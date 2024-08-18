'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import React from 'react';

import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';

import TournamentCard from '@/features/tournaments/components/TournamentCard';
import useManager from '@/features/tournaments/hooks/useManager';

const MOCKED_PLAYERS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Henry',
];

const formSchema = z.object({
  tournament_name: z
    .string()
    .min(3, {message: 'Tournament name must be at least 3 characters'})
    .max(50, {message: 'Tournament name must not exceed 50 characters'}),
});

const TournamentPage: React.FC = () => {
  const {createTournament, addPlayer, tournament, startTournament} =
    useManager();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tournament_name: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createTournament(values.tournament_name);

    MOCKED_PLAYERS.forEach((player) => {
      addPlayer(player);
    });
  }

  console.log(tournament);

  return (
    <div className="mx-auto w-full max-w-lg">
      <h1 className="mb-6 text-center text-3xl font-bold">Create Tournament</h1>
      <Form {...form}>
        <form className="my-4 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="tournament_name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Tournament Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter tournament name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Create Tournament
          </Button>
        </form>
      </Form>

      {tournament && (
        <TournamentCard
          tournament={tournament}
          startTournament={startTournament}
        />
      )}
    </div>
  );
};

export default TournamentPage;
