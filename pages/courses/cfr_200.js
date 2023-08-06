import Head from 'next/head';
import Layout from '../../components/Layout';
import Cfr200 from '../../components/Courses/Cfr200';

const cfr_200 = () => {
    return (
        <>
            <Head>
                <title>2 CFR 200</title>
                <meta name="description" content="2 CFR 200" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <Cfr200 />
                </div>
            </Layout>
            
        </>
    );
};

export default cfr_200;