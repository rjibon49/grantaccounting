import React from 'react';
import Image from 'next/image';
import logoLight from '../public/src/images/logoLight.png';
import fb from '../public/src/images/icon/facebook.png';
import insta from '../public/src/images/icon/instagram.png';
import twitter from '../public/src/images/icon/twitter.png';


const Footer = () => {
    return (
        <>
            <div className='joinBg container-fluid'>
                <div className='container'>
                    <div className='row joinBodyBg'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 my-3 '>
                            <div className='joinContent'>
                                <h3 className='semibolTextLgLight'>Join With Us</h3>
                                <p className='semiRegulerTextmd'>Join us to get all the updates and best deals via email</p>
                            </div>
                        </div>
                        <div className='col-xxl-8 col-xl-8 col-lg-8 my-3'>
                            <span className='joinSearch'>
                                <input type="text" placeholder='Enter Your E-mail' className='joinSearchInput semibolTextmd' />
                                <button className='joinBtn'>Join Us</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerBg '>
                <div className='container pt-5'>
                    <div className='row py-5'>
                        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 centerItem'>
                            <div className='footerLogo'>
                                <div>
                                    <Image src={logoLight} className='' alt='GA Logo Light' />
                                </div>
                                <div className='mt-3'>
                                    <span className='me-2'><Image src={insta} className='' alt='Instagram Icon' /></span>
                                    <span className='me-2'><Image src={twitter} className='' alt='Twitter Icon' /></span>
                                    <span className='me-2'><Image src={fb} className='' alt='Facebopok Icon' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 mx-auto'>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight'>Our Service</p>
                                    <li className='semibolTextSmLight mb-3'>Features Course</li>
                                    <li className='semibolTextSmLight mb-3'>Free Course</li>
                                    <li className='semibolTextSmLight mb-3'>Best Selling Course</li>
                                    <li className='semibolTextSmLight mb-3'>Top Rated Course</li>
                                    <li className='semibolTextSmLight mb-3'>Newest Course</li>
                                </div>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight mb-3'>Company</p>
                                    <li className='semibolTextSmLight mb-3'>About us</li>
                                    <li className='semibolTextSmLight mb-3'>Contact</li>
                                    <li className='semibolTextSmLight mb-3'>Career</li>
                                    <li className='semibolTextSmLight mb-3'>Donate</li>
                                    <li className='semibolTextSmLight mb-3'>Volunteer</li>
                                </div>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight mb-3'>Resources</p>
                                    <li className='semibolTextSmLight mb-3'>Blog</li>
                                    <li className='semibolTextSmLight mb-3'>Help & Support</li>
                                    <li className='semibolTextSmLight mb-3'>FAQ</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footerText'>
                        <p className='semibolTextSmLight '>For quick responses please contact Anthony Nguyen: email: anguyen@grantaccounting.org , phone: (617) 371-7731. <br /> All services are guarantee discount or free of charge. We solve problems and bring solutions to all difficult grants.</p>
                    </div>
                </div>
            </div>
            <div className='footerBottomBg py-xxl-5 py-xl-5 py-lg-4 py-md-4'>
                <div className='container'>
                    <div className='d-flex flex-wrap justify-content-md-center justify-content-lg-between justify-content-center'>
                        <div className='d-flex align-items-center'>
                            <p className='semibolTextSmLight mb-0'>Copyright @2023. All Right Reserved</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <li className='semibolTextSmLight'>Terms and conditions</li>
                            <li className='semibolTextSmLight mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-5 mx'>|</li>
                            <li className='semibolTextSmLight'>Privacy and policy</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;