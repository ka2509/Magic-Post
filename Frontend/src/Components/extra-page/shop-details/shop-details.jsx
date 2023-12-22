import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Product from './product';
import ProductContent from './product-content';
import ProductInfo from './product-info';

const ShopDetails = ({ item }) => {

    return (
        <section className="shop-details-area pt-120 pb-90">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">

                    <Product item={item} />
                    <ProductContent item={item} />
                </div>
                <div className="product_info-faq-area pb-0 pt-20 wow fadeInUp" data-wow-delay=".3s">
                    <div className="product-details-tab-wrapper">
                        <nav className="product-details-nav mb-30">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <Link className="nav-item nav-link active" id="pro-info-1-tab" data-bs-toggle="tab" href="#pro-info-1"
                                    role="tab" aria-selected="true">Description</Link>
                                <Link className="nav-item nav-link" id="pro-info-3-tab" data-bs-toggle="tab" href="#pro-info-3"
                                    role="tab" aria-selected="false">Reviews (3)</Link>
                            </div>
                        </nav>
                        <ProductInfo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopDetails;