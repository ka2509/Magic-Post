import Link from 'next/link';
import React from 'react';
import logo from '@assets/img/logo/logo-icon.png'
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="sidebar__widget black-bg sidebar-contact text-center">
            <Image src={logo} style={{ width: "auto", height: "auto", marginBottom: "20px" }} alt="logo" />

            <p>Have Additional Questions? Contact Our Agents!</p>
            <h2><Link href="tel:89787676587">897 876 765 87</Link></h2>
        </div>
    );
};

export default Contact;