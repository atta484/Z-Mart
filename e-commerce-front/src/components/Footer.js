import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className='py-5'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <div className='footer-top-data d-flex gap-2 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h3 className='text-white mb-0'>Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className='col-6'>
              <div className="input-group input-group-sm align-items-center position-relative">
                <input
                  type="text"
                  className="form-control p-2 px-3 input-style position-relative"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 subscribe" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3 className="text-white mb-4">Z-Mart</h3>
                <address className='mb-2'>
                  Arfa Karim IT Tower <br/>
                  346-B, Model Town, Lahore, 54000 <br/>
                  Pakistan
                </address>
                <a href='tel:+92 324 4771729' className='mb-2'>
                  +92 324 4771729
                </a>
                <a href='mailto:akrehman484@gmail.com' className='mb-3'>
                  akrehma484@gmail.com
                </a>
              </div>
              <div className="social-links d-flex gap-3 order-first order-lg-last mb-3 mb-lg-0">
                <Link to="/" className="twitter">
                  <BsTwitter className='fs-5'/>
                </Link>
                <Link to="/" className="facebook">
                  <BsFacebook className='fs-5'/>
                </Link>
                <Link to="/" className="instagram">
                  <BsInstagram className='fs-5'/>
                </Link>
                <Link to="/" className="linkedin">
                  <BsLinkedin className='fs-5'/>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4 className="text-white mb-4">Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/" className="mb-3">About Us</Link>
                <Link to="/" className="mb-3">FAQ</Link>
                <Link to="/" className="mb-3">Contact Us</Link>
                <Link to="/" className="mb-3">Size Chart</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4 className="text-white mb-4">Useful Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/" className="mb-3">Accessories</Link>
                <Link to="/" className="mb-3">Laptops</Link>
                <Link to="/" className="mb-3">Mobiles</Link>
                <Link to="/" className="mb-3">Smart Watches</Link>
                <Link to="/" className="mb-3">Tablets</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h4 className="text-white mb-4">Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/" className="mb-3">Privacy Policy</Link>
                <Link to="/" className="mb-3">Refund Policy</Link>
                <Link to="/" className="mb-3">Shipping Policy</Link>
                <Link to="/" className="mb-3">Terms Of Service</Link>
                <Link to="/" className="mb-3">Blogs</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <p className='text-center text-white mb-0'>
              Copyright &copy; {new Date().getFullYear()} . All Rights Reserved | Developed by Atta Ur Rehman
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer