import useCartInfo from "@hooks/use-cart-info";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_product, decrease_quantity } from "src/redux/features/cart-slice";

const ProductContent = ({ item }) => {
  const { cartProducts } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  const handleChange = (e) => {};
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    dispatch(decrease_quantity(item));
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    dispatch(cart_product(item));
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="product-side-info mb-60">
          <div className="product-category-review">
            <div className="product-d-review">
              <div className="rating">
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
                <Link href="#">
                  <i className="far fa-star"></i>
                </Link>
              </div>
              <span>10 Reviews</span>
            </div>
          </div>
          <h4 className="product-name">
            {item?.product_name && item.product_name}
          </h4>
          <div className="product-price">
            <span className="price-now">${item?.price_now}</span>
          </div>
          <p className="mb-30">
            Gardomia has brought to you 3 Pieces Combo Pack PS23 garden
            solution. It is a completely modern product and you feel comfortable
            to put on your garden. Buy it at the best price.
          </p>
          <div className="product-quantity-cart mb-30">
            <div className="product-quantity-form">
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <button onClick={handleDecrease} className="cart-minus">
                  <i className="far fa-minus"></i>
                </button>
                <input
                  className="cart-input"
                  onChange={handleChange}
                  value={quantity}
                  type="text"
                />
                <button onClick={handleIncrease} className="cart-plus">
                  <i className="far fa-plus"></i>
                </button>
              </form>
            </div>
            <Link href="/cart" className="fill-btn">
              View Cart
            </Link>
          </div>
          <div className="product-d-meta sku mb-10">
            <span>SKU:</span>
            <span>BO1D0MX8SJ</span>
          </div>
          <div className="product-d-meta ockcategories mb-10">
            <span>Categories:</span>
            <span>Garden, Flower, Leaf</span>
          </div>
          <div className="product-d-meta tags mb-10">
            <span>Tags:</span>
            <span>Vegetable, Flower, Leaf</span>
          </div>
          <div className="product-d-meta share mb-10">
            <span>Share:</span>
            <div className="social-links shop-social-link">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.behance.net/">
                    <i className="fab fa-behance"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
