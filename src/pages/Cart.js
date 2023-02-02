import React from "react";
import { AiFillDelete } from "react-icons/ai";

import Container from "../components/Container";

const Cart = (props) => {
    return (
        <>

                <div className="row">
                    <div className="col-12">
                     
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img src={props.pimage} className="img-fluid" alt="product image" />
                                </div>
                                <div className="w-75">
                                    <p>{props.name}</p>
                                    <p>{props.description}</p>
                                   
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">{props.price}</h5>
                            </div>
                            <div className="cart-col-3 d-flex gap-15">
                                <div>
                                    <input className="form-control" type="number" name="" min={1} max={10} id="" />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                       </div>
                        
                   
                </div>
               
           
        </>
    );
};

export default Cart;
