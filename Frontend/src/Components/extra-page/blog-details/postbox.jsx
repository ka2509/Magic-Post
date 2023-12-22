import Link from 'next/link';
import React from 'react';
import imgTwo from '@assets/img/blog/blog-page-img-3.jpg';
import Image from 'next/image';
import PostTags from './post-tags';

const PostBox = ({ item }) => {
    return (
        <div className="postbox__item format-image mb-55">
            <div className="postbox__thumb w-img mb-35">
                {item?.image && <Image src={item?.image} style={{ width: "100%", height: "auto" }} alt="blog-thumg" />}
                {item?.images && <Image src={item?.images[0]?.image} style={{ width: "100%", height: "auto" }} alt="blog-thumg" />}
            </div>
            <div className="postbox__content">
                <div className="postbox__meta mb-10">
                    <div className="blog__meta">
                        <span><Link href="/blog-details"><i className="fas fa-user"></i>{item?.author && item.author}</Link></span>
                        <span><i className="fas fa-alarm-clock"></i> {item?.date && item.date} {item?.month && item.month}</span>
                        <span><Link href="#"><i className="fas fa-comments"></i>
                        {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                        </Link></span>
                    </div>
                </div>
                <div className="section__title mb-20">
                    <h3 className="title-sm">{item?.title && item.title}</h3>
                </div>
                <div className="postbox__text mb-30">
                    <p className="content-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem voluptas sit
                        aspernatur aut odit aut fugit.</p>
                    <p className="mb-30">Nancy boy Charles down the pub get stuffed mate easy peasy brown bread
                        car boot squiffy loo, blimey arse over tit {`it’s`} your round cup of char horse play
                        chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo
                        that gormless off his nut a blinding shot Harry give us a bell, {`don’t`} get shirty with
                        me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard
                        spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely
                        bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug
                        cor blimey guvnor, burke bog-standard brown bread wind up barney.</p>
                    <blockquote>
                        <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag
                            on your bike mate {`don’t`} get shirty with me super, Jeffrey bobby Richard cheesed off
                            spend a penny a load of old tosh blag horse.</p>
                        <p><cite>Hasibul Hossen</cite></p>
                    </blockquote>
                    <p className="mb-25">Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon
                        me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge
                        barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff
                        grub elizabeth cheesed off {`don’t`} get shirty with me arse over tit mush a blinding shot
                        young delinquent bloke boot blatant.</p>
                    <div className="postbox__thumb w-img mb-30">
                        <Image src={imgTwo} style={{ width: "100%", height: "auto" }} alt="blog-thumg" />
                    </div>
                    <div className="section__title mb-20">
                        <h3 className="title-sm">Web Design Done Well Perfectly Pointless </h3>
                    </div>
                    <p className="content-para">Are you taking the piss young delinquent wellies absolutely
                        bladdered the Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor
                        blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of
                        old tosh get stuffed mate I {`don’t`} want no agro the full monty grub Jeffrey faff about
                        my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm {`I’m`} telling bugger
                        plastered, jolly good say bits and bobs show off show off pick your nose and blow off
                        cuppa blower my lady I lost the plot.</p>
                    <p className="mb-45">Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon
                        me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge
                        barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff
                        grub elizabeth cheesed off {`don’t`} get shirty with me arse over tit mush a blinding shot
                        young delinquent bloke boot blatant.</p>

                    <PostTags />
                </div>
            </div>
        </div>
    );
};

export default PostBox;