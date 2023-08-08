import Image from 'next/image';
import React from 'react';

const Instructor = () => {
    return (
        <div className='instructorBg pt-xxl-5 pt-xl-5 pt-lg-5'>
            <div className='container'>
                <div className='pt-xxl-5 pt-xl-5'>
                    <div>
                        <h2 className='boldTextDark'>Join Us as an</h2>
                        <h2 className='extraBoldColor'>Instructor</h2>
                        <p className='regularTextLgDark'>and start earning</p>
                    </div>
                    <div className='instructorWidth'>
                        <p className='regulerTextDark d-none d-lg-block'>Join our team as a instructor to share your skills in the non-profit world.</p>
                    </div>
                    <div>
                        <button className='instructorBtn'>Register as Instructor</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;