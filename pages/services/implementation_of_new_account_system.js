import Head from 'next/head';
import Layout from '../../components/Layout';
import Implementation from '../../components/Services/Implementation';

const implementation_of_new_account_system = () => {
    return (
        <>
            <Head>
                <title>Implementation of new accounting system</title>
                <meta name="description" content="Implementation of new accounting system" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <Implementation />
                </div>
            </Layout>
            
        </>
    );
};

export default implementation_of_new_account_system;