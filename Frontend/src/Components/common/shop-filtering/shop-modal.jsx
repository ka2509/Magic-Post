import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productTwo from '@assets/img/shop/product-02.png'
import productThere from '@assets/img/shop/product-03.png'
import productFour from '@assets/img/shop/product-04.png'
import Link from 'next/link';
import { cart_product } from 'src/redux/features/cart-slice';
import { add_to_wishlist } from 'src/redux/features/wishlist-slice';

const ShopModal = ({ item }) => {
    const { product } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleChange = (event) => {
        event.preventDefault()
    }
    return (
        //  shop modal start 
        <div className="modal fade" id="productModalId" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                <div className="modal-content">
                    <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                        </div>
                        <div className="product__modal-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    {/* modal box */}
                                    <div className="product__modal-box">
                                        <div className="tab-content" id="modalTabContent">
                                            <div className="tab-pane fade show active" id="nav1" role="tabpanel"
                                                aria-labelledby="nav1-tab">
                                                <div className="product__modal-img w-img">
                                                    {product?.image && <Image src={product?.image} style={{ width: "100%", height: "auto" }} alt="product" />}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                                <div className="product__modal-img w-img">
                                                    <Image src={productTwo} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                                <div className="product__modal-img w-img">
                                                    <Image src={productThere} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                                <div className="product__modal-img w-img">
                                                    <Image src={productFour} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                    aria-selected="true">
                                                    {product?.image && <Image src={product?.image} style={{ width: "100%", height: "auto" }} alt="product" />}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2"
                                                    type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                                    <Image src={productTwo} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3"
                                                    type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                                    <Image src={productThere} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4"
                                                    type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                                    <Image src={productFour} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    {/* modal content */}
                                    <div className="product__modal-content">
                                        <h4><Link href={`/shop-details/${product?.id}`}>{product?.product_name}</Link></h4>
                                        <div className="product__modal-des mb-40">
                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum
                                                claritatem.
                                                Investigationes demonstraverunt
                                            </p>
                                        </div>
                                        <div className="product__stock">
                                            <span>Availability :</span>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="product__stock sku mb-30">
                                            <span>SKU:</span>
                                            <span>Juicera C49J89: £875, Debenhams Plus</span>
                                        </div>
                                        <div className="product__review d-sm-flex">
                                            <div className="rating rating__shop mb-15 mr-35">
                                                <ul>
                                                    <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                    <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                    <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                    <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                    <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="product__add-review mb-15">
                                                <span><Link href="shop-details">1 Review</Link></span>
                                                <span><Link href="shop-details">Add Review</Link></span>
                                            </div>
                                        </div>
                                        <div className="product__price">
                                            <span>${product?.price_now}</span>
                                        </div>
                                        <div className="product__modal-form">
                                            <div className="product-quantity-cart mb-30">
                                                <button type='button' className="fill-btn" data-bs-dismiss="modal" onClick={() => dispatch(cart_product(product))}>
                                                    <Link href="/cart">Add to Cart</Link>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product__modal-links">
                                            <ul>
                                                <li data-bs-dismiss="modal"><Link href="/wishlist" title="Add to Wishlist" onClick={() => dispatch(add_to_wishlist(product))}><i className="fal fa-heart"></i></Link></li>
                                                <li><Link href="#" title="Compare"><i className="far fa-sliders-h"></i></Link></li>
                                                <li><Link href="#" title="Print"><i className="fal fa-print"></i></Link></li>
                                                <li><Link href="#" title="Share"><i className="fal fa-share-alt"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModal;