import Link from 'next/link';
import React from 'react';

const ProductTag = () => {
    return (
        <div className="product-left-item mb-45">
            <h6 className="product-widget-title">Product tags</h6>
            <div className="tagcloud">
                <Link href="/shop">Bobbin</Link>
                <Link href="/shop">Clamp</Link>
                <Link href="/shop">Discs</Link>
                <Link href="/shop">Foot</Link>
                <Link href="/shop">Lifter</Link>
                <Link href="/shop">materials</Link>
                <Link href="/shop">Needle</Link>
                <Link href="/shop">packing</Link>
                <Link href="/shop">Plate</Link>
                <Link href="/shop">Presser</Link>
                <Link href="/shop">Spool</Link>
                <Link href="/shop">Winder</Link>
            </div>
        </div>
    );
};

export default ProductTag;