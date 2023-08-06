import Image from 'next/image';
import React from 'react';
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';

import accountsFor from "../../public/src/images/blog/whyIsGrantAccounting.png";
import Link from 'next/link';

const WhyIsgrantAccounting = () => {
    return (
        <div className='my-5'>
            <div className='mb-5'>
                <Image src={accountsFor} alt='' className='' />
            </div>
            <div className='container'>
                <div>
                    <h2 className='largeBoldText py-4'>Why is grant accounting important?</h2>
                    <p className='semibolTextSmDark'>Grant accounting is crucial in our society. It is concerned with organizing and monitoring grants from governments and institutions. It is the way of recording the monies received by an organization. <br />
Those organizations and government agencies that provide grants have rules and regulations. They must be complied with, which is a payment condition. Any grant that is not accounted for and organized may be halted or even have to be repaid.<br /><br />

Grant accounting involves treating a grant as income; every cost and how it is spent must be shown. Grant accounting also ensures that any monies provided are spent and used in ways that meet Federal and State standards. Grant accounting means that a grantee is transparent on how they spent the grant.<br /><br />

The nature of a grant means that any grantee must ensure trust and maintain confidence. Therefore, grant accounting is needed. Every financial transaction needs to be shown and tracked. The grant accountant must be able to document how the money has been spent and any associated costs.<br /><br />

Grant accounting shows that regulations are being observed, for example, on the nature of expense reporting standards and the timing of expenses. Proper grant accounting involves specialist knowledge and expertise to prepare the correct reports, documentation and ensure compliance with rules and regulations.
<br /><br />
Grant accounting is similar to other forms of accounting. However, it is different in that there is a need for some experience in grants. Those responsible for grant accounting have to engage in best practices to ensure that all monies are efficiently spent and that the goals of the grantor and the grantee are achieved. Grant accounting means looking after the best interests of both the organizations giving the grant and spending the grant.<br /><br />

Non-profits, charities, and social enterprises are crucial in our society. They do so much good. Many of them are reliant on grants. This is why grant accounting is so important. Grant accounting ensures that grants are used in the best way. An organization in the non-profit sector needs to engage in grant accounting, or they will not qualify for grants or even face the risk of losing existing ones. Grantees will want to see financial records for their internal controls as part of their grant.
Without grant accounting, many worthy organizations could not operate and help those in America most in need.</p>


                    <hr className='divider' />

                    <div>
                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                            <li className=''><Image src={user} alt='watch' className='me-3' /> Leslie Alexander </li>
                            <li className=''><Image src={msg} alt='watch' className='me-3' /> 2 </li>
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

export default WhyIsgrantAccounting;