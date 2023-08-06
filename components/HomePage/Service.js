import React from 'react';
import acc from "../../public/src/images/icon/accountLight.png";
import st from "../../public/src/images/icon/strategyLight.png";
import pen from "../../public/src/images/icon/penLight.png";
import analytic from "../../public/src/images/icon/analytic.png";
import business from "../../public/src/images/icon/business.png";
import advice from "../../public/src/images/icon/advice.png";
import finance from "../../public/src/images/icon/finance.png";
import dataAna from "../../public/src/images/icon/dataAna.png";
import implementation from "../../public/src/images/icon/implementation.png";
import Image from 'next/image';

import { Autoplay, Navigation} from 'swiper';

// import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';

const Service = () => {
    return (
        <div className=''>
            <div className='container py-5'>
                <div className='text-center mb-5'>
                    <h3 className='semiBoldTextXl'>Service</h3>
                    <p className='regularTextDark'>Browse all of our services</p>
                </div>

                <div className='sliderbg'>
                    <div className="sliderItem">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            loop={true}
                            autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}
                        // pagination={{
                        // clickable: true,
                        // }}
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
                            modules={[Autoplay, Navigation]}
                            className="mySwiper py-5"
                            >
                            <SwiperSlide>
                                <Link href="/services/grant_writing_service"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={pen} alt='Grant Writing Services' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Grant Writing Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/financial_and_managerial_accounting_services"><a>
                                    <div className='serviceBody serviceBodyItem p-4 '>
                                        <Image src={acc} alt='Financial and Managerial Accounting Services' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Financial and Managerial Accounting Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/strategic_planning_services"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={st} alt='Strategic Planning Services' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Strategic Planning Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/strategic_business_unit"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={analytic} alt='analytic' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Strategic Business Unit (SBU) Planning & Business Management</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/business_valuation_services"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={business} alt='business' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Business Valuation Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/finalcial_consulting"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={advice} alt='advice' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Financial Consulting</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/finalcial_management_services"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={finance} alt='finance' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Financial Management Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/data_analysis_services"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={dataAna} alt='dataAna' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Data Analysis Services</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link href="/services/implementation_of_new_account_system"><a>
                                    <div className='serviceBody serviceBodyItem p-4'>
                                        <Image src={implementation} alt='implementation' className='' />
                                        <h4 className='regularTextLgDarkBold pt-5 text-center'>Implementation of new accounting system (QB, Lawson, MIP, FE, or others)</h4>
                                    </div>
                                </a></Link>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;