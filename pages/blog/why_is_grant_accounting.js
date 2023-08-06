import Head from 'next/head';
import Layout from '../../components/Layout';
import WhyIsgrantAccounting from '../../components/Blog/WhyIsgrantAccounting';

const why_is_grant_accounting = () => {
    return (
        <>
            <Head>
                <title>Why is grant accounting important?</title>
                <meta name="description" content="Why is grant accounting important?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <WhyIsgrantAccounting />
                </div>
            </Layout>
            
        </>
    );
};

export default why_is_grant_accounting;