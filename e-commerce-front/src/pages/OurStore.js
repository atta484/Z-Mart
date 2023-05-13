import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
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
                        <div className='col-9'>
                            <div className='filter-card filter-sort-grid p-2 mb-3'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className='d-flex align-items-center gap-2'>
                                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Alphabatically, A-Z</option>
                                            <option value="title-descending">Alphabatically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <p className='total-products mb-0 me-2'>21 Products</p>
                                        <div className='grid d-flex align-items-center gap-2'>
                                            <img src='images/gr4.svg' className='d-block img-fluid' onClick={() => { setGrid(3) }} alt='grid' />
                                            <img src='images/gr3.svg' className='d-block img-fluid' onClick={() => { setGrid(4) }} alt='grid' />
                                            <img src='images/gr2.svg' className='d-block img-fluid' onClick={() => { setGrid(6) }} alt='grid' />
                                            <img src='images/gr.svg' className='d-block img-fluid' onClick={() => { setGrid(12) }} alt='grid' />
                                        </div>
                                    </div>
                                    {/* <div className="collection-btn d-flex align-items-center gap-2">
                                        <div className="btn-group">
                                            <Link href="#" id="col_4" className="btn btn-default btn-sm active">
                                                <img src='images/gr4.svg' className='icon d-block img-fluid' alt='grid' />
                                            </Link>
                                            <Link href="#" id="col_3" className="btn btn-default btn-sm">
                                                <img src='images/gr3.svg' className='icon d-block img-fluid' alt='grid' />
                                            </Link>
                                            <Link href="#" id="col_2" className="btn btn-default btn-sm">
                                                <img src='images/gr2.svg' className='icon d-block img-fluid' alt='grid' />
                                            </Link>
                                            <Link href="#" id="col_1" className="btn btn-default btn-sm">
                                                <img src='images/gr.svg' className='icon d-block img-fluid' alt='grid' />
                                            </Link>
                                        </div>
                                        <div className="product-count light" role="status">
                                            <div className="product-count__text">
                                                <span id="ProductCount" className="">
                                                    21 products
                                                </span>
                                            </div>
                                            <div className="loading-overlay__spinner">
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    role="presentation"
                                                    className="spinner"
                                                    viewBox="0 0 66 66"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        className="path"
                                                        fill="none"
                                                        strokeWidth={6}
                                                        cx={33}
                                                        cy={33}
                                                        r={30}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                            <div className='row'>
                                <FeatureCard grid={grid} />
                                <FeatureCard grid={grid} />
                                <FeatureCard grid={grid} />
                                <FeatureCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore