import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product } from 'src/redux/features/cart-slice';
import { remove_wishlist_product } from 'src/redux/features/wishlist-slice';

const CartArea = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const { wishlist } = useSelector(state => state?.wishlist);
    const dispatch = useDispatch();

    return (
        <div className="cart-area pt-100 pb-100">
            <div className="container">
                {wishlist.length === 0 &&
                    <div className="text-center">
                        <h3>Your wishlist is empty</h3>
                    </div>
                }
                {wishlist.length >= 1 &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Add to cart</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlist.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="product-thumbnail">
                                                        <Link href="/shop-details">
                                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="img" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link href="/shop-details">{item.product_name}</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">${item.price_now}</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <Link onClick={() => dispatch(cart_product(item))} href="/cart" className="fill-btn">Add to Cart</Link>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">${item.price_now}</span>
                                                    </td>
                                                    <td className="product-remove" onClick={() => dispatch(remove_wishlist_product(item))}>
                                                        <button type='button'><i className="fa fa-times"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CartArea;
