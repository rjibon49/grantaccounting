import Head from 'next/head';
import Layout from '../../components/Layout';
import AllCourses from '../../components/Courses/AllCourses';

const index = () => {
    return (
        <>
            <Head>
                <title>All Courses</title>
                <meta name="description" content="All Courses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Layout>
                    <div className='my-5'>
                        <AllCourses />
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default index;