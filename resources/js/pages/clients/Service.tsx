import ListOfServices from '@/components/clients/service/ListOfServices';
import { Head } from '@inertiajs/react';
import Layout from './Layout/Layout';
import SubHeroSection from './Layout/SubHeroSection';

function Service() {
    return (
        <>
            <Head title="Service" />
            <Layout>
                <SubHeroSection />
                <ListOfServices />
            </Layout>
        </>
    );
}

export default Service;
