import ContactForm from '@/app/about/mdemora/ContactForm';
import RandomDiceResults from './RandomDiceResults';
export default async function MarcosPage() {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8 sm:align-center flex flex-col sm:flex-col">
        <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
          Miguel
        </h1>

        <RandomDiceResults />

        <ContactForm />
      </div>
    </section>
  );
}
