import React, { useState, useEffect } from "react";
import cover from "./assets/cover.png";
import { db } from "./firebase";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   const prevProducts=[];
  //   db.collection("Product").onSnapshot((snapshot) => {
  //     let changes = snapshot.docChanges();
  //     changes.forEach((change) => {
  //       if (change.type === "added") {
  //         prevProducts.push({
  //           ProductID: change.doc.id,
  //           ProductName: change.doc.data().productName,
  //           ProductPrice: change.doc.data().productPrice,
  //           ProductImage: change.doc.data().productImage,
  //         });
  //       }
  //       setProducts(prevProducts);
  //     });

  //   });
  // }, []);
  // console.log(products);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const tempArray = [];
    const response = db.collection("Product");
    const data = await response.get();
    // console.log(data.docs[1].data());
    data.docs.map((item) => {
      // setProducts((key) => {
      //   return [...key,items.data()]
      // })
      setProducts([...products,item.data()])
      console.log(item.data());
      console.log(products)
      // console.log(tempArray);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img src={cover} alt="" className="home__image" />
      </div>

      {products.map((id) => {
        return <Product />;
      })}
    </div>
  );
}

export default Home;
