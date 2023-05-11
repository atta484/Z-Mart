import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch, BsChevronDown } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text text-white mb-0">
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text text-end text-white mb-0">
                                Hotline:
                                <a className="text-white" href="tel:+92 324 4771729">
                                    &nbsp; +92 324 4771729
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>


            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Z-Mart</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    className="form-control px-4"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3 fs-6" id="basic-addon2">
                                    <BsSearch />

                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-end gap-2 gap-lg-4">
                                <div>
                                    <Link className="d-flex align-items-center text-white gap-2">
                                        <img src="images/compare.svg" alt="compare" />
                                        <p className="mb-0 d-none d-xl-block">
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center text-white gap-2">
                                        <img src="images/wishlist.svg" alt="wishlist" />
                                        <p className="mb-0 d-none d-xl-block">
                                            Favourite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center text-white gap-2">
                                        <img src="images/user.svg" alt="user" />
                                        <p className="mb-0 d-none d-xl-block">
                                            Log in <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center text-white gap-2">
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column gap-1">
                                            <span className="badge rounded-pill bg-white text-dark">0</span>
                                            <p className="mb-0 d-xl-block">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="menu-bottom d-flex align-items-center gap-5">
                            <div>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-3"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img src="images/menu.svg" alt="" />
                                        <span className="me-5 d-inline-block">
                                            Shop Categories
                                        </span>
                                        <BsChevronDown />
                                    </button>
                                    <ul
                                        className="dropdown-menu p-0"
                                        aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <Link className="dropdown-item text-white" to="">
                                                Action
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="dropdown-item text-white" to="">
                                                Another action
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="dropdown-item text-white" to="">
                                                Something else here
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-5">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/store">Our Store</NavLink>
                                    <NavLink to="/">Blogs</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header