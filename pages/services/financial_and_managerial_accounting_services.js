import Head from 'next/head';
import Layout from '../../components/Layout';
import FinancialAndManagerialAccountingServices from '../../components/Services/FinancialAndManagerialAccountingServices';

const financial_and_managerial_accounting_services = () => {
    return (
        <>
            <Head>
                <title>Financial And Managerial Accounting Services</title>
                <meta name="description" content="Financial And Managerial Accounting Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <FinancialAndManagerialAccountingServices />
                </div>
            </Layout>
            
        </>
    );
};

export default financial_and_managerial_accounting_services;