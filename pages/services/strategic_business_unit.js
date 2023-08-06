import Head from 'next/head';
import Layout from '../../components/Layout';
import StrategicBusinessUnit from '../../components/Services/StrategicBusinessUnit';

const strategic_business_unit = () => {
    return (
        <>
            <Head>
                <title>Strategic Business Unit (SBU) Planning and Business Management</title>
                <meta name="description" content="Strategic Business Unit (SBU) Planning and Business Management" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <StrategicBusinessUnit />
                </div>
            </Layout>
            
        </>
    );
};

export default strategic_business_unit;