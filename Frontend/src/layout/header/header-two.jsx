import Link from 'next/link';
import React from 'react';
import logo from '@assets/img/logo/logo.png';
import Image from 'next/image';
import { useEffect } from 'react';
import OffCanvasMain from '@components/common/off-canvas';
import { useState } from 'react';
import Menus from './menus';

const HeaderTwo = () => {
   const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
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

   return (
      //   header area start 
      <header>
         <div className="header__top-3">
            <div className="container-fluid">
               <div className="row justify-content-end">
                  <div className="col-xxl-10 col-xl-9 col-lg-9 col-sm-9">
                     <div
                        className="header__top-3-text theme-bg clip-box-xxs d-flex align-items-center justify-content-between">
                        <div className="header__text">
                           <span className="uppercase">We’re more than just transport. <b><Link href="/contact">Free
                              Counsultancy</Link></b> </span>
                        </div>
                        <div className="header__top-3-link t-right">
                           <ul>
                              <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                              <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link href="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                              <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                              <li><Link href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-sm-3">
                     <div className="header__top-3-btn t-right">
                        <Link href="/contact" className="fill-btn fill-lg-btn clip-md-btn">get estimation</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="header-sticky" className="header__bottom-3 menu-sticky">
            <div className="container-fluid">
               <div className="row align-items-center justify-content-between">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-6">
                     <div className="logo">
                        <Link href="/"><Image src={logo} style={{ width: 'auto', height: 'auto' }} alt='Logo'></Image></Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-8 col-lg-8 col-6">
                     <div className="main-menu main-menu-3 d-none d-xl-block">
                        <nav id="mobile-menu">
                           <Menus />
                        </nav>
                     </div>
                     <div className="header__toggle-btn sidebar-toggle-btn text-end d-block d-lg-none">
                        <div className="header__bar" onClick={() => setIsOffCanvasOpen(true)}>
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-2 col-lg-2 d-none d-lg-block">
                     <div className="header__bottom-3-wrapper">
                        <div className="header__bottom-3-info">
                           <div className="header__bottom-3-item">
                              <div className="header__bottom-3-icon mr-10">
                                 <i className="flaticon-telephone-call"></i>
                              </div>
                              <div className="header__bottom-3-text">
                                 <h5><Link href="tel:32622266600">326 222 666 00</Link></h5>
                              </div>
                           </div>
                           <div className="header__bottom-3-item">
                              <div className="header__bottom-3-icon mr-10">
                                 <i className="flaticon-envelope"></i>
                              </div>
                              <div className="header__bottom-3-text">
                                 <h5><Link href="mailto:info@webdow.com">info@webdow.com</Link></h5>
                              </div>
                           </div>
                        </div>
                        <div className="header__bottom-3-ecom">
                           <div className="header__bottom-3-auth">
                              <Link href='/login' type='submit'><i className="fas fa-user"></i></Link>
                           </div>
                           <div className="header__bottom-3-squre sidebar-toggle-btn ">
                              <button type='submit' onClick={() => setIsOffCanvasOpen(true)}><i className="flaticon-menu"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* sidebar area */}
         <OffCanvasMain isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
      </header>
   );
};

export default HeaderTwo;