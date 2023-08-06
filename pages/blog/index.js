import Head from 'next/head';
import Layout from '../../components/Layout';
import BlogContent from '../../components/Blog/BlogContent';

const index = () => {
    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Blogs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <BlogContent />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;