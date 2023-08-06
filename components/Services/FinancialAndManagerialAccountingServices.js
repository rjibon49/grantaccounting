import Image from 'next/image';
import React from 'react';
import finalcial from "../../public/src/images/serviceImage/financialAndManagement.png";
import finalcialIcon from "../../public/src/images/serviceIcon/financialAndManagementIcon.png";

const FinancialAndManagerialAccountingServices = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={finalcial} alt='financialAndManagement' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12 centerItem'>
                        <div>
                            <Image src={finalcialIcon} alt='financialAndManagementIcon' className='serviceImage'/>
                            <h3 className='semibolTextLg mb-2'>Financial and Managerial Accounting Services</h3>
                            <li className='semiRegulerTextmd'>-Accounting System Implementation</li>
                            <li className='semiRegulerTextmd'>-Bookkeeping and Accounting</li>
                            <li className='semiRegulerTextmd'>-Preparation of General</li>
                            <li className='semiRegulerTextmd'>-Purpose Financial Statements</li>
                            <li className='semiRegulerTextmd'>-Periodic Reporting</li>
                            <li className='semiRegulerTextmd'>-Costing</li>
                            <li className='semiRegulerTextmd'>-Capital Budgeting</li>
                            <li className='semiRegulerTextmd'>-Performance Management</li>
                            <li className='semiRegulerTextmd'>-Standard Setting and Variance Analysis</li>
                            <li className='semiRegulerTextmd'>-General Ledger Reconciliations</li>
                            <li className='semiRegulerTextmd'>-Preparation of Specific Purpose Financial Statements</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialAndManagerialAccountingServices;