/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import cfrL from "../../public/src/images/course/cfr200L.png";
import Image from 'next/image';
import star from '../../public/src/images/icon/star.png';
import starSlash from '../../public/src/images/icon/starSlash.png';
import watch from '../../public/src/images/icon/watch.png';
import Link from 'next/link';
import anthony from "../../public/src/images/course/anthony.png";
import starB from '../../public/src/images/icon/starBlank.png';
import cellPhone from "../../public/src/images/icon/cellPhone.png";
import linkedin from "../../public/src/images/icon/linkedinP.png";
import mailBox from "../../public/src/images/icon/mailBox.png";

const Cfr200 = () => {
    return (
        <div className='mt-5 pb-5'>
            <div className='courseDetailsImage'>
                <Image src={cfrL} alt='2 CFR 200' className='' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-8'>
                            <div className='p-3'>
                                <div className=''>
                                    <div className='pt-3'>
                                       <h5 className='largeBoldText'>2 CFR 200</h5>
                                        <p className='regularTextDark'  > Created By - Anthony Nguyen</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='semibolTextmd pt-5 pb-2'>About this course</h5>
                                    <p className='regularTextDark pb-5'>For organizations that have federal awards, it is very important to be in compliance to rules with the federal government.  We will have a course in helping our members to be in compliance and to assist in answering any questions.  This course on demand and live.  Please reach out to us to start a course for your organization.</p>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center pb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starSlash} alt='Star' className='ms-1 me-4' />
                                            <span className='regulerTextDark'>4.5</span>
                                        </span>
                                        <li className='ms-5 me-3'><Image src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                    </ul>
                                    <Link href="/#"><a><span className='cartBtn'>Enroll</span></a></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-xxl-4 col-xl- col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-4'>
                                <div className='p-5'>
                                    <Image src={anthony} alt='Anthony Nguyen' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Anthony Nguyen</h5>
                                        <p className='regulerTextDark'>CEO / Executive Director</p>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starB} alt='Star' className='mx-1' />
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        {/* <button className='profileBtn'>View Profile</button> */}
                                        <button type="button" className='profileBtn text-center' data-bs-toggle="modal" data-bs-target="#anthony">View Profile</button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="anthony" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <Image src={anthony} alt='Anthony Nguyen' className='' />
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='py-3 ps-3'>
                                            <h5 className='semibolTextmd'>Anthony Nguyen</h5>
                                            <p className='regulerTextDark'>CEO / Executive Director</p>
                                        </div>
                                        <div className="modal-body regularTextDark">
                                        Dung 'Anthony' Nguyen is a CEO and Founder of Grant Accounting . Grant Accounting is a 501(c)3 non-profit is founded in March 2023 in to services for other non-profit organizations. Anthony was awarded a bachelor’s in accounting from California State University, San Bernardino. He is furthering his education and professional acumen by pursuing both a Masters Degree of Human Resource Management, and the Certified Public Accountant accreditation. Anthony worked for the IRS and provide outstanding tax services. He provides non-profit management, budgeting and the lead accountant at Habitat for Humanity of Orange County. On his spare time, he loves to travel with his wife and son.
                                        </div>
                                        <div className='pb-5 pt-3 w-50 d-flex justify-content-around'>
                                            <Link href="tel:(617) 371-7731"><a><Image src={cellPhone} alt='cellPhone' className='' /></a></Link>
                                            <Image src={linkedin} alt='Linedin' className='' />
                                            <Link href="mailto:anguyen@grantaccounting.org"><a><Image src={mailBox} alt='Mail Box' className='' /></a></Link>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cfr200;