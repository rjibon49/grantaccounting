import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import star from '../../../public/src/images/icon/star.png';
import starSlash from '../../../public/src/images/icon/starSlash.png';
import watch from '../../../public/src/images/icon/watch.png';
import calender from '../../../public/src/images/icon/calender.png';

import anthony from "../../../public/src/images/course/anthony.png";
import reviewCharity from "../../../public/src/images/course/reviewCharity.png";
import nonProfit from "../../../public/src/images/course/nonProfit.png";
import selecting from "../../../public/src/images/course/selecting.png";
import financialReporting from "../../../public/src/images/course/financialReporting.png";
import productive from "../../../public/src/images/course/productive.png";


import { Autoplay, Navigation, Pagination } from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

const FreeCourses = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Free Courses</h3>
                    <p className='regularTextDark'>Browse featured courses and become skillfull</p>
                </div>
                {/* <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'>View All</p>
                </div> */}
                <div className='sliderbg'>
                    <div className="sliderItem">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                        pagination={{
                        clickable: true,
                        }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="mySwiper py-5"
                            >
                            <SwiperSlide>
                                <div className='courseBg'>
                                    <div className=''>
                                        <div>
                                            <Image   src={reviewCharity} alt='Course Image' className='courserImage' />
                                        </div>
                                    </div>
                                    <div className='p-3'>
                                        <div className='courseTitle'>
                                            <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                            <div className=''>
                                                <Link href="/#"><a><h5 className='semibolTextmd'>Review Charity Navigator rating</h5></a></Link>
                                                <p className='regularTextDark' >Anthony Nguyen</p>
                                            </div>
                                        </div>
                                        <div>
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
                                                <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                                <li className='me-3'> | </li>
                                                <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                                <Link href="/#"><li className='cartBtn'><a>Free</a></li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='courseBg'>
                                    <div className=''>
                                        <div>
                                            <Image   src={nonProfit} alt='Course Image' className='courserImage' />
                                        </div>
                                    </div>
                                    <div className='p-3'>
                                        <div className='courseTitle'>
                                            <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                            <div className=''>
                                                <Link href="/#"><a><h5 className='semibolTextmd'>How to form a non-profit</h5></a></Link>
                                                <p className='regularTextDark' >Anthony Nguyen</p>
                                            </div>
                                        </div>
                                        <div>
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
                                                <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                                <li className='me-3'> | </li>
                                                <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                                <Link href="/#"><li className='cartBtn'><a>Free</a></li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='courseBg'>
                                    <div className=''>
                                        <div>
                                            <Image   src={selecting} alt='Course Image' className='courserImage' />
                                        </div>
                                    </div>
                                    <div className='p-3'>
                                        <div className='courseTitle'>
                                            <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                            <div className=''>
                                                <Link href="/#"><a><h5 className='semibolTextmd'>Selecting Board members</h5></a></Link>
                                                <p className='regularTextDark' >Anthony Nguyen</p>
                                            </div>
                                        </div>
                                        <div>
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
                                                <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                                <li className='me-3'> | </li>
                                                <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                                <Link href="/#"><li className='cartBtn'><a>Free</a></li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='courseBg'>
                                    <div className=''>
                                        <div>
                                            <Image   src={financialReporting} alt='Course Image' className='courserImage' />
                                        </div>
                                    </div>
                                    <div className='p-3'>
                                        <div className='courseTitle'>
                                            <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                            <div className=''>
                                                <Link href="/#"><a><h5 className='semibolTextmd'>Financial Reporting</h5></a></Link>
                                                <p className='regularTextDark' >Anthony Nguyen</p>
                                            </div>
                                        </div>
                                        <div>
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
                                                <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                                <li className='me-3'> | </li>
                                                <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                                <Link href="/#"><li className='cartBtn'><a>Free</a></li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='courseBg'>
                                    <div className=''>
                                        <div>
                                            <Image   src={productive} alt='Course Image' className='courserImage' />
                                        </div>
                                    </div>
                                    <div className='p-3'>
                                        <div className='courseTitle'>
                                            <Image   src={anthony} alt='Anthony Nguyen' className='instructorImage' />
                                            <div className=''>
                                                <Link href="/#"><a><h5 className='semibolTextmd'>How to have a productive meeting</h5></a></Link>
                                                <p className='regularTextDark' >Anthony Nguyen</p>
                                            </div>
                                        </div>
                                        <div>
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
                                                <li className='me-3'><Image   src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                                <li className='me-3'> | </li>
                                                <li className='me-3'><Image   src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                                <Link href="/#"><li className='cartBtn'><a>Free</a></li></Link>
                                            </ul>
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

export default FreeCourses;