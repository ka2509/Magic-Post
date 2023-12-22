import Image from 'next/image';
import React from 'react';
import preloader_icon from '@assets/img/logo/preloader-icon.gif';

const Preloader = () => {
  return (
    <>
     <div id="loading">
      <div id="loading-center">
         <div id="loading-center-absolute">
            <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
            <Image src={preloader_icon} alt='preloader-icon' style={{ width: '100%', height: 'auto' }} />
            </div>
         </div>
      </div>
   </div>
    </>
  );
};
export default Preloader;