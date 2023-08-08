import Image from 'next/image';
import React from 'react';
import startR from "../../public/src/images/icon/startRound.png";
import dia from "../../public/src/images/icon/diamond.png";

const SubscribeNow = () => {
    return (
        <div className='subsBg'>
            <div className='py-5'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Subscribe Now</h3>
                    <p className='regularTextDark'>Select a subscription plan and save money.</p>
                </div>
                <div className='container'>
                    <div className='pt-5 d-flex flex-wrap justify-content-evenly gap-5'>
                        <div className=''>
                            <div className='subsBody ms-auto'>
                                <div className='pt-5 text-center'>
                                    <Image   src={startR} alt='Start Round' className='' />
                                    <h4 className='semibolTextLg py-5'>Basic</h4>
                                </div>
                                <div className='subsInfo'>
                                    <li>Forever subscription access</li>
                                    <li>Limited course Access</li>
                                    <li>Unlimited device Login Access</li>
                                </div>
                                <div className='pb-5 text-center'>
                                    <h4 className='semibolTextLg py-5'>Free</h4>
                                    <button className='subsBtn'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='subsBody me-auto'>
                                <div className='pt-5 text-center'>
                                    <Image   src={dia} alt='Start Round' className='' />
                                    <h4 className='semibolTextLg py-5'>Platinum</h4>
                                </div>
                                <div className='subsInfo'>
                                    <li>Annual subscription</li>
                                    <li>Only Premium courses Access</li>
                                    <li>2 device Login Access</li>
                                </div>
                                <div className='pb-5 text-center'>
                                    <h4 className='semibolTextLg py-5'>Donation</h4>
                                    <button className='subsBtn'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNow;