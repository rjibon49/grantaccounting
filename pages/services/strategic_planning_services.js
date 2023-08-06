import Head from 'next/head';
import Layout from '../../components/Layout';
import StrategicPlanningServices from '../../components/Services/StrategicPlanningServices';

const strategic_planning_services = () => {
    return (
        <>
            <Head>
                <title>Strategic Planning Services</title>
                <meta name="description" content="Strategic Planning Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <StrategicPlanningServices />
                </div>
            </Layout>
            
        </>
    );
};

export default strategic_planning_services;