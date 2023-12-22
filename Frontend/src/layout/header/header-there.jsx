import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import Logo from '@assets/img/logo/logo.png'
import Image from 'next/image';
import OffCanvasMain from '@components/common/off-canvas';
import { useState } from 'react';
import Menus from './menus';

const HeaderThere = () => {
    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.menu-sticky');
        const scrollTop = window.scrollY;
        scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    return (
        <header>
            <div className="header__top header__pad d-none d-md-block">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-7 col-md-7">
                            <div className="header__text">
                                <span className="uppercase">We’re more than just transport. <b><Link href="/contact">Free Counsultancy</Link></b> </span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-5 d-flex justify-content-end">
                            <div className="header__social-link">
                                <ul>
                                    <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom-wrapper white-bg pb-15">
                <div className="container">
                    <div className="header__bottom p-relative">
                        <div className="header__bottom-info">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-md-2 col-9">
                                    <div className="logo logo-transform">
                                        <Link href="/">
                                            <Image src={Logo} style={{ width: "auto", height: "auto" }} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10 col-3">
                                    <div className="text-end d-xl-none">
                                        <div className="header__toggle-btn sidebar-toggle-btn">
                                            <div className="header__bar" onClick={() => setIsOffCanvasOpen(true)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-none d-xl-block">
                                        <div className="header__info">
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-telephone-call"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>Call us now</span>
                                                    <h5><Link href="tel:32622266600">326 222 666 00</Link></h5>
                                                </div>
                                            </div>
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-envelope"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>Email now</span>
                                                    <h5><Link href="mailto:info@webdow.com">info@webdow.com</Link></h5>
                                                </div>
                                            </div>
                                            <div className="header__info-item">
                                                <div className="header__info-icon">
                                                    <i className="flaticon-pin"></i>
                                                </div>
                                                <div className="header__info-text">
                                                    <span>12/A, New Boston Hall</span>
                                                    <h5><Link href="https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1">New york, united states</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-area position d-none d-xl-block p-absolute">
                            <div className="row d-flex justify-content-end align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo d-none">
                                        <Link href="/"><Image src={Logo} style={{ width: "auto", height: "auto" }} alt="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper menu-bg d-flex justify-content-between">
                                        <div className="main-menu main-menu-1">
                                            <nav id="mobile-menu">
                                                <Menus />
                                            </nav>
                                        </div>
                                        <div className="menu-btn">
                                            <Link href="/quote">get a quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sticky Menu Area Start Here   */}
            <div id="header-sticky" className="sticky-area menu-sticky menu-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-3">
                            <div className="logo">
                                <Link href="/"> <Image src={Logo} style={{ width: "auto", height: "auto" }} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-9">
                            <div className="menu-wrapper menu-none d-flex align-items-center justify-content-between">
                                <div className="main-menu main-menu-1">
                                    <nav>
                                    <Menus/>
                                    </nav>
                                </div>
                                <div className="menu-btn">
                                    <Link className="clip-btn" href="/quote">get a quote</Link>
                                </div>
                            </div>
                            <div className="header__toggle-btn sidebar-toggle-btn text-end d-block d-lg-none">
                                <div className="header__bar" onClick={() => setIsOffCanvasOpen(true)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sticky Menu Area End Here  
         Sidebar Area Start Here   */}
            <OffCanvasMain isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
        </header>
    );
};

export default HeaderThere;