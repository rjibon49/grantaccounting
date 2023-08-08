import React from 'react';
import Image from 'next/image';
import anonymous from "../../public/src/images/course/anonymous.png";
import persion6 from "../../public/src/images/course/persion6.png";
import persion7 from "../../public/src/images/course/persion7.png";
import person8 from "../../public/src/images/course/person8.png";
import star from '../../public/src/images/icon/star.png';
import starB from '../../public/src/images/icon/starBlank.png';

import { Autoplay, Navigation, Pagination } from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <div className='py-5 subsBg'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Testimonials</h3>
                    <p className='regularTextDark'>What our customer say about us</p>
                </div>
                {/* <div className='text-end me-5   mb-3'>
                    <p className='viewBtn'>View All</p>
                </div> */}
                <div className='sliderbg'>
                    <div className="sliderItem">
                        <Swiper
                            slidesPerView={3}
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
                                320: {
                                    slidesPerView: 1,
                                },
                                420: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="mySwiper pt-5"
                            >
                            <SwiperSlide>
                                <div className='testimonialBody'>
                                    <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-3 tcustomPadding'>
                                        <div className=''>
                                            <div className='testifonialTitle'>
                                                <Image src={anonymous} alt='anonymous' className='' />
                                                <div className=''>
                                                    <h5 className='semibolTextmd'>Jerome Bell</h5>
                                                    <p className='regularTextDark'>Student</p>
                                                    <div>
                                                        <span className=''>
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='regulerTextDark'>Anthony N. was outstanding in presenting the accounting aspect for non-profit. Looking forward to more advanced course in accounting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialBody'>
                                    <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-3 tcustomPadding'>
                                        <div className=''>
                                            <div className='testifonialTitle'>
                                                <Image   src={persion6} alt='Women' className='' />
                                                <div className=''>
                                                    <h5 className='semibolTextmd'>Bessie Cooper</h5>
                                                    <p className='regularTextDark'>Student</p>
                                                    <div>
                                                        <span className=''>
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={starB} alt='Star' className='mx-1' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='regulerTextDark'>Project Oasis Charity - we value the course on Board selection. Very helpful for us to identify industry expert in medicine.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialBody'>
                                    <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-3 tcustomPadding'>
                                        <div className=''>
                                            <div className='testifonialTitle'>
                                                <Image   src={persion7} alt='Devon Lane' className='' />
                                                <div className=''>
                                                    <h5 className='semibolTextmd'>Devon Lane</h5>
                                                    <p className='regularTextDark'>Student</p>
                                                    <div>
                                                        <span className=''>
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={starB} alt='Star' className='mx-1' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='regulerTextDark'>Fundraising has been our difficulty with out startup non-profit - the course and guidance from Anthony with fundraising is amazing. We look forward to more courses on Fundraising.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialBody'>
                                    <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-3 tcustomPadding'>
                                        <div className=''>
                                            <div className='testifonialTitle'>
                                                <Image   src={person8} alt='Devon Lane' className='' />
                                                <div className=''>
                                                    <h5 className='semibolTextmd'>Kathryn Murphy</h5>
                                                    <p className='regularTextDark'>Student</p>
                                                    <div>
                                                        <span className=''>
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={starB} alt='Star' className='mx-1' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='regulerTextDark'>The 1-1 mentorship with 2 CFR 200 and compliance was key in our Single Audit. Thanks Nadia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='testimonialBody'>
                                    <div className='p-xxl-5 p-xl-5 p-lg-5 p-md-3 tcustomPadding'>
                                        <div className=''>
                                            <div className='testifonialTitle'>
                                                <Image   src={anonymous} alt='anonymous' className='' />
                                                <div className=''>
                                                    <h5 className='semibolTextmd'>Esther Howard</h5>
                                                    <p className='regularTextDark'>Student</p>
                                                    <div>
                                                        <span className=''>
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={star} alt='Star' className='mx-1' />
                                                            <Image   src={starB} alt='Star' className='mx-1' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='regulerTextDark'>Our operation is in align and strategically help from Vu Nguyen with his course on Non-Profit Management.</p>
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

export default Testimonials;