/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import log from "../../../public/src/images/demo/loginPageImage.png";
import Link from 'next/link';
import fb from "../../../public/src/images/icon/facebookOrg.png";
import goo from "../../../public/src/images/icon/googleOrg.png";

const Login = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-8 col-xl-8 col-lg-7 '>
                        <div className='loginImage'>
                            <Image src={log} alt='Login Page Image' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-5'>
                        <div>
                            <h3 className='semiBoldTextXl'>Log In</h3>
                            <h5 className='semibolTextmd'>Account Type</h5>
                        </div>
                        <div className='mt-5'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Student</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Instructor</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"  />
                                <label className="form-check-label" for="inlineRadio3">organization</label>
                            </div>
                        </div>
                        <form className='mt-5'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="semibolTextmd mb-3">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="semibolTextmd mb-3">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                            </div>
                            <div>
                                <Link href="#" className='semibolTextSmDark'>Forgot password?</Link>
                            </div>
                            <div className='text-center mt-5'>
                                <button type="submit" className="loginBtn">Log in</button>
                                <p className='regularTextLgDark my-5'>Or</p>
                            </div>
                        </form>
                        <div>
                            <li className='loginLi mb-4'> <Link href="#" className=''><a><Image src={goo} alt='Facebook Login icon' className='me-3' />Login with Google Account</a></Link></li>
                            <li className='loginLi'><Link href="#" className=''><a><Image src={fb} alt='Facebook Login icon' className='me-3' />Login with Facebook Account</a></Link></li>
                        </div>
                        <div className='text-center mt-5'>
                            <p className='regularTextLgDark my-5'>Don't have an account ? <Link href="/register" className=''><a>Sign Up</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;