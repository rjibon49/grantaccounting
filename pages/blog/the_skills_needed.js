import Head from 'next/head';
import Layout from '../../components/Layout';
import TheSkillsNeeded from '../../components/Blog/TheSkillsNeeded';

const the_skills_needed = () => {
    return (
        <>
            <Head>
                <title>The skills needed for Grant Accounting</title>
                <meta name="description" content="The skills needed for Grant Accounting" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <TheSkillsNeeded />
                </div>
            </Layout>
            
        </>
    );
};

export default the_skills_needed;