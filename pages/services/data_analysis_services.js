import Head from 'next/head';
import Layout from '../../components/Layout';
import DataAnalysisServices from '../../components/Services/DataAnalysisServices';

const data_analysis_services = () => {
    return (
        <>
            <Head>
                <title>Data Analysis Services</title>
                <meta name="description" content="Data Analysis Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <DataAnalysisServices />
                </div>
            </Layout>
            
        </>
    );
};

export default data_analysis_services;