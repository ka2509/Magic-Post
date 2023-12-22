import React from "react";
import Link from "next/link";
// internal
import ForgotForm from "@components/forms/forgot-form";

const ForgotArea = () => {
  return (
    <section className="login__area pt-110 pb-110">
      <div className="container">
        <div className="login__inner p-relative z-index-1">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="login__wrapper">
                <div className="login__top mb-30 text-center">
                  <h3 className="login__title">Forgot Password?</h3>
                  <p>Enter your email address to request password reset.</p>
                </div>
                <div className="login__form">
                  <ForgotForm />
                  <div className="login__register-now">
                    <p>
                      Remember your password? <Link href="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotArea;
