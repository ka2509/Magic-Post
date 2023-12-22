import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { remove_cart_product } from "../../redux/features/cart-slice";
import Image from "next/image";
import useCartInfo from "@hooks/use-cart-info";

const SidebarCart = ({ openCart, setOpenCart }) => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            openCart ? "cart-open" : ""
          }`}
        >
          <div className="d-flex align-items-center justify-content-between mb-30">
            <h4 className="sidebar-action-title mb-0">Shopping Cart</h4>
            <div className="sidebar__close2">
              <button
                onClick={() => setOpenCart(false)}
                className="sidebar__close-btn"
                id="sidebar__close-btn"
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
          </div>

          {cartProducts.length === 0 && <h5>Your cart is empty</h5>}

          {cartProducts.length >= 1 && (
            <>
              <div className="sidebar-action-list">
                {cartProducts.map((item, index) => (
                  <div
                    className="sidebar-list-item dp-sidebar-cart"
                    key={index}
                  >
                    <div className="product-image pos-rel">
                      <Link href={`/shop-details/${item.id}`}>
                        <Image
                          src={item.image}
                          style={{ width: "100%", height: "auto" }}
                          alt="product"
                        />
                      </Link>
                    </div>
                    <div className="product-desc">
                      <div className="product-name">
                        <Link href={`/shop-details/${item.id}`}>
                          {item.product_name}{" "}
                        </Link>
                      </div>
                      <div className="product-pricing">
                        <span className="item-number">{item?.quantity}</span>
                        <span className="price-now">${item.price_now}</span>
                      </div>
                      <button
                        className="remove-item"
                        onClick={() => dispatch(remove_cart_product(item))}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="product-price-total">
                <span>Subtotal :</span>
                <span className="subtotal-price">${parseFloat(total)}</span>
              </div>
              <div className="sidebar-action-btn">
                <Link href="/cart" className="fill-btn">
                  View cart
                </Link>
                <Link href="/checkout" className="checkout-button">
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        onClick={() => setOpenCart(false)}
        className={`body-overlay ${openCart ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default SidebarCart;
