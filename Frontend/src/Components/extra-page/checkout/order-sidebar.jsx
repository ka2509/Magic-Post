import useCartInfo from "@hooks/use-cart-info";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


const OrderSidebar = () => {
  const { total } = useCartInfo();
  const { cartProducts } = useSelector((state) => state.cart);
  const [withShiping, setWithShiping ] = useState(0)
  
  const shippingCost = 7;

  const handleShipping = (shippingCost) =>{
    setWithShiping(total + shippingCost)
    
  }
  const handleFreeShipping = () =>{
    setWithShiping(total)
  }



  
  return (
    <div className="col-lg-6">
      <div className="your-order mb-30 ">
        <h3>Your order</h3>
        <div className="your-order-table table-responsive">
          <table>
            <thead>
              <tr>
                <th className="product-name">Product</th>
                <th className="product-total">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item, index) => (
                <tr className="cart_item" key={index}>
                  <td className="product-name">
                    {item.product_name}
                  </td>
                  <td className="product-total">
                    <span className="amount">
                      ${item?.quantity * item.price_now}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="cart-subtotal">
                <th>Cart Subtotal</th>
                <td>
                  <span className="amount">${parseFloat(total)}</span>
                </td>
              </tr>
              <tr className="shipping">
                <th>Shipping</th>
                <td>
                  <ul>
                    <li>
                    <input onClick={()=>handleShipping(shippingCost)} type="radio" id="flatRate" name="fav_language" />
                      <label className="ml-10" htmlFor="flatRate">
                          Flat Rate: <span className="amount">${shippingCost}</span>
                      </label>
                    </li>
                    <li>
                    <input onClick={()=>handleFreeShipping()} type="radio" id="shipping" name="fav_language" />
                      <label className="ml-10" htmlFor="shipping"> Free Shipping:</label>
                    </li>
                    <li></li>
                  </ul>
                </td>
              </tr>
              <tr className="order-total">
                <th>Order Total</th>
                <td>
                  <strong>
                    <span className="amount"> $ {withShiping > 0 ? withShiping : ` ${parseFloat(total)} ` } </span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="payment-method">
          <div className="accordion" id="checkoutAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="checkoutOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#bankOne"
                  aria-expanded="true"
                  aria-controls="bankOne"
                >
                  Direct Bank Transfer
                </button>
              </h2>
              <div
                id="bankOne"
                className="accordion-collapse collapse show"
                aria-labelledby="checkoutOne"
                data-bs-parent="#checkoutAccordion"
              >
                <div className="accordion-body">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order {`won’t`} be
                  shipped until the funds have cleared in our account.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="paymentTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#payment"
                  aria-expanded="false"
                  aria-controls="payment"
                >
                  Cheque Payment
                </button>
              </h2>
              <div
                id="payment"
                className="accordion-collapse collapse"
                aria-labelledby="paymentTwo"
                data-bs-parent="#checkoutAccordion"
              >
                <div className="accordion-body">
                  Please send your cheque to Store Name, Store Street, Store
                  Town, Store State / County, Store Postcode.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="paypalThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#paypal"
                  aria-expanded="false"
                  aria-controls="paypal"
                >
                  PayPal
                </button>
              </h2>
              <div
                id="paypal"
                className="accordion-collapse collapse"
                aria-labelledby="paypalThree"
                data-bs-parent="#checkoutAccordion"
              >
                <div className="accordion-body">
                  Pay via PayPal; you can pay with your credit card if you {`don’t`}
                  have a PayPal account.
                </div>
              </div>
            </div>
          </div>
          <div className="order-button-payment mt-20">
            <button type="submit" className="fill-btn">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSidebar;
