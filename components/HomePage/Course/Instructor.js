import Image from 'next/image';
import React from 'react';
import vol from "../../../public/src/images/demo/volunteer.png";

const Instructor = () => {
    return (
        <div className='instructorBg centerItem my-5'>
            <div className='container'>
                <div className=''>
                    <div>
                        <h2 className='boldTextDark'>Join Us as an</h2>
                        <h2 className='extraBoldColor'>Instructor</h2>
                        <p className='regularTextLgDark'>and start earning</p>
                    </div>
                    <div className='instructorWidth'>
                        <p className='regulerTextDark'>Join our team as a instructor to share your skills in the non-profit world.</p>
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