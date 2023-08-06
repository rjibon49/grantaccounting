import Head from 'next/head';
import Layout from '../../components/Layout';
import FinancialManagementServices from '../../components/Services/FinancialManagementServices';

const finalcial_management_services = () => {
    return (
        <>
            <Head>
                <title>Financial Management Services</title>
                <meta name="description" content="Financial Management Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <FinancialManagementServices />
                </div>
            </Layout>
            
        </>
    );
};

export default finalcial_management_services;