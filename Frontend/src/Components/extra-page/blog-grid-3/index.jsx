import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog_data from "@data/blog-data";

const index = () => {
  return (
    <section className="dp-blog-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {blog_data.slice(15, 24).map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={item.id}>
              <div className="dp-blog-grid-wrapper mb-30">
                <div className="dp-blog-grid-thumb">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      decoding="async"
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="Blog"
                    />
                  </Link>
                </div>
                <div className="dp-blog-grid-content-wrapper">
                  <div className="dp-blog-grid-meta-wrapper">
                    <span>
                      <Link href={`/blog-details/${item.id}`}>
                        <i aria-hidden="true" className="far fa-user"></i>
                        {item.author}
                      </Link>
                    </span>
                    <span>
                      <Link href={`/blog-details/${item.id}`}>
                        <i
                          aria-hidden="true"
                          className="far fa-comment-alt"
                        ></i>
                        {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                      </Link>
                    </span>
                  </div>
                  <div className="dp-blog-grid-content bdevs-el-content">
                    <h2 className="dp-grid-title bdevs-el-title">
                      <Link href={`/blog-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h2>
                    <div className="blog__item-text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
