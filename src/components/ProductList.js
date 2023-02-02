import React from 'react';
import ProductCard from './ProductCard';

    const dummy_meals = [
        
         
        
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
      const ProductList= () => {
        const productlist = dummy_meals.map((meals) => (
          <ProductCard
          id={meals.id}
            key={meals.id}
            name={meals.name}
            description={meals.description}
            price={meals.price}
            pimage={meals.pimage}

          />
        ));
        return(
          < div className="col-6 mb-3">
                        
                        <div className="d-flex justify-content-between  gap-10">
           
          {productlist}
       
          </div>
          </div>
         
        );
        
      };



export default ProductList;
