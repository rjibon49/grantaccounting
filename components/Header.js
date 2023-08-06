import React from 'react';
import us from '../public/src/images/country/US.png';
import search from '../public/src/images/icon/searchBar.png';
import notify from '../public/src/images/icon/notification.png';
import cart from '../public/src/images/icon/shoppingCart.png';
import logo from '../public/src/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className='headingBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className='me-auto'>
                                {/* <span className='pe-3'>
                                    <select name="" id="" className='currency'>
                                        <option value="usd">USD ($)</option>
                                        <option value="euro">Euro (€)</option>
                                    </select>
                                </span> */}
                                <span className='pe-5'>
                                    <select name="" id="" className='language pe-3'>
                                        <option value="english"><Image src={us} alt='usa'className='' />English</option>
                                        <option value="spanish">Spanish</option>
                                    </select>
                                </span>
                                <span className='search'>
                                    <input type="text" placeholder='' className='searchInput' />
                                    <span className='searchIcon'>
                                        <Image src={search} alt='usa' className='' />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className=''>
                                <ul className='d-flex justify-content-end align-items-center'>
                                    <li className='topBarIcon'><Image src={cart} alt='Cart Icon' className='' /></li>
                                    <li className='topBarIcon'><Image src={notify} alt='Cart Icon' className='' /></li>
                                    <Link href="/login"><span className=''><a className='topBarInfo'>Login</a></span></Link>
                                    <Link href="/register"><span className=''><a className='topBarInfo'>Register</a></span></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <Link href="/"><a className='navbar-brand'><Image src={logo} alt='Logo' className='' /> </a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="navItem">
                                    <Link href="/login"><a className="loginLink">Start Learning</a></Link>
                                </li>
                                <li className="navItem">
                                    <Link href="#"><a className="loginLink">Client Portal</a></Link>
                                </li>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menuBarItem">
                                    <li className="navItem">
                                        <Link href="/"><a className="navLink active" aria-current="page">Home</a></Link>
                                    </li>
                                    <li className="navItem dropdown">
                                <Link href="#" >
                                    <a className="navLink dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Service</a>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="navItem"><Link href="/services/grant_writing_service"><a className="dropdown-item" >Grant Writing Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/financial_and_managerial_accounting_services"><a className="dropdown-item" >Financial and Managerial Accounting Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/strategic_planning_services"><a className="dropdown-item" >Strategic Planning Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/strategic_business_unit"><a className="dropdown-item" >Strategic Business Unit (SBU) Planning & Business Management</a></Link></li>
                                    <li className="navItem"><Link href="/services/business_valuation_services"><a className="dropdown-item" >Business Valuation Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/finalcial_consulting"><a className="dropdown-item" >Financial Consulting</a></Link></li>
                                    <li className="navItem"><Link href="/services/finalcial_management_services"><a className="dropdown-item" >Financial Management Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/data_analysis_services"><a className="dropdown-item" >Data Analysis Services</a></Link></li>
                                    <li className="navItem"><Link href="/services/implementation_of_new_account_system"><a className="dropdown-item" >Implementation of new accounting system (QB, Lawson, MIP, FE, or others)</a></Link></li>
                                </ul>
                            </li>
                            <li className="navItem">
                                <Link href="/instructor"><a className="navLink">Instructors </a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="/courses"><a className="navLink">Courses</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Career</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Volunteer</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Donate</a></Link>
                            </li>
                                </ul>
                                <li className="navItem">
                                    <Link href="#"><a className="loginLinkBottom">Start Learning</a></Link>
                                </li>
                                <li className="navItem">
                                    <Link href="#"><a className="loginLinkBottom">Client Portal</a></Link>
                                </li>
                            </div>
                        </div>
                </nav>
                    <nav className='navbar navbar-expand-lg menuBarItem2'>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link href="#" >
                                    <a className="navLink dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Service</a>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link href="/services/grant_writing_service"><a className="dropdown-item" >Grant Writing Services</a></Link></li>
                                    <li><Link href="/services/financial_and_managerial_accounting_services"><a className="dropdown-item" >Financial and Managerial Accounting Services</a></Link></li>
                                    <li><Link href="/services/strategic_planning_services"><a className="dropdown-item" >Strategic Planning Services</a></Link></li>
                                    <li><Link href="/services/strategic_business_unit"><a className="dropdown-item" >Strategic Business Unit (SBU) Planning & Business Management</a></Link></li>
                                    <li><Link href="/services/business_valuation_services"><a className="dropdown-item" >Business Valuation Services</a></Link></li>
                                    <li><Link href="/services/finalcial_consulting"><a className="dropdown-item" >Financial Consulting</a></Link></li>
                                    <li><Link href="/services/finalcial_management_services"><a className="dropdown-item" >Financial Management Services</a></Link></li>
                                    <li><Link href="/services/data_analysis_services"><a className="dropdown-item" >Data Analysis Services</a></Link></li>
                                    <li><Link href="/services/implementation_of_new_account_system"><a className="dropdown-item" >Implementation of new accounting system (QB, Lawson, MIP, FE, or others)</a></Link></li>
                                </ul>
                            </li>
                            <li className="navItem">
                                <Link href="/instructor"><a className="navLink">Instructors </a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="/courses"><a className="navLink">Courses</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Career</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Volunteer</a></Link>
                            </li>
                            <li className="navItem">
                                <Link href="#"><a className="navLink">Donate</a></Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </>
    );
};

export default Header;