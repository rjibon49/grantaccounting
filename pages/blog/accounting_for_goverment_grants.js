import Head from 'next/head';
import Layout from '../../components/Layout';
import AccountsForGovermentGrants from '../../components/Blog/AccountsForGovermentGrants';

const accounting_for_goverment_grants = () => {
    return (
        <>
            <Head>
                <title>Accounting for Government Grants</title>
                <meta name="description" content="Accounting for Government Grants" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <AccountsForGovermentGrants />
                </div>
            </Layout>
            
        </>
    );
};

export default accounting_for_goverment_grants;