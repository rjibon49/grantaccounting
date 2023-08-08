import Image from 'next/image';
import React from 'react';
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';

import accountsFor from "../../public/src/images/blog/whatDoYouNeed.png";
import Link from 'next/link';

const WhatDoYouNeed = () => {
    return (
        <div className='my-5'>
            <div className='mb-5'>
                <Image   src={accountsFor} alt='' className='' />
            </div>
            <div className='container'>
                <div>
                    <h2 className='largeBoldText py-4'>What do you need to do to be good at grant accounting?</h2>
                    <p className='semibolTextSmDark'>Grant accounting can be a great career. Those who work in grant accounting are helping organizations solve social problems and help those in need in our society. <br />
Concerns express that not all those engaged in grant accounting are sufficiently trained or have the relevant expertise. <br /><br />

<b>Best practice in grant accounting requires the following..</b> <br /><br />

There is a need to stay current with the latest GAAP principles and be aware of any changes related explicitly to the not-for-profit sector and the sending and recording of grants. <br /><br />

There are now many types of accounting software, and they are vital in areas such as tracking, cost management, and the allocation of resources. New software packages are always becoming available, and there is a need to understand these and how to use them in the processing and management of grants. It is necessary to become trained in the latest accounting software. <br /><br />

 Grant accountants must be aware of the organizations resources and financial standing. There is a need to understand the underlying financial health and its performance and, therefore, its ability to achieve its goals. In particular, it is necessary to understand whether an organization can manage a grant and use it as intended. A good grant accountant must be realistic and remind other decision-makers about limitations and potential problems. <br /><br />

Relationships are essential in all types of business. A good grant accountant must have good communication skills and be able to collect data that can help manage costs and financial transactions. Any errors or issues should be flagged as early as possible. A grant accountant needs to be objective and ensure that all transactions are carried out ethically and comply with regulations and laws. <br /><br />

There is a need to be detailed orientated. A good grant account must know all the details, which may involve querying reports and investigating potential issues. Paying attention to details means that any costly errors are not made and that the money received in the grant is used for the intended purposes. <br /><br />

Management of records. The grant accountant must document all the transactions and meet the highest standards by GAAP and the grantee. <br /><br />

Understand the grantee requirements and the policies of the organization and be able to relate them to any financial transactions and processes.</p>


                    <hr className='divider' />

                    <div>
                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                            <li className=''><Image src={user} alt='watch' className='' /> <span className='ms-3'>Leslie Alexander</span> </li>
                            <li className='centerItem'><Image src={msg} alt='Message Icon' className='' /> <span className='ms-3'> 2 </span> </li>
                        </ul>
                    </div>
                    <div className='py-5'>
                        <textarea placeholder="Write here..." id="" className='CommentTextArea' rows="4"></textarea>
                        <div className='pt-4'>
                            <Link href="#"><a className="getStart" >Post</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatDoYouNeed;