import React from 'react';
import NavTabs from './nav-tabs';
import TabContent from './tab-content';
import QuoteFrom from './quote-form';

const QuoteArea = () => {
    return (
        <div className="order__form-details pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <NavTabs />
                    <div className="col-xxl-9 col-xl-8 col-lg-12">
                        <div className="quote-features mb-30">
                            <div className="tab-content">
                                <TabContent />

                                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <form action="#">
                                        <div className="product__data">
                                            <label htmlFor="id">Your Order ID</label>
                                            <input type="text" id="id" placeholder="Your ID" />
                                            <label>Your Message</label>
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write Message..." spellCheck="false"></textarea>
                                            <button type="submit" className="fill-btn justify-content-center w-100">Send
                                                Query</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                    <QuoteFrom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteArea;