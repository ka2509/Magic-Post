import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsArea = () => {
  return (
    <section
      class="about__area-2 pt-120 pb-60 wow fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay=".3s"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-xl-5">
            <div
              class="about__content-2 mb-60 wow fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            >
              <div class="section__title mb-50">
                <span class="sub-title">about us</span>
                <h2 class="title">
                  A company involved in <br /> servicing, maintenance.
                </h2>
              </div>
              <div class="about__content-tab-2 mt-40">
                <ul class="nav mb-5" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active clip-lg-btn"
                      id="approch-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#approch"
                      type="button"
                      role="tab"
                      aria-controls="approch"
                      aria-selected="true"
                    >
                      our approch
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link clip-lg-btn"
                      id="goal-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#goal"
                      type="button"
                      role="tab"
                      aria-controls="goal"
                      aria-selected="false"
                    >
                      our goal
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link clip-lg-btn"
                      id="mision-tab"
                      type="button"
                      role="tab"
                      aria-controls="mision"
                      aria-selected="false"
                    >
                      our mision
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="approch"
                    role="tabpanel"
                    aria-labelledby="approch-tab"
                  >
                    <p>
                      From finance, retail, and travel, to social media,
                      cybersecurity, adtech, and more, market leaders are
                      leveraging web data to maintain their transt advantage.
                      Discover how it can work for you.
                    </p>
                    <div class="about__content-tab-btn mt-35">
                      <a class="fill-btn clip-md-btn" href="about-us.html">
                        learn more
                      </a>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="goal"
                    role="tabpanel"
                    aria-labelledby="goal-tab"
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      {`don't`} look even slightly believable.
                    </p>
                    <div class="about__content-tab-btn mt-35">
                      <a class="fill-btn clip-md-btn" href="about-us.html">
                        learn more
                      </a>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="mision"
                    role="tabpanel"
                    aria-labelledby="mision-tab"
                  >
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus.
                    </p>
                    <div class="about__content-tab-btn mt-35">
                      <a class="fill-btn clip-md-btn" href="about-us.html">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-7">
            <div
              class="about__img-2 mb-60 ml-60 w-img p-relative wow fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <Image
                src="assets/img/about/about-us-2.png"
                style={{ width: "100%", height: "auto" }}
                alt="About"
              />
              <div class="about__btn-2">
                <Link
                  href="https://www.youtube.com/watch?v=5Gsam6jyRI0"
                  class="popup-video play-btn play-btn-white"
                >
                  <i class="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsArea;
