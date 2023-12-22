import NiceSelect from '@ui/niceSelect';
import React from 'react';

const QuoteFrom = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const selectHandler = e => { }
    return (
        <div className="product-action">
            <form onSubmit={handleSubmit} action="#">
                <div className="product__data">
                    <label>Personal Data</label>
                    <div className="row">
                        <div className="col-lg-4">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder="Phone" />
                        </div>
                    </div>
                </div>
                <div className="product__data">
                    <label>Shipment Data</label>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="pr-select">
                                <NiceSelect
                                    options={[
                                        { value: "1", text: "Freight Type" },
                                        { value: "2", text: "Freight Type" },
                                        { value: "3", text: "Freight Type" },

                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name="freight"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder="City of Departure" />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder="Delivery City" />
                        </div>
                        <div className="col-lg-4">
                            <div className="pr-select">
                                <NiceSelect
                                    options={[
                                        { value: "1", text: "Incoterms" },
                                        { value: "2", text: "Incoterms" },
                                        { value: "3", text: "Incoterms" },

                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name="Incoterms"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row product__weight">
                                <div className="col-6">
                                    <input type="text" placeholder="Weight" />
                                </div>
                                <div className="col-6">
                                    <input type="text" placeholder="Height" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row product__area">
                                <div className="col-6">
                                    <input type="text" placeholder="Width" />
                                </div>
                                <div className="col-6">
                                    <input type="text" placeholder="Length" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__check mb-20">
                    <div className="check-item">
                        <label className="sign-check" htmlFor="Fragile2"><span>Fragile</span></label>
                        <input className="e-check-input" type="checkbox" id="Fragile2" />
                    </div>
                    <div className="check-item">
                        <label className="sign-check" htmlFor="Delivery2"><span>xpress Delivery</span></label>
                        <input className="e-check-input" type="checkbox" id="Delivery2" />
                    </div>
                    <div className="check-item">
                        <label className="sign-check" htmlFor="Insurance2"><span>Insurance</span></label>
                        <input className="e-check-input" type="checkbox" id="Insurance2" />
                    </div>
                    <div className="check-item">
                        <label className="sign-check" htmlFor="Packaging2"><span>Packaging</span></label>
                        <input className="e-check-input" type="checkbox" id="Packaging2" />
                    </div>
                </div>
                <button className="fill-btn justify-content-center w-100 request-quote shutter-btn" type="submit">Request for A Quote</button>
            </form>
        </div>
    );
};

export default QuoteFrom;