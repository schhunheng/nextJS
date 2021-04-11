import react, { useContext } from "react";
import { ProductContext } from "./../contexts/ProductContext";
import Products from "./../components/presentations/products";
import Grid from "@material-ui/core/Grid";
const Shop = () => {
  const { cards, setCards } = useContext(ProductContext);
  console.log(cards);
  var total=0 ; 
  for(let i =0 ; i< cards.length ;i ++){
    total=total + cards[i].cost
  }
  return (
    <div>
      <Grid container justify="center">
        {cards.map((shop, index) => {
          return (
            <Grid style={{padding: 20 , margin : 5}} key={index} item xs={10} sm={5} md={3}>
              <Products url={shop.url} name={shop.name} price={shop.cost}/>
            </Grid>
          )
        })}
      </Grid>
      <div> 
          `${total}`
      </div>
    </div>
  );
};

export default Shop;
