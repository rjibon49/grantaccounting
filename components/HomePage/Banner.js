import React from 'react';
import manHand from "../../public/src/images/demo/manHandTyping.png";
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='container mt-5'>
            <div className='row bannerBg'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem '>
                    <div className='itemCenter'>
                        <div className=''>
                            <h1 className='title'>Automate grant billing through technology</h1>
                            <p className='regularText bannerRegular pt-4'>With our expert coders we can automate and customize reporting (especially timesheet) to different funders.</p>
                            <div className='pt-5 text-center'>
                                <Link href="/register"><a className="getStart">Get Started</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block d-xl-block d-xxl-block p-0'>
                    <div className='mt-1'>
                        <Image src={manHand} alt='Man hand typing Keyboard' className='bannerKeyboard' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;