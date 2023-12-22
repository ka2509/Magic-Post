import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import product_data from '@data/product-data';

const SidebarProduct = () => {
    return (
        <div className="product-left-item mb-45">
            <h6 className="product-widget-title">Products</h6>
            <ul className="product_list_widget">
                {
                    product_data?.slice(0, 3).map((item) => (
                        <li className="d-flex" key={item.id}>
                            <div className="product-widget-thumb">
                                <div className="product-widget-thumb-inner">
                                    <Link href={`/shop-details/${item.id}`}>
                                        <Image src={item.image} style={{ width: "auto", height: 'auto' }}
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                            alt="product" loading="lazy" /> </Link>
                                </div>
                            </div>
                            <div className="product-widget-info">
                                <h4 className="product-widget-title">
                                    <Link href={`/shop-details/${item.id}`}>{item.product_name}</Link>
                                </h4>
                                <span className="woocommerce-Price-amount amount"><span
                                    className="woocommerce-Price-currencySymbol">$</span>{item.price_now}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SidebarProduct;