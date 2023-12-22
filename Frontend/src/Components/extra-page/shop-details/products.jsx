import React from 'react';

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import product_data from '@data/product-data';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { add_to_wishlist } from 'src/redux/features/wishlist-slice';
import { cart_product } from 'src/redux/features/cart-slice';
import { getSingleProduct } from 'src/redux/features/product-slice';

const Products = () => {
    const dispatch = useDispatch();
    return (
        <div className="dp-related-product-active">
            <div>
                <Swiper
                    spaceBetween={30}
                    slideToClickedSlide={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    pagination={{
                        el: ".product-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span className="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
                        }
                    }}
                    navigation={{
                        nextEl: ".product-button-next",
                        prevEl: ".product-button-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        '1400': {
                            slidesPerView: 4,
                        },
                        '1200': {
                            slidesPerView: 4,
                        },
                        '992': {
                            slidesPerView: 3,
                        },
                        '768': {
                            slidesPerView: 2,
                        },
                        '480': {
                            slidesPerView: 1,
                        },
                        '0': {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {product_data.length > 0 &&
                        product_data.slice(0, 8).map((item) => (
                            <SwiperSlide key={item.id}>
                                <div>
                                    <div className="product-single">
                                        <div className="product-thumb">
                                            {item.onsale && <span className='onsale'>Sale</span>}
                                            <Link href={`/shop-details/${item.id}`}><Image src={item.image} style={{ width: "100%", height: "100%" }} alt="product" /></Link>
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
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Products;