function SubHeroSection() {
    return (
        <section className="bg-gradient-to-r from-[#1A3A6C] to-[#1A3A6C]/80">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Acceder a vos services gouvernementaux.
                    </h1>
                    <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                        Notre plateforme vous permet d'accéder à une variété de services gouvernementaux, de la demande de documents officiels à la
                        prise de rendez-vous médicaux, le tout en quelques clics.
                    </p>
                    <a
                        href="#"
                        className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg bg-white/20 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-100 hover:text-blue-400 focus:ring-4"
                    >
                        Get started
                        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
}

export default SubHeroSection;
