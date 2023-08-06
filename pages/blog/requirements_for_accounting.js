import Head from 'next/head';
import Layout from '../../components/Layout';
import RequirmentsForAccounting from '../../components/Blog/RequirmentsForAccounting';

const requirements_for_accounting = () => {
    return (
        <>
            <Head>
                <title>Requirements for accounting for grants from the Government.</title>
                <meta name="description" content="Requirements for accounting for grants from the Government." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <RequirmentsForAccounting />
                </div>
            </Layout>
            
        </>
    );
};

export default requirements_for_accounting;