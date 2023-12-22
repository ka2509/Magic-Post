import React from 'react';

const FaqSection = () => {
    const accordion_data = [
        {
            id: 1,
            id_2: 'headingOne',
            btn: 'accordion-button',
            aria_expanded: 'true',
            style: 'accordion-collapse collapse show',
            data_base_target: '#collapseOne',
            aria_controls: 'collapseOne',
            btn_name: 'servicing time frame',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        },
        {
            id: 2,
            id_2: 'headingTwo',
            btn: 'accordion-button collapsed',
            aria_expanded: 'false',
            style: 'accordion-collapse collapse',
            aria_controls: 'collapseTwo',
            data_base_target: '#collapseTwo',
            btn_name: 'refund policy & pricing',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        },
        {
            id: 3,
            id_2: 'headingThree',
            aria_expanded: 'false',
            btn: 'accordion-button collapsed',
            style: 'acaccordion-collapse collapse',
            aria_controls: 'collapseThree',
            data_base_target: '#collapseThree',
            btn_name: 'our own products',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        },
        {
            id: 4,
            id_2: 'headingFour',
            aria_expanded: 'false',
            btn: 'accordion-button collapsed',
            style: 'accordion-collapse collapse',
            aria_controls: 'collapseFour',
            data_base_target: '#collapseFour',
            btn_name: 'troubleshooting process',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        },
        {
            id: 5,
            id_2: 'headingFive',
            style: 'accordion-collapse collapse',
            aria_expanded: 'false',
            btn: 'accordion-button collapsed',
            aria_controls: 'collapseFive',
            data_base_target: '#collapseFive',
            btn_name: ' terms & conditions',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech,and more, market leaders are leveraging web data to maintain their transtadvantage. Discover how it can work for you.'
        },
    ]
    return (
        <div className="services_faq">
            <div className="section__title mb-30">
                <h3 className="title-sm">FAQ on the Service.</h3>
            </div>
            <div className="accordion__wrapper accordion__wrapper-1 pr-20">
                <div className="accordion" id="accordionExample">
                    {
                        accordion_data.map((item) => (
                            <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header" id={item.id_2}>
                                    <button className={item.btn} type="button" data-bs-toggle="collapse"
                                        data-bs-target={item.data_base_target} aria-expanded={item.aria_expanded} aria-controls={item.aria_controls}>
                                        {item.btn_name}
                                    </button>
                                </h2>
                                <div id={item.aria_controls} className={item.style} aria-labelledby={item.id_2}
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FaqSection;