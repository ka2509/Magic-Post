import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Products from './products';

const ShopRelatedProducts = ({ item }) => {
    return (
        <section className="dp-related-product pb-60 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="section__title mb-55">
                            <span className="sub-title">Related</span>
                            <h2 className="title">Related products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="dp-related-product-wrap">
                            <Products item={item} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopRelatedProducts;