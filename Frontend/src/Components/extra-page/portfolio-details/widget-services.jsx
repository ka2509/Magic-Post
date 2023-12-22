import Link from 'next/link';
import React from 'react';

const WidgetServices = () => {
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Our Services</h4>
            </div>
            <ul className="widget-services">
                <li><Link href="/services"><i className="fas fa-truck"></i> Car Transport</Link></li>
                <li><Link href="/services"><i className="fas fa-cogs"></i> Refund Product</Link></li>
                <li><Link href="/services"><i className="fas fa-box"></i> Car Transport</Link></li>
                <li><Link href="/services"><i className="fas fa-plane"></i> Air Frieght</Link></li>
                <li><Link href="/services"><i className="fas fa-ship"></i> Ship Frieght</Link></li>
                <li><Link href="/services"><i className="fas fa-home"></i> Home Delivery</Link></li>
            </ul>
        </div>
    );
};

export default WidgetServices;