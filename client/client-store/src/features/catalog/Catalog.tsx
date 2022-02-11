import React, { useEffect, useState } from 'react';
import { Product } from '../../models/product';
import ProductList from './ProductList';

function Catalog() {
   const[products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   fetch("https://localhost:7162/api/products")
   .then(response => response.json())
   .then(data => setProducts(data))
  }, []);
  

  // function addProducts()  {
  //   setProducts(
  //     prevState =>[...prevState,  
  //       { 
  //         id: prevState.length + 101,
  //         name: "product" + (prevState.length + 1),
  //         description: "hello",
  //         price: (prevState.length * 100) + 100,
  //         pictureUrl: "http://picsum/photos/200",
  //         type: "string",
  //         brand: "string",
  //         quantityInStock: 20,
  //       }])
  // }
  return (
  <div>
      <ProductList products={products}/>
     
      
  </div>);
}

export default Catalog;
