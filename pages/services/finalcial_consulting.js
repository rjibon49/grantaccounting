import Head from 'next/head';
import Layout from '../../components/Layout';
import FinalcialConsulting from '../../components/Services/FinalcialConsulting';

const finalcial_consulting = () => {
    return (
        <>
            <Head>
                <title>Finalcial Consulting</title>
                <meta name="description" content="Finalcial Consulting" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <FinalcialConsulting />
                </div>
            </Layout>
            
        </>
    );
};

export default finalcial_consulting;