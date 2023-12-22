import Image from 'next/image';
import React from 'react';
import product_1 from '@assets/img/shop/product-03.png';
import product_2 from '@assets/img/shop/product-04.png';
import product_3 from '@assets/img/shop/product-05.png';

const Product = ({ item }) => {
    return (
        <div className="col-lg-6">
            <div className="product-d-img-tab-wrapper mb-60">
                <div className="product-d-img-nav">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                aria-selected="false">
                                {item.image && <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="..." />}
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                                type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                                <Image src={product_2} style={{ width: "100%", height: "auto" }} alt="product" />
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                <Image src={product_3} style={{ width: "100%", height: "auto" }} alt="product" />
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pro-4-tab" data-bs-toggle="tab" data-bs-target="#pro-4"
                                type="button" role="tab" aria-controls="pro-4" aria-selected="false">
                                <Image className="active" src={product_1} style={{ width: "100%", height: "auto" }} alt="..." />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="product-d-img-tab">
                    <div className="tab-content" id="productDetailsTab">
                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                            aria-labelledby="pro-1-tab">
                            {item.image && <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="..." />}
                        </div>
                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                            <Image className="active" src={product_2} style={{ width: "100%", height: "auto" }} alt="..." />
                        </div>
                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                            <Image className="active" src={product_3} style={{ width: "100%", height: "auto" }} alt="..." />
                        </div>
                        <div className="tab-pane fade" id="pro-4" role="tabpanel" aria-labelledby="pro-4-tab">
                            <Image className="active" src={product_1} style={{ width: "100%", height: "auto" }} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;