'use client';

import {useRouter} from 'next/navigation';

import {handleRequest} from '@/lib/auth-helpers/client';
import {updateName} from '@/lib/auth-helpers/server';

import {Button} from '@/components/ui/button';
import {Card, CardDescription, CardFooter} from '@/components/ui/card';

export default function NameForm({userName}: {userName: string}) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === userName) {
      e.preventDefault();
      return;
    }
    handleRequest(e, updateName, router);
  };

  return (
    <Card title="Your Name">
      <div className="mb-4 ml-4 mt-8 text-xl font-semibold">
        <CardDescription className=" mb-4 ">
          Please enter your full name, or a display name you are comfortable
          with.
        </CardDescription>
        <form id="nameForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="fullName"
            className=":text-white w-1/2 rounded-md bg-zuiso-800 p-3"
            defaultValue={userName}
            placeholder="Your name"
            maxLength={64}
          />
        </form>
      </div>
      <CardFooter>
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="mr-4 pb-4 sm:pb-0">64 characters maximum</p>
          <Button type="submit" form="nameForm">
            Update Name
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
