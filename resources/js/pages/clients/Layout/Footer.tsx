function Footer() {
    return (
        <footer className="bg-[#1A3A6C] py-16 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Leadership
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    All Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Digital ID
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Healthcare
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#E0E4E8]">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/20 pt-8 text-center">
                    <p>© 2024 Government Portal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
