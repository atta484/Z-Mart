import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    return (
        <div className='col-lg-6'>
            <div className='special-product-card'>
                <div className='row justify-content-between'>
                    <div className='col-lg-5'>
                        <img src='images/watch.jpg' className='img-fluid' alt='special product' />
                    </div>
                    <div className='col-lg-7'>
                        <div className='special-product-content'>
                            <h6 className='brand'>Havels</h6>
                            <h5 className='special-product-title'> Kids headphones bulk 10 pack multi colored for students</h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value="3"
                                edit={false}
                                activeColor="#ffd700"
                            />,
                            <p className='price'>
                                <span>$78.00</span>&nbsp;<strike className='text-danger'>$100.00</strike>
                            </p>
                            <div className='discount-till d-flex align-items-center gap-2 mb-2'>
                                <p className='mb-0'>
                                    <b>5 </b>days
                                </p>
                                <div className='d-flex align-items-center gap-2'>
                                    <span className='badge rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ width: '2rem', height: '2rem' }}>7</span>:
                                    <span className='badge rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ width: '2rem', height: '2rem' }}>7</span>:
                                    <span className='badge rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ width: '2rem', height: '2rem' }}>7</span>
                                </div>
                            </div>
                            <div className='prod-count mb-3'>
                                <p className='mb-1'>Prouct: 5</p>
                                <div className="progress" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className='button'>View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct