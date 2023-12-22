import React from 'react';

const NavTabs = () => {
    return (
        <div className="col-xxl-3 col-xl-3 col-lg-12">
            <div className="quote-tab mb-30">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <span className="order__form-button">
                                <i className="fas fa-box"></i>
                                <span>Request A Quote</span>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <span className="order__form-button">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Track and Trace</span>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">
                            <span className="order__form-button">
                                <i className="fas fa-truck"></i>
                                <span>Custom Order</span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavTabs;