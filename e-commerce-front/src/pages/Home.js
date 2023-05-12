import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import FeatureCard from '../components/FeatureCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid' alt='main-banner' />
                <div className='main-banner-content position-absolute'>
                  <h6>SUPERCHARGED FOR PROS.</h6>
                  <h2>iPad S13+ Pro.</h2>
                  <p>From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='d-flex flex-wrap gap-3 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg' className='img-fluid' alt='main-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h6>Best Sale</h6>
                    <h2>Laptops Max</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' className='img-fluid' alt='main-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h6>New Arrival</h6>
                    <h2>Buy IPad Air</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' className='img-fluid' alt='main-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h6>15% Off</h6>
                    <h2>SmartWatch 7</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid' alt='main-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h6>Free Engraving</h6>
                    <h2>AirPods Max</h2>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center gap-4">
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">!00% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/smartwatch.avif' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/game.webp' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Mobiles</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/mobile.webp' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Tablets</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tablet.webp' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>LCD/LED</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/led.webp' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/speaker-1.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6>AirPods</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='feature-wrapper py-5 mt-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 title-wrapper'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='famous-card position-relative'>
                <div className='famous-main-image'>
                  <img src='images/famous-01.webp' className='img-fluid' alt='famous' />
                </div>
                <div className='famous-content position-absolute'>
                  <h6 className='text-white'>BIG SCREEN</h6>
                  <h3 className='text-white'>Smart Watch Series 7</h3>
                  <p className='text-white'>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='famous-card position-relative'>
                <div className='famous-main-image'>
                  <img src='images/famous-02.webp' className='img-fluid' alt='famous' />
                </div>
                <div className='famous-content position-absolute'>
                  <h6>Studio Display</h6>
                  <h3>600 nits of brightness.</h3>
                  <p>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='famous-card position-relative'>
                <div className='famous-main-image'>
                  <img src='images/famous-03.webp' className='img-fluid' alt='famous' />
                </div>
                <div className='famous-content position-absolute'>
                  <h6>smartphones</h6>
                  <h3>iphone 13 Pro.</h3>
                  <p>Now in Green. From $999.00 or $41.62/mo.
                    for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='famous-card position-relative'>
                <div className='famous-main-image'>
                  <img src='images/famous-04.webp' className='img-fluid' alt='famous' />
                </div>
                <div className='famous-content position-absolute'>
                  <h6>home speakers</h6>
                  <h3>Room-filling sound.</h3>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 title-wrapper'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 title-wrapper'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 title-wrapper'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home