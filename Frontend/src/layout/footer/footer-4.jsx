import Link from 'next/link';
import React from 'react';

const FooterFour = () => {
    return (
        <footer>
            <div className="footer-area p-relative footer-area1-bg pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p>A farm is a plot of land that is used to
                                    grow crops and raise livestock, as in
                                    our farm, we raise sheep and sell their
                                    wool the word farm is also.
                                </p>
                                <div className="footer-social-link mt-40">
                                    <ul>
                                        <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget2 mb-50 pl-30">
                                <div className="footer-widget-title">
                                    <h4>other pages</h4>
                                </div>
                                <div className="footer-widget-link">
                                    <ul>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/pricing">Pricing</Link></li>
                                        <li><Link href="/faq">FAQ &amp; Ans</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link href="/career">Careers</Link></li>
                                        <li><Link href="/blog">News &amp; Insights</Link></li>
                                        <li><Link href="/faq">Refund Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55">
                                <div className="footer-widget-title">
                                    <h4>our services</h4>
                                </div>
                                <ul className="footer-widget-link-2">
                                    <li><i className="fas fa-truck"></i><Link href="/services">Car Transport</Link></li>
                                    <li><i className="fas fa-cogs"></i><Link href="/services">Refund Product</Link></li>
                                    <li><i className="fas fa-box"></i><Link href="/services">Car Transport</Link></li>
                                    <li><i className="fas fa-plane"></i><Link href="/services">Air Frieght</Link></li>
                                    <li><i className="fas fa-ship"></i><Link href="/services">Ship Frieght</Link></li>
                                    <li><i className="fas fa-home"></i><Link href="/services">Home Delivery</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget4 mb-50 pl-10 pr-40">
                                <div className="footer-widget-title">
                                    <h4>Subscribe us</h4>
                                </div>
                                <p className="mb-20">Subscribe us & receive our office & update in your inbox directly</p>
                                <form action="#" className="subscribe-form subscribe-form-footer1">
                                    <div className="s-clip p-relative s-input mb-10">
                                        <input type="text" placeholder="Enter your email" />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-menu-area red-bg">
                <div className="container">
                    <div className="footer-menu-box two">
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-lg-5 ">
                                <div className="footer-menu mb-15">
                                    <nav>
                                        <ul>
                                            <li><Link href="#">terms & conditions</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="/career">careers</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-7">
                                <div className="copy-right-text-2 mb-15">
                                    <p>Copyright & design by <Link href="https://themeforest.net/user/bdevs/portfolio?gclid=EAIaIQobChMInPX85syz_wIVDWArCh190QGEEAAYASAAEgJetPD_BwE">@bdevs</Link> - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFour;