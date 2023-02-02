import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import { Link, useLocation } from "react-router-dom";


const ProductCard = (props) => {
    const price=`$${props.price.toFixed(2)}`;

    return (
        <>
           
           <div className="col-5 mb-3">
            <div className="special-product-card">
               
                    <div>
                        <img src={props.pimage}  alt="img" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">{props.name}</h5>
                        <h6 className="title">{props.description}</h6>
                       
                        <p className="price">
                            <span className="red-p">{price}</span>
                        </p>
                       
                        
                        <Link className="button " to=''>Add to Cart</Link>
                   
                </div>
            </div>
        </div>
        

    
                
                  
            
        
        </>
    );
};

export default ProductCard;
