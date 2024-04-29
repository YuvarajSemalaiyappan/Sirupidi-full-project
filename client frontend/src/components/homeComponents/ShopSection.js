import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const pingServer = async () => {
    try {
     
      const response = await fetch("https://sirupidi-server.onrender.com/"); 
      if (!response.ok) {
        throw new Error("Server is not reachable");
      }
    } catch (error) {
     
    }
  };

  pingServer();


  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {

    const { keyword, pagenumber } = props;

    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // You can perform any additional action here when the category is selected
  };

  return (
    <>
      <div className="container">
        <div className="section">
          {/* Display categories dropdown */}
          <div style={{ paddingLeft: "100px", marginBottom: "20px" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Shop by Category
            </p>
          </div>
          <div
            className="category-dropdown"
            style={{
              height: "60px",
              paddingTop: "1px",
              paddingBottom: "40px",
              paddingLeft: "100px",
            }}
          >
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{
                height: "40px",
                borderColor: "#76C34F",
                borderRadius: "10px",
              }}
            >
              <option value="">Select Category</option>
              <option value="Rice">Rice</option>
              <option value="Podi">Podi</option>
              <option value="Health Mix">Health Mix</option>
              <option value="Oil">Oil</option>
              <option value="Soap">Soap</option>
              <option value="Honey">Honey</option>
              <option value="Jaggeries">Jaggeries</option>
            </select>
          </div>

          {/* Product list */}
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products
  .filter(product => !selectedCategory || product.category === selectedCategory) // Filter products based on the selected category
  .map((product) => (
    <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
      {/* Product details */}
      <div className="border-product">
        <Link to={`/products/${product._id}`}>
          <div className="shopBack">
            <img src={product.image} alt={product.name} />
          </div>
        </Link>
        <div className="shoptext">
          <p>
            <Link to={`/products/${product._id}`}>
              {product.name}
            </Link>
          </p>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <h3>₹ {product.price}</h3>
        </div>
      </div>
    </div>
  ))
}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
