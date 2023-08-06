import Head from 'next/head';
import Layout from '../components/Layout';
import Banner from '../components/HomePage/Banner';
import Mission from '../components/HomePage/Mission';
import AboutUs from '../components/HomePage/AboutUs';
import Service from '../components/HomePage/Service';
import FeatureCourse from '../components/HomePage/Course/FeatureCourse';
import NewCourses from '../components/HomePage/Course/NewCourses';
import VolunteerInfo from '../components/HomePage/Course/VolunteerInfo';
import TopRatedCourses from '../components/HomePage/Course/TopRatedCourses';
import Instructor from '../components/HomePage/Course/Instructor';
import BestSellingCourses from '../components/HomePage/Course/BestSellingCourses';
import SubscribeNow from '../components/HomePage/SubscribeNow';
import FreeCourses from '../components/HomePage/Course/FreeCourses';
import Testimonials from '../components/HomePage/Testimonials';
import Blog from '../components/HomePage/Blog';
import Team from '../components/HomePage/Team';

const index = () =>  {
  return (
    <>
      <Head>
        <title>Grant Accounting</title>
        <meta name="description" content="Grant Accounting largest LMS Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <Banner />
          <Mission />
          <AboutUs />
          <Service />
          <FeatureCourse />
          <NewCourses />
          <VolunteerInfo />
          <TopRatedCourses />
          <Instructor />
          <BestSellingCourses />
          <SubscribeNow />
          <FreeCourses />
          <Team />
          <Testimonials />
          <Blog />
        </Layout>
      </div>
    </>
  )
}

export default index;
