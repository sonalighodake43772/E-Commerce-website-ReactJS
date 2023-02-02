import React from "react";
import { Stack} from "react-bootstrap";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

import Container from "../components/Container";

const Home = () => {
    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img
                                src="/images/main-banner.jpg"
                                className="img-fluid rounded-3"
                                alt="brandmain banner"
                            />
                            <div className="main-banner-content position-absolute">
                               
                              <p>wide range</p>
                                <p>best brand</p>
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="small-banner-content position-absolute">

                                    <h5>Laptops</h5>
                                    <p>
                                        From $999.00 <br /> or $41.62/mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    
                                    <h5>Watches</h5>
                                    <p>
                                        From $999.00 <br /> or $41.62/mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                 
                                    <h5>Mobiles</h5>
                                    <p>
                                        From $999.00 <br /> or $41.62/mo.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    
                                    <h5>Speakers</h5>
                                    <p>
                                        From $999.00 <br /> or $41.62/mo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductList/> 
                      
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
               
            </Container>
          
            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-1.webp" className="img-fluid" alt="" />
                            <div className="famous-content position-absolute">
                               
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-2.webp" className="img-fluid" alt="" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Studio Display</h5>
                                <h6 className="text-dark">600 nits of brightness.</h6>
                                <p className="text-dark">27-inch 5K Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-3.webp" className="img-fluid" alt="" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">smarphones</h5>
                                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                                <p className="text-dark">
                                    Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-4.webp" className="img-fluid" alt="" />
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">Home Speakers</h5>
                                <h6 className="text-dark">Room-filling sound.</h6>
                                <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
                     
    
        </>
    );
};

export default Home;
