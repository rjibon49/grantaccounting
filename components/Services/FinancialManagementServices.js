import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/serviceImage/financialManagementSystem.png";
import wrIcon from "../../public/src/images/serviceIcon/financialManagementSystemIcon.png";

const FinancialManagementServices = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image   src={writing} alt='Financial Management Services' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12 centerItem'>
                        <div>
                            <Image   src={wrIcon} alt='grant Writing icon' className='serviceImage'/>
                            <h3 className='semibolTextLg mb-2'>Financial Management Services</h3>
                            <li className='semiRegulerTextmd'>-Business Process Analysis</li>
                            <li className='semiRegulerTextmd'>-Forecasting and Budgeting</li>
                            <li className='semiRegulerTextmd'>-Funds Management</li>
                            <li className='semiRegulerTextmd'>-Financial Strategic Planning</li>
                            <li className='semiRegulerTextmd'>-Process improvement using Lean/Six Sigma methodology</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialManagementServices;
 



