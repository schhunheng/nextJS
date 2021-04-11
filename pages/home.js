import React, { useState, useEffect, useContext } from "react";
import List from "./../components/presentations/list";
import Example from "./../components/presentations/test";
import Products from "./../components/presentations/products";
import Grid from "@material-ui/core/Grid";
import {ProductContext} from './../contexts/ProductContext'
const products = [
  {
    name: "T-Shirt",
    url: "shirt/f1.jpg",
    cost: 10,
  },
  {
    name: "T-Shirt",
    url: "shirt/f2.jfif",
    cost: 5,
  },
  {
    name: "T-Shirt",
    url: "shirt/f2.jfif",
    cost: 25,
  },
  {
    name: "T-Shirt",
    url: "shirt/f1.jpg",
    cost: 12,
  },
  {
    name: "T-Shirt",
    url: "shirt/f2.jfif",
    cost: 35,
  },
  {
    name: "T-Shirt",
    url: "shirt/f2.jfif",
    cost: 90,
  },
];

function Home() {
  const {cards, setCards}=useContext(ProductContext)
  useEffect(() => {
    document.title = `Home page`;
  });
  
  const addCard =(card)=>{
    setCards(cards.concat(card));
    console.log(cards);
  }

  return (
    <div>
      <Grid container justify="center">
        {products.map((product, index) => {
          return (
            <Grid key={index} style={{padding: 20, margin : 5}} item xs={10} sm={5} md={3}> 
              <Products
                name={product.name}
                url={product.url}
                price={product.cost}
                onclick={()=>addCard(product)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default Home;
