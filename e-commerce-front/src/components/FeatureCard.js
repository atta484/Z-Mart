import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const FeatureCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    return (
        <>
            <div className= {` ${location.pathname == "/store" ? `col-${grid}` : "col-3"} `}>
            <Link className='feature-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='feature-image '>
                    <img src='images/watch.jpg' className='img-fluid' alt='feature product' />
                    <img src='images/watch-1.webp' className='img-fluid' alt='feature product' />
                </div>

                <div className='feature-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='feature-title'> Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className='price'>$100.00</p>
                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-3'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='cart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default FeatureCard