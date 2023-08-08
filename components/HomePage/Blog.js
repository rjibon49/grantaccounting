import React from 'react';
import Image from 'next/image';
import blog2 from "../../public/src/images/demo/requirements.png";
import blog3 from "../../public/src/images/demo/whatDo.png";
import blog1 from "../../public/src/images/demo/accounting.png";
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Blog</h3>
                    <p className='regularTextDark'>Explore our blog section and get update latest news</p>
                </div>
                <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'><Link href="/blog" className='viewBtn'><a>View All</a></Link></p>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div className='text-center'>
                                    <Image src={blog1} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <Link href="/blog/accounting_for_goverment_grants"><a><h5 className='semibolTextmd'>Accounting for Government Grants</h5></a></Link>
                                    <p className='regularTextDark'>Grant accounting often processes and manages Government Grants. These must be managed and accounted for transparently and fully compliant with rules and regulations. <br /> A government grant is assistance in the form of finance the government offers...<Link href="/blog/accounting_for_goverment_grants"><a><span className='regularTextOrange'>Read More</span></a></Link></p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className=''><Image src={user} alt='watch' className='' /> <span className='ms-3'>Leslie Alexander</span> </li>
                                            <li className='centerItem'><Image src={msg} alt='Message Icon' className='' /> <span className='ms-3'> 2 </span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div className='text-center'>
                                    <Image   src={blog2} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <Link href="/blog/requirements_for_accounting"><h5 className='semibolTextmd'><a>Requirements for accounting for grants from the Government.</a></h5></Link>
                                    <p className='regularTextDark'>Grant accounting is crucial in our society. It is concerned with organizing and monitoring grants from governments and institutions. It is the way of recording the monies received by an organization....<Link href="/blog/requirements_for_accounting"><a><span className='regularTextOrange'>Read More</span></a></Link></p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className='centerItem'><Image src={user} alt='watch' className='' /> <span className='ms-3'>Devon Lane</span> </li>
                                            <li className='centerItem'><Image src={msg} alt='Message Icon' className='' /> <span className='ms-3'> 2 </span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div className='text-center'>
                                    <Image   src={blog3} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <Link href="/blog/what_do_you_need_to_do"><h5 className='semibolTextmd'><a>What do you need to do to be good at grant accounting?</a></h5></Link>
                                    <p className='regularTextDark'>Grant accounting can be a great career. Those who work in grant accounting are helping organizations solve social problems and help those in need in our society.....<Link href="/blog/what_do_you_need_to_do"><a><span className='regularTextOrange'>Read More</span></a></Link></p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className='centerItem'><Image src={user} alt='watch' className='' /> <span className='ms-3'>Devon Lane</span> </li>
                                            <li className='centerItem'><Image src={msg} alt='Message Icon' className='' /> <span className='ms-3'> 2 </span> </li>
                                        </ul>
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

export default Blog;