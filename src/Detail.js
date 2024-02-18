import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { productid } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function callDeatail() {
      const product = await axios.get(
        `https://fakestoreapi.com/products/${productid}`
      );
      setProductDetail(product.data);
    }
    callDeatail();
  }, []);
  return (
    <>
      <div className="detail-container">
        <div>
          <img src={productDetail.image} width="200px" height="200px" alt="" />
        </div>
        <div>
          <h2>{productDetail.title}</h2>
          <h3>{productDetail.category}</h3>
          <h4>{productDetail?.rating?.rate}</h4>
        </div>
      </div>
      <button onClick={() => navigate("/list")}>Back</button>
    </>
  );
}
export default Detail;
