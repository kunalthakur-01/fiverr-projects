import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllProducts } from "../../api/HttpOtherApis";
import { contextManage } from "../../context/ManageState";

import useHttp from "../../hooks/http-hook";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./AllProducts.css";
import FilterBy from "./FilterBy";
import ProductsList from "./ProductsList";

const AllProducts = () => {
  const { sendRequest, data, error, status } = useHttp(getAllProducts);
  const [allProducts, setAllProducts] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [priceFilter, setPriceFilter] = useState(0);
  const navigate = useNavigate();
  const ctx = useContext(contextManage);
  const searchParamCategory = useSearchParams()[0].get("category");

  //   getting the data from the server
  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (status === "completed" && !error && data) {
      setAllProducts(data.products);
    }
  }, [status, error, data]);

  //   rendering the page by query parameters
  useEffect(() => {
    if (status === "completed" && !error && data) {
      setAllProducts(data.products);
    }
    if (!searchParamCategory) return;

    setAllProducts((prevProd) => {
      return prevProd.filter(
        (product) => product.category === searchParamCategory
      );
    });
  }, [searchParamCategory]);

  //   Displaying loading spinner while fetching the data
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  //   Getting search filter
  const searchFilterFunc = (value) => {
    setSearchFilter(value);
  };

  const priceFilterFunc = (value) => {
    setPriceFilter(value);
  };

  //   clearing the filter
  const clearFilterBtn = () => {
    navigate("/products");
    setSearchFilter();
    setPriceFilter(0);
  };

  return (
    <section className="allProducts-section">
      <div className="allProducts">
        <FilterBy
          searchFilterHandler={searchFilterFunc}
          priceFilterHandler={priceFilterFunc}
          clearFilter={clearFilterBtn}
        />
        {allProducts && allProducts.length > 0 ? (
          <ProductsList
            products={allProducts}
            filterBySearch={searchFilter}
            filterByPrice={priceFilter}
          />
        ) : (
          <section className="no-product-found-section">
            <h2>Not Found</h2>
          </section>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
