import React from 'react'
import BreadCrum from '../components/BreadCrum'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
    return (
        <div>
            <BreadCrum title="Blogs" />
            <div className='blogs-wrapper'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h5 className='filter-title my-3'>Find By Categories</h5>

                                <ul className='filter-content d-flex flex-column'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>

                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <BlogCard />
                                </div>
                                <div className='col-lg-6'>
                                    <BlogCard />
                                </div>
                                <div className='col-lg-6'>
                                    <BlogCard />
                                </div>
                                <div className='col-lg-6'>
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs