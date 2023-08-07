import Image from 'next/image';
import React from 'react';
import vol from "../../../public/src/images/demo/volunteer.png";

const VolunteerInfo = () => {
    return (
        <div className='container-fluid vImageBg'>
            <div className='vBody'>
                <div className='vContent'>
                    <h2 className='semiBoldTextXl'>Join our team as a</h2>
                    <h2 className='extraBoldColor'>Volunteer</h2>
                    <p className='regularTextDark Vdescription'>All departments are in need of course and available in most positions to help you develop your skills. We will work with your schedule.</p>
                </div>
            </div>
        </div>
    );
};

export default VolunteerInfo;