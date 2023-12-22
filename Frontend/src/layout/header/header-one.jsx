import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@assets/img/logo/logo.png";
import { useEffect } from "react";
import OffCanvasMain from "@components/common/off-canvas";
import { useState } from "react";
import Menus from "./menus";

const HeaderOne = ({ headerClass }) => {
  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".menu-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div id="header-sticky" className={headerClass}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-6">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      style={{ width: "auto", height: "auto" }}
                      alt="Logo"
                    ></Image>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block">
                <div className="main-menu main-menu-2 t-right">
                  <nav id="mobile-menu">
                    <Menus />
                  </nav>
                </div>
                <div className="header__two-btn t-right d-block d-lg-none text-end">
                  <Link href="/contact" className="fill-btn clip-btn">
                    get estimation
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-6">
                <div className="header__two-btn lh-1 t-right d-none d-xl-block">
                  <Link href="/contact" className="fill-btn clip-btn">
                    get estimation
                  </Link>
                </div>
                <div className="text-end d-xl-none d-block">
                  <div className="header__toggle-btn sidebar-toggle-btn">
                    <button className="header__bar" onClick={() => setIsOffCanvasOpen(true)}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* full canvas area start */}
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* full canvas area end */}
    </>
  );
};

export default HeaderOne;
