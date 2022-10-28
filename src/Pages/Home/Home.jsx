import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { fetchProducts, getProducts } from "../../redux/actions";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState(null);
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchProducts(page, orderBy));
  }, [orderBy, page]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPage(searchParams.get("page") || 1);
  }, [searchParams]);

  const products = useSelector((store) => store.products);

  useEffect(() => {
    let pro = products || [];
    let cat = pro.map((product) => product.category);
    cat = new Set(cat);
    cat = [null, ...cat];
    setCategories(cat);
  }, [products]);

  return (
    <div>
      <div>
        Filter -{" "}
        <select
          onChange={(e) => setSelectCat(e.target.value)}
          value={selectCat}
        >
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>{" "}
        Sort -{" "}
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option></option>
          <option value="asc">Low To High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="products">
        {products
          .filter((pro) => selectCat === null || pro.category === selectCat)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      <div>
        <button
          disabled={page <= 1 ? true : false}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
        <button
          disabled={page >= 4 ? true : false}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Home;
