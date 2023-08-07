import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/serviceImage/financialConsulting.png";
import wrIcon from "../../public/src/images/serviceIcon/financialConsultingIcon.png";

const FinalcialConsulting = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image   src={writing} alt='grant Writing' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12 centerItem'>
                        <div>
                            <Image   src={wrIcon} alt='grant Writing icon' className='serviceImage'/>
                            <h3 className='semibolTextLg mb-2'>Financial Consulting</h3>
                            <li className='semiRegulerTextmd'>-Financial Modelling, Financial </li>
                            <li className='semiRegulerTextmd'>-Planning and Forecasting </li>
                            <li className='semiRegulerTextmd'>-Feasibility Studies </li>
                            <li className='semiRegulerTextmd'>-Budgeting Decisions </li>
                            <li className='semiRegulerTextmd'>-Capital and Cost Structure Advisory</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalcialConsulting;




