import AboutList from '@/app/about/AboutList';


export default async function AboutPage() {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl pb-8">
            About
          </h1>
          <AboutList  />
        </div>
      </div>
    </section>
  );
}
