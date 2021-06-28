import React, { useState, useEffect } from "react";
import cover from "./assets/cover.jpg";
import { db } from "./firebase";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import Fade from 'react-reveal/Fade';

function Home() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = db.collection("Product");
    const data = await response.get();
    data.docs.map((item) => {
      console.log(item.data().productImage)
      setProducts((prevState) => {
        return [...prevState, item.data()]
      })
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);





  return (
    <div className="home container-fluid">
      <div className="home__container">
        <Fade top>
          <p className='text-white home__text'>Lorem ipsum dolor sit amet</p>
          <p className='text-white home__text2'>Excepteur sint occaecat</p>

        </Fade>

      </div>
      <div className="row">

        {products.map((id) => {
          return (
            <div className="col-lg-4 col-l-4 col-md-6 col-s-6 col-xs-12">
              <Product title={id.productName} price={id.productPrice}
                rating={Math.floor(Math.random() * 2) + 3} image={id.productImage} />
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Home;
