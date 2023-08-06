import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FeatureCourse from '../HomePage/Course/FeatureCourse';
import NewCourses from '../HomePage/Course/NewCourses';
import TopRatedCourses from '../HomePage/Course/TopRatedCourses';
import BestSellingCourses from '../HomePage/Course/BestSellingCourses';
import FreeCourses from '../HomePage/Course/FreeCourses';



const AllCourses = () => {
    return (
        <div>
            <div>
                <FeatureCourse />
                <NewCourses />
                <TopRatedCourses />
                <BestSellingCourses />
                <FreeCourses />
            </div>
        </div>
    );
};

export default AllCourses;