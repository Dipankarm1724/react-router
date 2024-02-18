import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function callApi() {
      const products = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
      );
      setProducts(products.data);
    }
    callApi();
  }, []);
  return (
    <div className="list">
      {products.map((product) => {
        return (
          <Link to={`/list/${product.id}`}>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;
