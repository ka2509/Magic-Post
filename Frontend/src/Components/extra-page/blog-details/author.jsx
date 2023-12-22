import React from 'react';
import authorImg from '@assets/img/blog/author.jpg';
import Image from 'next/image';

const Author = () => {
    return (
        <div className="blog__author mb-55 d-sm-flex postbox__shadow">
            <div className="blog__author-img mb-30 mr-30">
                <Image src={authorImg} style={{ width: "auto", height: "auto" }} alt="img" />
            </div>
            <div className="blog__author-content mb-30">
                <h5>David Warner</h5>
                <span>Author</span>
                <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of {`how's`} your
                    father boot.!</p>
            </div>
        </div>
    );
};

export default Author;
