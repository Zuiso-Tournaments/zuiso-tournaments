'use client';

import Card from '@/components/ui/Card';
import {Button} from '@/components/ui/button';
import {handleRequest} from '@/lib/auth-helpers/client';
import {updateEmail} from '@/lib/auth-helpers/server';
import {useRouter} from 'next/navigation';

export default function EmailForm({
  userEmail,
}: {
  userEmail: string | undefined;
}) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Check if the new email is the same as the old email
    if (e.currentTarget.newEmail.value === userEmail) {
      e.preventDefault();
      return;
    }
    handleRequest(e, updateEmail, router);
  };

  return (
    <Card
      title="Your Email"
      description="Please enter the email address you want to use to login."
      footer={
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="pb-4 sm:pb-0">
            We will email you to verify the change.
          </p>
          <Button type="submit" form="emailForm">
            Update Email
          </Button>
        </div>
      }>
      <div className="mb-4 mt-8 text-xl font-semibold">
        <form id="emailForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="newEmail"
            className="w-1/2 rounded-md bg-zinc-800 p-3"
            defaultValue={userEmail ?? ''}
            placeholder="Your email"
            maxLength={64}
          />
        </form>
      </div>
    </Card>
  );
}
