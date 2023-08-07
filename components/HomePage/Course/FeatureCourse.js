import React from 'react';
import Image from 'next/image';
import star from '../../../public/src/images/icon/star.png';
import starSlash from '../../../public/src/images/icon/starSlash.png';
import watch from '../../../public/src/images/icon/watch.png';
import calender from '../../../public/src/images/icon/calender.png';
import anthony from "../../../public/src/images/course/anthony.png";
import cfr from "../../../public/src/images/course/2cfr200.png";
import indicate from "../../../public/src/images/course/indicateCost.png";
import salaryAndFringe from "../../../public/src/images/course/salaryAndFringe.png";

import { Autoplay, Navigation, Pagination } from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

const FeatureCourse = () => {
    return (
        <div className='mb-5'>
            <div className='container'>
                <div className='text-center pb-5'>
                    <h3 className='semiBoldTextXl'>Featured Course</h3>
                    <p className='regularTextDark'>Browse featured courses and become skillfull</p>
                </div>

                
                <div className='sliderbg'>
                    <div className="sliderItem">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            // loop={true}
                            autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                            }}
                        pagination={{
                        clickable: true,
                        }}
                            // breakpoints={{
                            //     640: {
                            //         slidesPerView: 1,
                            //         spaceBetween: 20,
                            //     },
                            //     768: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 40,
                            //     },
                            //     1024: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 20,
                            //     },
                            //     1440: {
                            //         slidesPerView: 3,
                            //         spaceBetween: 20,
                            //     },
                            // }}
                            // modules={[ Autoplay, Navigation, Pagination]}
                            className="mySwiper"
                            >
                            <SwiperSlide>
                                <div className='row'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div className='mx-auto'>
                                            <Image src={cfr} alt='2 CFR 200' className='' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div className='featureBody'>
                                            <div className='fCourse'>
                                                <div className='p-4'>
                                                    <div className='courseTitle'>
                                                        <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                                        <div className=''>
                                                            <Link href="/courses/cfr_200"><a><h5 className='semibolTextmd'>2 CFR 200</h5></a></Link>
                                                            <p className='regularTextDark' >Anthony Nguyen</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className='regularTextDark'>For organizations that have federal awards, it is very important to be in compliance to rules with the federal government. We will have a course in helping our members to be in compliance and to assist in answering any questions. This course on demand and live. Please reach out to us to start a course for your organization.</p>
                                                    </div>
                                                    <div className='d-flex gap-3'>
                                                        <span className=''>
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
                                                            <li className='me-3'><Image   src={watch} alt='watch' className='' /> 2:50 Hours </li>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='row'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div className='mx-auto'>
                                            <Image   src={indicate} alt='Indicate Cost' className='' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div className='featureBody'>
                                            <div className='fCourse'>
                                                <div className='p-4'>
                                                    <div className='courseTitle'>
                                                        <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                                        <div className=''>
                                                            <Link href="/#"><a><h5 className='semibolTextmd'>Indicate Cost</h5></a></Link>
                                                            <p className='regularTextDark' >Anthony Nguyen</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className='regularTextDark'>Understanding indirect cost can help organization with obtaining cost that helps. Most organization uses the 10% De Minimis Rate or we can go in depth with 2 CFR 200.403.</p>
                                                    </div>
                                                    <div className='d-flex gap-3'>
                                                        <span className=''>
                                                            <Image src={star} alt='Star' className='mx-1' />
                                                            <Image src={star} alt='Star' className='mx-1' />
                                                            <Image src={star} alt='Star' className='mx-1' />
                                                            <Image src={star} alt='Star' className='mx-1' />
                                                            <Image src={starSlash} alt='Star' className='ms-1 me-4' />
                                                        </span>
                                                        <span className='regulerTextDark'>4.5</span>
                                                    </div>
                                                    <div>
                                                        <ul className='d-flex justify-content-start p-0 mt-2 align-items-center flex-wrap gap-2 '>
                                                            <li className='me-3'><Image   src={watch} alt='watch' className='' /> 2:50 Hours </li>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='row'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div>
                                            <Image   src={salaryAndFringe} alt='Indicate Cost' className='' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem'>
                                        <div className='featureBody'>
                                            <div className='fCourse'>
                                                <div className='p-4'>
                                                    <div className='courseTitle'>
                                                        <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                                        <div className=''>
                                                            <Link href="/#"><a><h5 className='semibolTextmd'>Salary and Fringe Benefit - Salary Allocation</h5></a></Link>
                                                            <p className='regularTextDark' >Anthony Nguyen</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className='regularTextDark'>A big expense of running the program are labor charges. Understanding how to calculate fringe benefit percentage and being in compliance with your budget for this line item is very important. This is our number one course. Please reach out to schedule this course immediately.</p>
                                                    </div>
                                                    <div className='d-flex gap-3'>
                                                        <span className=''>
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
                                                            <li className='me-3'><Image   src={watch} alt='watch' className='' /> 2:50 Hours </li>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FeatureCourse;