import Head from 'next/head';
import Layout from '../../components/Layout';
import WhatDoYouNeed from '../../components/Blog/WhatDoYouNeed';

const what_do_you_need_to_do = () => {
    return (
        <>
            <Head>
                <title>What do you need to do to be good at grant accounting?</title>
                <meta name="description" content="What do you need to do to be good at grant accounting?" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <WhatDoYouNeed />
                </div>
            </Layout>
            
        </>
    );
};

export default what_do_you_need_to_do;