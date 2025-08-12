function HeroSection() {
    return (
        <section className="relative flex h-[700px] items-center justify-center text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A6C] to-[#1A3A6C]/80"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                <h1 className="mb-4 text-4xl leading-tight font-bold md:mb-8 md:text-7xl">
                    Your Government,
                    <br />
                    At Your Fingertips
                </h1>
                <p className="mx-auto mb-12 max-w-3xl text-xl text-[#E0E4E8] md:text-3xl">
                    Access government services securely and efficiently, anytime, anywhere
                </p>
                <div className="flex items-center justify-center space-y-0 space-x-6">
                    <button className="hover:bg-opacity-90 w-full transform rounded-lg bg-[#2C5EA0] px-7 py-2 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl md:w-auto md:px-10 md:py-4">
                        Get Started
                    </button>
                    <button className="w-full transform rounded-lg bg-white px-7 py-2 text-lg font-semibold text-[#1A3A6C] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#E0E4E8] hover:shadow-xl md:w-auto md:px-10 md:py-4">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
