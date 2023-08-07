import Image from 'next/image';
import React from 'react';
import business from "../..//public/src/images/demo/businessMan.png";

const AboutUs = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 centerItem'>
                        <div className=''>
                            <Image   src={business} alt='Business Man' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-xxl-5 ps-xl-5 centerItem'>
                        <div className='ps-xxl-5'>
                            <div className='ps-xxl-5 ps-lg-5 ps-md-5'>
                                <h3 className='semiBoldTextXl mb-4 '>About Us</h3>
                                <p className='regularTextDark mb-4'>Grant Accounting is a 501c3 non-profit is founded in March 2023 in to services for other non-profit organizations.</p>
                                
                                <button type="button" className="aboutBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"> See More </button>
                                
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">About Us</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body regularTextDark">
                                        Grant Accounting is a 501c3, established in March 2023, our Mission is to help non-profit in grants accounting management. We have expert experience in grant billing and compliance. Looking forward to helping your non-profit focus on your mission while our mission is to help you get cash flow on time and in compliance.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
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

export default AboutUs;