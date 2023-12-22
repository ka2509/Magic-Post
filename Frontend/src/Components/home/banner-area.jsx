import React from 'react';
import banner_overlay from '@assets/img/slider/slider-2.png'

const BannerArea = () => {
   return (
      <div className="banner-area banner-area2">
         <div className="swiper-container">
            <div className="swiper-wrapper">
               <div className="swiper-slide">
                  <div className="single-banner single-banner-2 banner-970">
                     <div className="banner-bg banner-bg2" style={{ backgroundImage: `url(${banner_overlay.src})` }}>
                     </div>
                     <div className="container pos-rel">
                        <div className="row align-items-center justify-content-center">
                           <div className="col-lg-8">
                              <div className="banner-content banner-content2 mx-auto text-center banner-content2-1 pt-155">
                                 <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">
                                    Transport Anything <br /> From Anywhere.
                                 </h1>
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

export default BannerArea;