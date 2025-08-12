function Feature() {
    const features = [
        {
            title: '24/7 Access',
            description: 'Access government services anytime, anywhere',
            icon: '⏰',
        },
        {
            title: 'Secure Platform',
            description: 'End-to-end encryption for all transactions',
            icon: '🔒',
        },
        {
            title: 'Quick Processing',
            description: 'Fast-tracked application processing',
            icon: '⚡',
        },
        {
            title: 'Mobile Ready',
            description: 'Access services from any device',
            icon: '📱',
        },
    ];
    return (
        <section className="bg-white py-8 md:py-16">
            <div className="mx-auto max-w-full px-2 md:max-w-7xl md:px-6">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-xl bg-gray-100 p-8 shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-600 hover:text-white hover:shadow-lg md:bg-gray-50"
                        >
                            <div className="mb-4 text-4xl">{feature.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-[#1A3A6C] group-hover:text-white">{feature.title}</h3>
                            <p className="hidden text-gray-600 group-hover:text-gray-200 md:block">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Feature;
