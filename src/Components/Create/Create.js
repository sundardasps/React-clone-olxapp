import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/firebaseContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setUser] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setFile] = useState("");
  const [alerted, setAlert] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (name === null || name === "") {
      setAlert("Name must be needed");
    } else if (category === null || category === "") {
      setAlert("Cateory must be needed");
    } else if (price === null || price === "") {
      setAlert("Price must be needed");
    } else if (image === null || image === "") {
      setAlert("Image must be needed");
    } else {
      const date = new Date();
      firebase
        .storage()
        .ref(`/image/${image.name}`)
        .put(image)
        .then(({ ref }) => {
          ref.getDownloadURL().then((url) => {
            firebase.firestore().collection("products").add({
              name: name.trim().toUpperCase(),
              category: category.trim(),
              price: price.trim(),
              url,
              userId: user.uid,
              createdAt: date.toDateString(),
            });

            history.push("/");
          });
        });
    }
  };

  const loinAlert = () => {
    alert("Please login");
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <p style={{ color: "red" }}>{alerted}</p>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            value={name}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            type="text"
            id="fname"
            name="Name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            id="fname"
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : null}
          ></img>

          <br />
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <br />
          <button
            onClick={user ? handelSubmit : loinAlert}
            className="uploadBtn"
          >
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
