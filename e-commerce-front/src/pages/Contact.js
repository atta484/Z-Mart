import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { AiFillHome } from 'react-icons/ai'
import { MdCall, MdMail } from 'react-icons/md'
import { BsInfoLg } from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <BreadCrum title="Contact Us" />
      <div className='contact-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row mb-5'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317112602!2d74.33999707616042!3d31.475772949343185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683931733537!5m2!1sen!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className='contact-card p-5'>
            <div className='row g-5'>
              <div className='col-lg-6'>
                <h3 className='mb-4'>Contact</h3>
                <form className=''>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control field__input"
                      id="floatingInput"
                      placeholder="Name"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control field__input"
                      id="floatingInput"
                      placeholder="Email"
                    />
                    <label htmlFor="floatingInput">Email*</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control field__input"
                      id="floatingInput"
                      placeholder="Phone number"
                    />
                    <label htmlFor="floatingInput">Phone number</label>
                  </div>
                  <div className="field mb-4">
                    <textarea
                      rows={5}
                      id="ContactForm-body"
                      className="text-area field__input"
                      name="contact[Comment]"
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                  <button className='button'>Submit</button>
                </form>
              </div>
              <div className='col-lg-6'>
                <h3 className='mb-4'>Get in touch with us</h3>
                <div className='contact-inner-wrapper'>
                <ul className='ps-0'>
                  <li className='d-flex align-items-center gap-3 mb-4'>
                    <AiFillHome className='fs-5'/>
                    <span>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</span>
                  </li>
                  <li className='d-flex align-items-center gap-3 mb-4'>
                    <MdCall className='fs-5'/>
                    <span>(+91)7-723-4608</span>
                  </li>
                  <li className='d-flex align-items-center gap-3 mb-4'>
                    <MdMail className='fs-5'/>
                    <span><a href="" target="_Self">demo@company.com</a></span>
                  </li>
                  <li className='d-flex align-items-center gap-3 mb-4'>
                    <BsInfoLg className='fs-5'/>
                    <span>Monday – Friday 10 AM – 8 PM</span>
                  </li>
                </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact