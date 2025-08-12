const LatestUpdate = () => {
    const newsUpdates = [
        {
            title: 'New Digital Services Launch',
            date: '2024-01-15',
            category: 'Announcement',
        },
        {
            title: 'Tax Filing Deadline Extended',
            date: '2024-01-10',
            category: 'Tax',
        },
        {
            title: 'COVID-19 Healthcare Updates',
            date: '2024-01-05',
            category: 'Healthcare',
        },
    ];

    return (
        <section className="bg-white px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-3xl font-bold text-[#1A3A6C]">Latest Updates</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {newsUpdates.map((news, index) => (
                        <div
                            key={index}
                            className="group rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:bg-[#1A3A6C] hover:shadow-lg"
                        >
                            <span className="mb-4 inline-block rounded-full bg-[#2C5EA0]/10 px-3 py-1 text-sm text-[#2C5EA0] group-hover:bg-white/10 group-hover:text-white">
                                {news.category}
                            </span>
                            <h3 className="mb-2 text-xl font-semibold group-hover:text-white">{news.title}</h3>
                            <p className="text-gray-500 group-hover:text-gray-200">{new Date(news.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestUpdate;
