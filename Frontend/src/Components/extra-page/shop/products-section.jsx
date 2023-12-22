import Link from 'next/link';
import React from 'react';
import Product from './product';
import ProductTag from './product-tag';
import ProductCategory from './product-category';
import SidebarProduct from './sidebar-product';
import RangeSlider from '@components/common/range-slider';
import NiceSelect from '@ui/niceSelect';

const ProductSection = () => {
    const selectHandler = e => {}
    return (
        <div className="product-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-left-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="product-left-item mb-45">
                                <div className="single-input-field">
                                    <input name="name" type="text" placeholder="Search Here" />
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                            <ProductCategory />
                            <RangeSlider />
                            <SidebarProduct />
                            <ProductTag />
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="product-area-wrapper mb-20 wow fadeInUp" data-wow-delay=".3s">
                            <div className="product-filter-wrapper">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="items-showing-text mb-15">
                                            <div className="items-showing">
                                                <p>Showing <span>1</span>–<span>9</span> of <span>11</span> results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="filter-buttons mb-15">
                                            <NiceSelect
                                                options={[
                                                    { value: "menu order", text: "Default sorting" },
                                                    { value: "popularity", text: "Sort by popularity" },
                                                    { value: "rating", text: "Sort by average rating" },
                                                    { value: "date", text: "Sort by latest" },
                                                    { value: "price", text: "Sort by price: low to high" },
                                                    { value: "price-desc", text: "Sort by price: high to low" },
                                                ]}
                                                defaultCurrent={0}
                                                onChange={selectHandler}
                                                name="Select Subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Product />
                            <div className="basic-pagination mt-0 wow fadeInUp" data-wow-delay=".3s">
                                <ul>
                                    <li>
                                        <Link className="prev page-numbers" href="#">
                                            <i className="fal fa-angle-double-left"></i>
                                        </Link>
                                    </li>
                                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                                    <li><Link className="page-numbers" href="#">2</Link></li>
                                    <li><Link className="page-numbers" href="#">3</Link></li>
                                    <li>
                                        <Link className="page-numbers" href="#">
                                            <i className="fal fa-ellipsis-h"></i>
                                        </Link>
                                    </li>
                                    <li><Link className="page-numbers" href="#">10</Link></li>
                                    <li>
                                        <Link className="next page-numbers" href="#">
                                            <i className="fal fa-angle-double-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
