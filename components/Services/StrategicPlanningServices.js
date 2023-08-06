import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/serviceImage/strategicPlanningServices.png";
import wrIcon from "../../public/src/images/serviceIcon/strategicPlanningServicesIcon.png";

const StrategicPlanningServices = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={writing} alt='grant Writing' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12 centerItem'>
                        <div>
                            <Image src={wrIcon} alt='grant Writing icon' className='serviceImage'/>
                            <h3 className='semibolTextLg mb-2'>Strategic Planning Services</h3>
                            <li className='semiRegulerTextmd'>-Development of Vision and Mission</li>
                            <li className='semiRegulerTextmd'>-Environmental Scanning</li>
                            <li className='semiRegulerTextmd'>-Goal Setting Strategy Formulation </li>
                            <li className='semiRegulerTextmd'>-Strategy Implementation </li>
                            <li className='semiRegulerTextmd'>-Development of Strategic Management Plans </li>
                            <li className='semiRegulerTextmd'>-KPIs Development</li>
                            <li className='semiRegulerTextmd'>-Market and Growth Analyses</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicPlanningServices;