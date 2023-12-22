import NiceSelect from '@ui/niceSelect';
import React from 'react';

const PriceFrom = () => {

    const handleSubmit = (e) => {
        e.preventDefualt()
    }

    const selectHandler = e => { }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field">
                        <input type="text" placeholder="Your Name" />
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field">
                        <input type="email" placeholder="Email address" />
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field z-index-4">
                        <NiceSelect
                            options={[
                                { value: "Freight Type", text: "Freight Type" },
                                { value: "Ocean Freight", text: "Ocean Freight" },
                                { value: "Air Freight", text: "Air Freight" },
                                { value: "Land Freight", text: "Land Freight" },
                            ]}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Select Subject"
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field z-index-3 ">
                        <NiceSelect
                            options={[
                                { value: "Incoterms", text: "Incoterms" },
                                { value: "EXW", text: "EXW" },
                                { value: "FCA", text: "FCA" },
                                { value: "CPT", text: "CPT" },
                                { value: "CIP", text: "CIP" },
                                { value: "DAT", text: "DAT" },
                            ]}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Select Subject"
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field">
                        <input type="text" placeholder="Total weight" />
                        <i className="fad fa-weight"></i>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-input-field">
                        <input type="text" placeholder="Dimension" />
                        <i className="fas fa-cube"></i>
                    </div>
                </div>
            </div>
            <div className="col-lx-12">
                <div className="price__cta-btn">
                    <button type='submit' className="fill-btn clip-sm-btn d-block">Submit Now</button>
                </div>
            </div>
        </form>
    );
};

export default PriceFrom;