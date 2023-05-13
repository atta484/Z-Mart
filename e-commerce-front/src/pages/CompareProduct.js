import React from 'react'
import BreadCrum from '../components/BreadCrum'

const CompareProduct = () => {
    return (
        <>
            <BreadCrum title="Compare" />
            <div className='compare-product-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' className='position-absolute cross' alt='cross' />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid' alt='' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='feature-title'> Kids headphones bulk 10 pack multi colored for students</h5>
                                    <p className='price'>
                                        <span>$78.00</span>&nbsp;<strike className='text-danger'>$100.00</strike>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct