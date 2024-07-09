export default async function MarcosPage() {
    return (
        <section className="mb-32 bg-black">
            <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8 sm:align-center flex flex-col sm:flex-col">
                <h1 className="text-4xl mb-8 font-extrabold text-white sm:text-center sm:text-6xl">
                    Marcos García
                </h1>
                <div className= "flex gap-4">
                    <img
                        src="https://picsum.photos/seed/marcos/300/300"
                        className="size-96 rounded-2xl"
                    />
                    <div className="mt-4 text-lg flex flex-col gap-8">
                        <p className="text-white">
                            Marcos García is a dedicated computer engineering student and enthusiastic learner.
                            He is passionate about software development and enjoys tackling new challenges
                            through innovative projects. Marcos is also the creator of the informative blog "Tech Insights with Marcos."
                        </p>
                        <p>
                            Marcos has a strong commitment to expanding his knowledge and skills,
                            continually seeking out new learning opportunities. He believes in the power of collaboration and community
                            in driving technological advancement. In his free time, Marcos enjoys reading about the latest tech trends, 
                            working on personal projects, and spending time with his family.
                        </p>
                        <div className="flex-1" />
                        <p className="text-right">
                            You can follow Marcos on Twitter at{' '}
                            <a
                            href="https://twitter.com/marcos"
                            className="text-blue-400 hover:underline"
                            >
                                @marcos
                            </a>
                            .
                        </p>
                    </div>
                </div>      
            </div>
        </section>
    )
}