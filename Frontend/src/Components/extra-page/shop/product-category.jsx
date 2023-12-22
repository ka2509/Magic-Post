import Link from 'next/link';
import React from 'react';

const ProductCategory = () => {
    return (
        <div className="product-left-item mb-45">
            <h6 className="product-widget-title">Product categories</h6>
            <ul className="product-categories">
                <li className="cat-item cat-item-62"><Link href="/shop">Box Tape &amp; Cutters</Link></li>
                <li><Link href="/shop">Corrugated Boxes</Link></li>
                <li><Link href="/shop">Labeling Accessories</Link></li>
                <li><Link href="/shop">Packing Materials</Link></li>
                <li><Link href="/shop">Uncategorized</Link></li>
            </ul>
        </div>
    );
};

export default ProductCategory;