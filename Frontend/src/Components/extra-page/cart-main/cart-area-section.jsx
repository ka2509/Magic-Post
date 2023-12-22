import useCartInfo from "@hooks/use-cart-info";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease_quantity,
  cart_product,
  remove_cart_product,
  clear_cart,
} from "src/redux/features/cart-slice";

const CartAreaSection = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();

  const handleChange = (e) => {};
  return (
    <>
      {cartProducts.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-100 text-center">
            <h3>Your cart is empty</h3>
          </div>
        </div>
      )}
      {cartProducts.length >= 1 && (
        <section className="cart-area pt-120 pb-120">
          <div className="container container-small">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts?.map((item, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <Link href={`/shop-details/${item.id}`}>
                              <Image
                                src={item.image}
                                style={{ width: "auto", height: "auto" }}
                                alt="img"
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href={`/shop-details/${item.id}`}>
                              {item.product_name}
                            </Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">${item.price_now}</span>
                          </td>
                          <td className="product-quantity text-center">
                            <div className="product-quantity mt-10 mb-10">
                              <div className="product-quantity-form">
                                <form
                                  onSubmit={(e) => e.preventDefault()}
                                  action="#"
                                >
                                  <button
                                    onClick={() =>
                                      dispatch(decrease_quantity(item))
                                    }
                                    className="cart-minus"
                                  >
                                    <i className="far fa-minus"></i>
                                  </button>
                                  <input
                                    className="cart-input"
                                    type="text"
                                    onChange={handleChange}
                                    value={item?.quantity}
                                  />
                                  <button
                                    onClick={() => dispatch(cart_product(item))}
                                    className="cart-plus"
                                  >
                                    <i className="far fa-plus"></i>
                                  </button>
                                </form>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              ${item?.quantity * item.price_now}
                            </span>
                          </td>
                          <td
                            onClick={() => dispatch(remove_cart_product(item))}
                            className="product-remove"
                          >
                            <button type="button">
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon d-flex align-items-center">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="fill-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="fill-btn"
                          name="update_cart"
                          type="submit"
                          onClick={() => dispatch(clear_cart())}
                        >
                          Clear cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>${parseFloat(total)}</span>
                        </li>
                        <li>
                          Total <span>${parseFloat(total)}</span>
                        </li>
                      </ul>
                      <Link className="fill-btn" href="/checkout">
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartAreaSection;
