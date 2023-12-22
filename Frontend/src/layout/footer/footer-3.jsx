import Image from 'next/image';
import Link from 'next/link';
import gallery_1 from '@assets/img/gallery/gallery-10.jpg';
import gallery_2 from '@assets/img/gallery/gallery-11.jpg';
import gallery_3 from '@assets/img/gallery/gallery-12.jpg';
import gallery_4 from '@assets/img/gallery/gallery-13.jpg';
import gallery_5 from '@assets/img/gallery/gallery-14.jpg';
import gallery_6 from '@assets/img/gallery/gallery-15.jpg';
import footer_icon from '@assets/img/footer/footer-icon-img.png';


const FooterThere = () => {

    const portfolio_img = [
        {
            id: 1,
            image: gallery_1
        },
        {
            id: 2,
            image: gallery_2
        },
        {
            id: 3,
            image: gallery_3
        },
        {
            id: 4,
            image: gallery_4
        },
        {
            id: 5,
            image: gallery_5
        },
        {
            id: 6,
            image: gallery_6
        },
    ]
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <footer>
            <section className="footer-area footer-area1 footer-area1-bg pt-100 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p className="mb-40">A farm is a plot of land that is used to
                                    grow crops and raise livestock, as in
                                    our farm, we raise sheep and sell their
                                    wool the word farm is also.
                                </p>
                                <div className="footer-social-link">
                                    <ul>
                                        <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget2 mb-50 pl-10">
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
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget3 mb-50 pr-45">
                                <div className="footer-widget-title">
                                    <h4>Subscribe us</h4>
                                </div>
                                <p className="mb-20">Subscribe us &amp; receive our office &amp; update in your inbox directly</p>
                                <form onSubmit={handleSubmit} action="#" className="subscribe-form subscribe-form-footer1">
                                    <div className="s-clip p-relative s-input mb-10">
                                        <input type="text" placeholder="Enter your email" />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget4 mb-50">
                                <div className="footer-widget-title">
                                    <h4>photo gallery</h4>
                                </div>
                                <div className="footer-photo-gallery">
                                    {
                                        portfolio_img.slice(0, 6).map((item) => (
                                            <div className="footer-photo-item" key={item.id}>
                                                <Link href={`/portfolio-details/${item.id}`}>
                                                    <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt='gallery' />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer__bottom-area copy-bg-1 p-relative">
                <div className="footer-menu-area position p-absolute">
                    <div className="container">
                        <div className="red-bg clip-box-xs">
                            <div className="footer-menu-box">
                                <div className="row align-items-center">
                                    <div className="col-xxl-7 col-lg-5">
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
                                        <div className="footer-brand m-img mb-15 text-center text-lg-end">
                                            <Image src={footer_icon} alt='footer icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-area">
                    <div className="container">
                        <div className="copy-right-text text-center">
                            <p>Copyright & design by <Link href="https://themeforest.net/user/bdevs/portfolio?gclid=EAIaIQobChMIhYCnudmz_wIVWRxyCh2NoQvLEAAYASAAEgJTaPD_BwE">@bdevs</Link> - 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterThere;