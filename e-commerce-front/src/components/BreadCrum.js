import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrum = (props) => {
  const {title} = props;
  return (
    <div className='breadcrumb bg-white text-dark mb-0 py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='d-flex justify-content-center align-items-end mb-0'>
              <Link className='text-dark' to="/">Home &nbsp;</Link> / &nbsp;<h4 className='text-dark mb-0'>{title}</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrum