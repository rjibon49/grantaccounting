import Image from 'next/image';
import React from 'react';
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';

import accountsFor from "../../public/src/images/blog/requirmentsForAccounting.png";
import Link from 'next/link';

const RequirmentsForAccounting = () => {
    return (
        <div className='my-5'>
            <div className='mb-5'>
                <Image src={accountsFor} alt='' className='' />
            </div>
            <div className='container'>
                <div>
                    <h2 className='largeBoldText py-4'>Requirements for accounting for grants from the Government.</h2>
                    <p className='semibolTextSmDark'>Grant accounting is crucial in our society. It is concerned with organizing and monitoring grants from governments and institutions. It is the way of recording the monies received by an organization.<br />
Those organizations and government agencies that provide grants have rules and regulations. They must be transparent and systematic, which is a payment condition. Grant accounting often processes and manages Government Grants. These must be managed and accounted for transparently and fully compliant. <br /><br />

Any grant that is not accounted for and organized may be halted or even must be repaid. The grant accountant is heavily responsible for ensuring that the grant is treated correctly.<br />
Best practice in grant accounting demands that grants from the Government should be treated in the following two ways.<br /><br />

1. Capital Approach<br />
The Capital approach is a method that treats external profits and losses by crediting deferred income by crediting it to income that has been deferred in liabilities.<br /><br />

Income Approach<br />
The Income Approach is one where the government grant in the form of income or reduction in government liabilities is recognized in profit or loss over a given period. This is often in the form of credit to other forms of income.<br /><br />

Presentation of grants: <br />
Usually, the entity that receives the subsidy must recognize the costs or expenses involved in the government grant and be presented transparently. Any grant related to depreciable assets is to be accounted for in an entitys profit and loss accounts.<br /><br />

Grants often come as part of a fiscal aid package, and these all have conditions attached to them.<br />
A grant accountant needs to be able to identify the conditions that contribute to the costs and establish which period the grant will be earned.<br /><br />

Grants need to be presented in a specific way.<br />
The grant can be presented as deferred income that is related to profit or loss on a systematic basis for an asset that is useful over its life.<br /><br />

The other significant way of presenting the grant is to deduct from the grant when estimating the carrying amount of a given asset. The grant is then, as a matter of course, shown in the profit and loss throughout the lifetime. It must be categorized as a reduced depreciation expense.</p>


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

export default RequirmentsForAccounting;