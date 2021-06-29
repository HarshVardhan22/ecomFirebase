import React, { useState } from "react";
import { propTypes } from "react-currency-format";
import { storage , db} from "./firebase";
import "./AddProduct.css"
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleImage = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImage(selectedFile);
      setError("");
    } else {
      setProductImage(null);
      setError("Please select a valid image type : png or jpeg");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImage.name}`)
      .put(productImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(productImage.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Product")
              .add({
                productName: productName,
                productPrice: Number(productPrice),
                productImage: url,
              })
              .then(() => {
                setProductImage("");
                setProductName("");
                setProductPrice(0);
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="container-fluid addProduct">
    <div className="row">
          <h2  className="col col-md-6 offset-md-3 text-center">Add Product </h2>
          </div>
      <div className="row">
        <div className="col-6 offset-3 col-md-4 offset-md-4">
          <form autoComplete="on" className="form" onSubmit={addProduct}>
          
         
            <div className="form-group">
              <label>Add Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
                required
              />
            </div>
            <div className="form-group">
              <label>Product Price</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
                value={productPrice}
                required
              />
            </div>
            <div className="form-group">
              <label>Add Image</label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={handleImage}
                required
              />
            </div>
            <button className="addProduct__btn col-md-5 offset-md-3 ">Add Product</button>
            
          </form>
          <p className="alert-danger">{error}</p>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
