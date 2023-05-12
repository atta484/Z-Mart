import React from 'react'
import BreadCrum from '../components/BreadCrum'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom'

const OurStore = () => {
    return (
        <>
            <BreadCrum title="Our Store" />
            <div className="store-wrapper py-5">
                <div className='container-xxl'>
                    <div className="row">
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h5 className='filter-title my-3'>Shop By Categories</h5>

                                <ul className='filter-content d-flex flex-column'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>

                            </div>
                            <div className='filter-card mb-3'>
                                <h5 className='filter-title my-3'>Filter By</h5>
                                <div className='filter-content'>
                                    <h6 className='sub-title'>Availability</h6>
                                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label mt-1" htmlFor="flexCheckDefault">
                                            In stock(21)
                                        </label>
                                    </div>
                                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckChecked"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label mt-1" htmlFor="flexCheckChecked">
                                            Out of stock(1)
                                        </label>
                                    </div>
                                </div>
                                <div className='filter-content'>
                                    <h6 className='sub-title'>Price</h6>
                                    <div className='price-range gap-3'>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="number"
                                                className="form-control price-input"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="number"
                                                className="form-control price-input"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-content'>
                                    <h6 className='sub-title'>Colors</h6>
                                    <div className='color-range'>
                                        <ul className='color ps-0 gap-2'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='filter-content'>
                                    <h6 className='sub-title'>Size</h6>
                                    <div className=''>
                                        <div className="form-check d-flex align-items-center gap-2 mb-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="small"
                                            />
                                            <label className="form-check-label mt-1" htmlFor="small">
                                                S (21)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center gap-2 mb-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="medium"
                                            />
                                            <label className="form-check-label mt-1" htmlFor="medium">
                                                M (12)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center gap-2 mb-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="large"
                                            />
                                            <label className="form-check-label mt-1" htmlFor="large">
                                                L (7)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center gap-2 mb-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="extra-large"
                                            />
                                            <label className="form-check-label mt-1" htmlFor="extra-large">
                                                XL (3)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center gap-2 mb-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="full"
                                            />
                                            <label className="form-check-label mt-1" htmlFor="full">
                                                XXL (0)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h5 className='filter-title my-3'>Product Tag</h5>
                                <div className='filter-content'>
                                    <ul className='product-tag d-flex flex-wrap align-items-center ps-0'>
                                        <li className='single-tag'>
                                            <Link>Headphones</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Laptops</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Mobiles</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Speakers</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Oppo</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Tablets</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>MacBook</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>Iphone</Link>
                                        </li>
                                        <li className='single-tag'>
                                            <Link>MacBook Pro</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h5 className='filter-title my-3'>Random Products</h5>
                                <div className='filter-content'>
                                    <div className='small-card row justify-content-between'>
                                        <div className='col-lg-4'>
                                            <img src='images/headphone.jpg' className='img-fluid' alt='special product' />
                                        </div>
                                        <div className='col-lg-8'>
                                            <div className=''>
                                                <h5 className='special-product-title mb-1'> Kids headphones bulk 10 pack multi colored for students</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value="3"
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className='price'>
                                                    <b className='text-dark'>$78.00</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-content'>
                                    <div className='small-card row justify-content-between'>
                                        <div className='col-lg-4'>
                                            <img src='images/headphone.jpg' className='img-fluid' alt='special product' />
                                        </div>
                                        <div className='col-lg-8'>
                                            <div className=''>
                                                <h5 className='special-product-title mb-1'> Kids headphones bulk 10 pack multi colored for students</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value="3"
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className='price'>
                                                    <b className='text-dark'>$78.00</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore