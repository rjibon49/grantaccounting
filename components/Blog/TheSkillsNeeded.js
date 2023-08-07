import Image from 'next/image';
import React from 'react';
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';

import accountsFor from "../../public/src/images/blog/theSkillsNeeded.png";
import Link from 'next/link';

const TheSkillsNeeded = () => {
    return (
        <div className='my-5'>
            <div className='mb-5'>
                <Image   src={accountsFor} alt='' className='' />
            </div>
            <div className='container'>
                <div>
                    <h2 className='largeBoldText py-4'>The skills needed for Grant Accounting</h2>
                    <p className='semibolTextSmDark'>Accounting is a varied and diverse profession. Many accountants specialize in one specific area. One of the most exciting of these is grant accounting. <br />
 This is managing the financial transactions and costs involved in a grants processing and spending. It is crucial in the not-for-profit sector and contributes to providing many critical services to people experiencing poverty and the deserving. <br /><br />

Grant accounting is similar to others in many ways, but there is a greater emphasis on the following. The skills listed below are needed for effective and successful grant accounting. <br />
An essential skill in grant accounting is the ability to analyze financial transactions to track all sources of income and expenditures. <br /><br />

Other essential skills are developing realistic financial plans and an appropriate budget. Cost control is another vital skill for grant accounting; any cost involved in a grant must be recorded and justified. An essential skill for grant accounting is that any costs and spending is compliant with regulations and that they also comply with the rules and requirements of the grantee. The grant accountant must be able to ensure that costs are minimized and that as much of the grant as possible is spent on those or where it is intended. <br /><br />

Financial performance is essential for any organization using a grant to provide service or solve problems. Financial modeling is another skill a grant accountant needs, which can support decision-making at the leadership level. <br /><br />

The grantee will usually demand that any money provided is spent optimally. This is why variance analysis is so critical. A grant account can help discover the actual performance of the grant money and its expected performance. There is a need to understand any variance to ensure the grant is spent in ways the grantee prescribes. <br /><br />

Other skills that are needed are a good understanding of GAAP. Cost management and accounting are essential for grant accounting. Costs must be minimal, and as much of the grant as possible must target the problem or those in need. Cost management is an essential requirement of grant accounting.<br />
A good knowledge of the law is also necessary, and a good grant accountant needs to be aware of the Sarbanes-Oxley Act (SOX), for example. Additionally, for federal grants – one must understand 2 CFR 200. Grant accounting also requires good auditing and financial reporting skills.</p>


                    <hr className='divider' />

                    <div>
                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                            <li className=''><Image   src={user} alt='watch' className='me-3' /> Leslie Alexander </li>
                            <li className=''><Image   src={msg} alt='watch' className='me-3' /> 2 </li>
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

export default TheSkillsNeeded;