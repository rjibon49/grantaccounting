import Head from 'next/head';
import Layout from '../../components/Layout';
import BusinessValuationServices from '../../components/Services/BusinessValuationServices';

const business_valuation_services = () => {
    return (
        <>
            <Head>
                <title>Business Valuation Services</title>
                <meta name="description" content="Business Valuation Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <BusinessValuationServices />
                </div>
            </Layout>
            
        </>
    );
};

export default business_valuation_services;