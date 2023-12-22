import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import useModal from '@hooks/use-modal';
import VideoModal from '@components/common/modals/modal-video'
import blog_data from '@data/blog-data';
import 'react-modal-video/css/modal-video.min.css';

// swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';
import Pagination_Data from '@components/common/pagination';

const PostArea = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <div className="col-lg-8">
                <div className="postbox__wrapper pb-60">
                    {blog_data.slice(3, 6).map((item) => (
                        <div className={item.postBox} key={item.id}>
                            <div className={item.postboxThumb}>
                                {item.images && (
                                    <>
                                        <div>
                                            <Swiper
                                                modules={[Autoplay, Navigation]}
                                                loop={true}
                                                slidesPerView={1}
                                                spaceBetween={0}
                                                autoplay={{
                                                    delay: 4000,
                                                }}
                                                navigation={{
                                                    nextEl: ".postbox-slider-button-next",
                                                    prevEl: ".postbox-slider-button-prev",
                                                }}
                                            >
                                                {item.images.map((imageItem) => (
                                                    <SwiperSlide key={imageItem.id}>
                                                        <div className="postbox__slider-item">
                                                            <Image src={imageItem.image} alt="Blog" style={{ width: '100%', height: 'auto' }} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                        <div className="postbox-nav">
                                            <button className="postbox-slider-button-next">
                                                <i className="fas fa-long-arrow-right"></i>
                                            </button>
                                            <button className="postbox-slider-button-prev">
                                                <i className="fas fa-long-arrow-left"></i>
                                            </button>
                                        </div>
                                    </>
                                )}
                                {item.image && (
                                    <Link href={`/blog-details/${item.id}`}>
                                        <Image src={item.image} alt="Blog" style={{ width: '100%', height: 'auto' }} />
                                    </Link>
                                )}
                                {item.videoPlay && (
                                    <button type='button' className="play-btn popup-video" onClick={() => setIsVideoOpen(true)}>
                                        <i className="fas fa-play"></i>
                                    </button>
                                )}
                            </div>
                            <div className="postbox__content">
                                <div className="postbox__meta mb-10">
                                    <div className="blog__meta">
                                        <span>
                                            <Link href="/blog">
                                                <i className={item.userIcon}></i> {item.author}
                                            </Link>
                                        </span>
                                        <span>
                                            <i className={item.dateIcon}></i> {item.date}
                                        </span>
                                        <span>
                                            <Link href={`/blog-details/${item.id}`}>
                                                <i className={item.commentIcon}></i>
                                                {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <h3 className="postbox__title mb-20">
                                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                                </h3>
                                <div className="postbox__text mb-25">
                                    <p>{item.description}</p>
                                </div>
                                <div className="postbox__read-more">
                                    <Link href={`/blog-details/${item.id}`} className="fill-btn clip-btn">
                                        read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Pagination_Data />
                </div>
            </div>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"J72oMj5mWLw"} />
        </>
    );
};

export default PostArea;
