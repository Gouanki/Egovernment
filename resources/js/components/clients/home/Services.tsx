import { useState } from 'react';

const Services = () => {
    const services = [
        {
            title: 'Digital ID & Passport',
            description: 'Apply for digital identity documents and passport services',
            icon: '🪪',
            link: '/digital-id',
        },
        {
            title: 'Tax & Revenue',
            description: 'File returns, manage payments, and access tax documents',
            icon: '📊',
            link: '/tax-services',
        },
        {
            title: 'Healthcare Access',
            description: 'Book appointments, access medical records, and find facilities',
            icon: '🏥',
            link: '/healthcare',
        },
        {
            title: 'Education Portal',
            description: 'School registration, scholarships, and educational resources',
            icon: '🎓',
            link: '/education',
        },
    ];
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 15; // Adjust this value for tilt sensitivity
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - left) / width - 0.5;

        const y = (e.clientY - top) / height - 0.5;

        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <section className="bg-gray-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#1A3A6C] md:text-5xl">Government Services</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-600 hover:text-white hover:shadow-lg"
                            onMouseMove={handleMove}
                            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
                        >
                            <div className="mb-4 text-4xl">{service.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold text-[#1A3A6C] group-hover:text-white">{service.title}</h3>
                            <p className="mb-4 text-sm text-gray-600 group-hover:text-gray-200">{service.description}</p>
                            <button className="font-medium text-[#2C5EA0] transition-colors duration-200 group-hover:text-white">Learn More →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
