export default async function MdeMoraPage() {
  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center flex flex-col sm:flex-col">
          <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
            Miguel de Mora
          </h1>
          <div className="flex gap-4">
            <img
              src="https://picsum.photos/seed/mdemora/300/300"
              className="size-96 rounded-2xl"
            />
            <div className="mt-4 text-lg flex flex-col gap-8">
              <p className="text-white">
                Miguel de Mora is a software engineer and writer. He is the
                author of the book "The Pragmatic Programmer" and has written
                several articles on software development. He is also the creator
                of the popular programming blog "Code With Miguel."
              </p>
              <p>
                Miguel has a passion for teaching and sharing his knowledge with
                others. He is a strong advocate for open-source software and
                believes in the power of collaboration and community. In his
                free time, Miguel enjoys reading, writing, and spending time
                with his family.
              </p>
              <div className="flex-1" />
              <p className="text-right">
                You can follow Miguel on Twitter at{' '}
                <a
                  href="https://twitter.com/mdemora"
                  className="text-blue-400 hover:underline"
                >
                  @mdemora
                </a>
                .
              </p>
            </div>
          </div>
          <h1 className="text-4xl my-8 font-extrabold text-white sm:text-center sm:text-6xl">
            Demos
          </h1>
        </div>
      </div>
    </section>
  );
}
