import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <>
            {/* <div className='col-lg-4'> */}
                <div className='blog-card'>
                    <div className='blog-card-image'>
                        <img src='images/blog-1.jpg' className='image-fluid image' alt='blog' />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>Dec 1, 2022</p>
                        <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                        {/* <p className='desc'>
                            You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.
                        </p> */}
                        <p class="desc">You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...</p>
                        <Link to="/" className='button'>
                            Read More
                        </Link>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default BlogCard