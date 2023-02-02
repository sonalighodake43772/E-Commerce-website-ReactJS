import React from 'react';
import Cart from './Cart';
import Container from "../components/Container";
import { Link } from "react-router-dom";


    const dummy_product = [
        
         
        
        {
            id: "m1",
          name: "ASUS",
          description:"Asus evobook s14 OLED",
          price:900,
          pimage:"images/laptop.jpg"
         
        },
        {
            id: "m2",
            name: "NIKON",
            description:"NIKON DS7500 DSLR",
            price: 500,
            pimage:"images/camera.jpg"
        },
        {
            id: "m3",
            name: "REALME",
            description:"REALME Neo Smart TV",
            price: 1200,
            pimage:"images/tv.jpg"
        },
        {
            id: "m4",
            name: "JBL",
            description:"JBL IPX700 Blutooth Speaker",
            price: 700,
            pimage:"images/speaker.jpg"
        },
       {
         id: "m5",
          name: "samsung ",
          description:"samsung galaxy buds ",
          price: 300,
          pimage:"images/acc.jpg"
       }
      ];
      const CartItem= () => {
        const productlist = dummy_product.map((product) => (
          <Cart
          id={product.id}
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            pimage={product.pimage}

          />
        ));
        return(
        <>
        <Container class1="cart-wrapper home-wrapper-2 py-5">
           <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className="cart-col-1">Product</h4>
                            <h4 className="cart-col-2">Price</h4>
                            <h4 className="cart-col-3">Quantity</h4>
                            <h4 className="cart-col-4">Total</h4>
                        </div> 
                       
                     
          {productlist}
           <div className="col-12 py-2 mt-4">
                        
                        <div className="d-flex flex-column align-items-end">
                                <h4>SubTotal: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className="button">
                                    Checkout
                                </Link>
                            
                        </div>
                    </div> 
                     </Container>
       
          </>
         
        );
        
      };



export default CartItem;
