import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/serviceImage/dataAnalysisServices.png";
import wrIcon from "../../public/src/images/serviceIcon/dataAnalysisServicesIcon.png";

const DataAnalysisServices = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={writing} alt='Data Analysis Services' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12 centerItem'>
                        <div>
                            <Image src={wrIcon} alt='Data Analysis Services' className='serviceImage'/>
                            <h3 className='semibolTextLg mb-2'>Data Analysis Services</h3>
                            <li className='semiRegulerTextmd'>-Excel Data Analysis & Reports</li>
                            <li className='semiRegulerTextmd'>-Google Spreadsheets Data Analysis & Reports</li>
                            <li className='semiRegulerTextmd'>-Power BI Data Analysis & Reportst</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysisServices;
 





