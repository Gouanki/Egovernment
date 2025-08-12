import LatestUpdate from '@/components/clients/home/LatestUpdate';
import Services from '@/components/clients/home/Services';
import { Head } from '@inertiajs/react';
import Feature from './Layout/Feature';
import HeroSection from './Layout/HeroSection';
import Layout from './Layout/Layout';

function Home() {
    return (
        <>
            <Head title="Home" />
            <Layout>
                <HeroSection />
                <Feature />
                <Services />
                <LatestUpdate />
            </Layout>
        </>
    );
}

export default Home;
