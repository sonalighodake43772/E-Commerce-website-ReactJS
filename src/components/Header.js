import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";



const Header = () => {
    return (
        <>
           
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white" to="">ShopTronics</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                            <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">Our Store</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                                
                                <div>
                                    <Link to="/login" className=" text-white">
                                        
                                        <p className="mb-0 ms-3">
                                            Log in <br />
                                            My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <img src='images/cart.svg'  alt='' />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          
        </>
    );
};

export default Header; 
