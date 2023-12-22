import Link from 'next/link';
import React from 'react';

const LocationArea = () => {
    return (
        <div className="location-area pt-120 pb-80 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav>
                            <div className="country-tab mb-40">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-tab-1-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-1" type="button" role="tab" aria-controls="nav-tab-1" aria-selected="true">Africa</button>
                                    <button className="nav-link" id="nav-tab-2-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-2" type="button" role="tab" aria-controls="nav-tab-2" aria-selected="false">Asia</button>
                                    <button className="nav-link" id="nav-tab-3-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-3" type="button" role="tab" aria-controls="nav-tab-3" aria-selected="false">Europe</button>
                                    <button className="nav-link" id="nav-tab-4-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-4" type="button" role="tab" aria-controls="nav-tab-4" aria-selected="false">Middle East</button>
                                </div>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-tab-1" role="tabpanel" aria-labelledby="nav-tab-1-tab">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Nigeria</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Angola</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Benin</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Botswana</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Burkina Faso</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Burundi</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Cameroon</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Cape Verde</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Central African Republic</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Chad</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Comoros</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Djibouti</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Egypt</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Equatorial Guinea</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Eritrea</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Eswatini</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Ethiopia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Gabon</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Gambia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Gambia</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-tab-2" role="tabpanel" aria-labelledby="nav-tab-2-tab">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Russia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">China</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">India</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Saudi Arabia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Pakistan</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Myanmar</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Afghanistan</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Yemen</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Turkmenistan</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Turkmenistan</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Iraq</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Japan</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Vietnam</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Malaysia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Oman</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Philippines</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Bangladesh</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Nepal</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Tajikistan</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">North Korea</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-tab-3" role="tabpanel" aria-labelledby="nav-tab-3-tab">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Ukraine</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">France</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Spain</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Sweden</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Norway</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Germany</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Finland</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Poland</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Romania</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Belarus</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Kazakhstan</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Greece</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Bulgaria</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Iceland</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Hungary</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Serbia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Czechia</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Ireland</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Lithuania</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Latvia</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-tab-4" role="tabpanel" aria-labelledby="nav-tab-4-tab">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Al-Kazemi</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Abu Dhabi </Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Doha</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Jeddah</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Muscat</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Sharjah</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Sohar</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Sohar Port</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Bahrain</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Kabul</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Alexandria</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Cairo (Airport Office)</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Casablanca</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Karachi</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Lahore</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="loaction-box mb-30">
                                            <div className="laction-county">
                                                <ul>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Lahore</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Riyadh</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Sharjah</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Beirut</Link></span>
                                                    </li>
                                                    <li>
                                                        <span><Link href="#"><i className="far fa-map-marker-alt"></i></Link></span>
                                                        <span><Link href="#">Muscat</Link></span>
                                                    </li>
                                                </ul>
                                            </div>
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

export default LocationArea;