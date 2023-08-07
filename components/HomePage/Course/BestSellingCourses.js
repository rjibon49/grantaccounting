import React from 'react';
import Image from 'next/image';
import star from '../../../public/src/images/icon/star.png';
import starSlash from '../../../public/src/images/icon/starSlash.png';
import watch from '../../../public/src/images/icon/watch.png';
import calender from '../../../public/src/images/icon/calender.png';

import anthony from "../../../public/src/images/course/anthony.png";
import vu from "../../../public/src/images/course/vu.png";
import cfr from "../../../public/src/images/course/cfr1.png";
import indicate from "../../../public/src/images/course/cost1.png";
import salaryAndFringe from "../../../public/src/images/course/salary.png";
import Link from 'next/link';

const BestSellingCourses = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <div className='text-center pb-5'>
                    <h3 className='semiBoldTextXl'>Best Selling Courses</h3>
                    <p className='regularTextDark'>Browse featured courses and become skillfull</p>
                </div>
                {/* <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'>View All</p>
                </div> */}
                <div className='row'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image   src={cfr} alt='Course Image' className='courserImage' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                    <div className=''>
                                        <Link href="/courses/cfr_200"><a><h5 className='semibolTextmd'>2 CFR 200</h5></a></Link>
                                        <p className='regularTextDark' >Anthony Nguyen</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <span>
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center flex-wrap gap-2 '>
                                        <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <Link href="/courses/cfr_200"><a><li className='cartBtn'>Enroll</li></a></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image   src={indicate} alt='Indicate Cost' className='courserImage' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                    <div className=''>
                                        <Link href="/#"><a><h5 className='semibolTextmd'>Indicate Cost</h5></a></Link>
                                        <p className='regularTextDark' >Anthony Nguyen</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <span>
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center flex-wrap gap-2 '>
                                        <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <Link href="/#"><a><li className='cartBtn'>Enroll</li></a></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image   src={salaryAndFringe} alt='salaryAndFringe' className='courserImage' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                    <div className=''>
                                        <Link href="/#"><a><h5 className='semibolTextmd'>Salary and Fringe Benefit - Salary Allocation</h5></a></Link>
                                        <p className='regularTextDark' >Anthony Nguyen</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <span>
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={star} alt='Star' className='mx-1' />
                                        <Image   src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center flex-wrap gap-2 '>
                                        <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <Link href="/#"><a><li className='cartBtn'>Enroll</li></a></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingCourses;