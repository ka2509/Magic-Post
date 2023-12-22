
import React from 'react';
import WidgetServices from '@components/extra-page/portfolio-details/widget-services';
import SearchInput from '@components/extra-page/portfolio-details/search-input';
import Contact from '@components/extra-page/portfolio-details/contact';
import Overview from './overview';




const ServiceDetails = ({ item }) => {
    return (
        <div className="services__details pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <Overview item={item} />
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <WidgetServices />
                        <SearchInput />
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;