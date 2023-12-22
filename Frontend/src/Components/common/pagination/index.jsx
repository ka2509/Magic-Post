import Link from 'next/link';
import React from 'react';

const Pagination_Data = () => {
    return (
        <div className="basic-pagination">
            <nav>
                <ul>
                    <li>
                        <Link href="/blog">
                            <i className="fas fa-long-arrow-left"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">1</Link>
                    </li>
                    <li>
                        <span className="current">2</span>
                    </li>
                    <li>
                        <Link href="/blog">3</Link>
                    </li>
                    <li>
                        <Link href="/blog">...</Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <i className="fas fa-long-arrow-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination_Data;