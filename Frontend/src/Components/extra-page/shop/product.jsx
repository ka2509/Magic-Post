import React from 'react';
import product_data from '@data/product-data';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { add_to_wishlist } from 'src/redux/features/wishlist-slice';
import { cart_product } from 'src/redux/features/cart-slice';
import { getSingleProduct, selectProducts } from 'src/redux/features/product-slice';


const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    return (
        <div className="product-wrapper">
            {product_data.slice(0, 12).map((item) => (
                <div className="product-single" key={item.id}>
                    <div className="product-thumb">
                        {item.onsale && <span className="onsale">{item.onsale}</span>}
                        <Link href={`/shop-details/${item.id}`}><Image src={item.image} alt='product' style={{ width: '100%', height: 'auto' }} /></Link>
                        <div className="product-item-action">
                            <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fal fa-shopping-cart"></i></button>
                            <button type='button' onClick={() => dispatch(getSingleProduct(item))} data-bs-toggle="modal"
                                data-bs-target="#productModalId"><i className="fal fa-eye"></i></button>
                            <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fal fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="product-description">
                        <div className="rating">
                            {
                                item.ratings.map((rating) => (
                                    <Link href="#" key={rating.id}><i className={rating.icon}></i></Link>
                                ))
                            }
                        </div>
                        <h4 className="product-name"><Link href={`/shop-details/${item.id}`}>{item.product_name}</Link></h4>
                        <div className="product-price">
                            {item?.old_price && <span className="price-old">${item.old_price}</span>}
                            <span className="price-now">${item.price_now}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
};

export default Product;