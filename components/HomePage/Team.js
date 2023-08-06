/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import star from '../../public/src/images/icon/star.png';
import starB from '../../public/src/images/icon/starBlank.png';
import anthony from "../../public/src/images/course/anthony.png";
import nadia from "../../public/src/images/course/nadia.png";
import vu from "../../public/src/images/course/vu.png";

import cellPhone from "../../public/src/images/icon/cellPhone.png";
import linkedin from "../../public/src/images/icon/linkedinP.png";
import mailBox from "../../public/src/images/icon/mailBox.png";
import Link from 'next/link';

const Team = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div>
                    <h3 className='semiBoldTextXl'>Our Team</h3>
                    <p className='regulerTextDark'>Learn From our experienced instructors</p>
                </div>
                <div>
                    <div className='row pt-5'>
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
                        <div className='col-xxl-4 col-xl- col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-4'>
                                <div className='p-5'>
                                    <Image src={nadia} alt='Nadia Stanizai' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Nadia Stanizai</h5>
                                        <p className='regulerTextDark'>Chief of Program and Complian</p>
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
                                        <button type="button" className='profileBtn text-center' data-bs-toggle="modal" data-bs-target="#nadia">View Profile</button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="nadia" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <Image src={nadia} alt='Nadia Stanizai' className='' />
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='py-3 ps-3'>
                                            <h5 className='semibolTextmd'>Nadia Stanizai</h5>
                                            <p className='regulerTextDark'>Chief of Program and Complian</p>
                                        </div>
                                        <div className="modal-body regularTextDark">
                                        Nadia has been in the nonprofit industry for almost a decade, working several positions with some of the most notable nonprofits in the Bay Area. She has spent most of her career on the administrative side, making process improvements, providing budget analysis, and compliance for various Directors and C-suite level roles. Nadia wants to bring her passion and expertise to a new level by creating the environment where she can share her knowledge with a wide variety of new clients. With 10+ years of experience, looking forward to helping non-profit achieve their mission.
                                        </div>
                                        <div className='pb-5 pt-3 w-50 d-flex justify-content-around'>
                                            <Link href="tel:(617) 371-7731"><a><Image src={cellPhone} alt='cellPhone' className='' /></a></Link>
                                            <Image src={linkedin} alt='Linedin' className='' />
                                            <Link href="mailto:nadia@grantaccounting.org"><a><Image src={mailBox} alt='Mail Box' className='' /></a></Link>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-4 col-xl- col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-4'>
                                <div className='p-5'>
                                    <Image src={vu} alt='Vu Nguyen' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Vu Nguyen</h5>
                                        <p className='regulerTextDark'>Chief Operating Officer</p>
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
                                        <button type="button" className='profileBtn text-center' data-bs-toggle="modal" data-bs-target="#vunguyen">View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="vunguyen" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <Image src={vu} alt='Vu Nguyen' className='' />
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='py-3 ps-3'>
                                            <h5 className='semibolTextmd'>Vu Nguyen</h5>
                                            <p className='regulerTextDark'>Chief Operating Officer</p>
                                        </div>
                                        <div className="modal-body regularTextDark">Vu has been in youth ministry for his church for over 10 years and has been pivotal in many youth orgnaizations he served. His operation background with youth will expand further with our organization. His commitment to quality of service is smooth and efficient within this organization, contacting clientele, securing contract agreements between our workers to our patrons, and of course giving the best quality of service possible overall. Volunteering through multiple non profit organizations with a focus on AAPI owned businesses and four years of studying Criminal Justice at University of Massachusetts, Lowell; and acquiring experience through law firms with the U.S Attorney's Office, based in Boston, I aim to ensure each client leaves more than satisfactory once we deliver their results.</div>
                                        <div className='pb-5 pt-3 w-50 d-flex justify-content-around'>
                                            <Link href="tel:(617) 371-7731"><a><Image src={cellPhone} alt='cellPhone' className='' /></a></Link>
                                            <Image src={linkedin} alt='Linedin' className='' />
                                            <Link href="mailto:vunguyen@grantaccounting.org"><a><Image src={mailBox} alt='Mail Box' className='' /></a></Link>
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
    );
};

export default Team;