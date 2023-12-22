import React from 'react';
import funFactData from '@data/funfact-data';
import dynamic from "next/dynamic";

const Counter = dynamic(() => import('../common/counter/CountUpContent'), {
    ssr: false
})
const FunfactArea = () => {
    return (
        <section className="dp-funfact-area pt-120 pb-90">
            <div className="container">
                <div className="dp-funfactor-grid wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    {
                        funFactData.map((item) => (
                            <div className="dp-funfact-wrapper mb-30" key={item.id}>
                                <div className="dp-funfact-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="dp-funfact-content">
                                    <h3 className="counter"><Counter number={item.number}></Counter></h3>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FunfactArea;