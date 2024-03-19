import React, { useContext, useEffect, useState } from "react";

import { addUserProduct } from "../../api/HttpOtherApis";
import useForm from "../../hooks/form-hook";
import Button from "../UI/Button";
import GetProductImages from "../UI/GetProductImages";
import Input from "../UI/Input";
import useHttp from "../../hooks/http-hook";
import StatusModel from "../UI/StatusModel";
import ImageUpload from '../authentication/ImageUpload';

import "./AddYourProduct.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import { contextManage } from "../../context/ManageState";
import { useNavigate } from "react-router-dom";
import AppLogo from "../UI/AppLogo";

const initialFormData = {
  name: {
    value: "",
    isValid: false,
  },
  mrp: {
    value: "",
    isValid: false,
  },
  price: {
    value: "",
    isValid: false,
  },
  category: {
    value: "",
    isValid: false,
  },
  brand: {
    value: "",
    isValid: false,
  },
  madeIn: {
    value: "",
    isValid: false,
  },
  images: {
    value: [],
    isValid: false,
  },
};

const AddYourProduct = () => {
  const [formState, inputHandler, setFormData] = useForm(
    Object.assign({}, initialFormData),
    false
  );
  const { sendRequest, error, status } = useHttp(addUserProduct);
  const ctx = useContext(contextManage);
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  const addProductFormhandler = (e) => {
    e.preventDefault();

    sendRequest(
      {
        name: formState.inputs.name.value,
        mrp: formState.inputs.mrp.value,
        price: formState.inputs.price.value,
        category: formState.inputs.category.value,
        brand: formState.inputs.brand.value,
        madeIn: formState.inputs.madeIn.value,
        images: formState.inputs.images.value,
      },
      ctx.userData.userId,
      ctx.userData.token
    );
    setFormData(initialFormData, false);
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/products");
    }
  }, [status, error]);

  useEffect(() => {
    if (error) {
      setShowModel(true);
    }

    let timeOut = setTimeout(() => {
      setShowModel(false);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [error]);

  const closeModel = () => {
    setShowModel(false);
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {showModel && (
        <StatusModel close={closeModel} status={"error"}>
          {error}
        </StatusModel>
      )}
      <div className="add-product-section">
        <div className="add-product-form">
          <AppLogo />
          <form onSubmit={addProductFormhandler}>
            <Input
              inputName={"Product Name*"}
              type={"text"}
              onInput={inputHandler}
              id={"name"}
              placeholder={"Your product name"}
            />
            <Input
              inputName={"MRP*"}
              type={"number"}
              onInput={inputHandler}
              id={"mrp"}
              placeholder={"What is the price?🤔"}
            />
            <Input
              inputName={"Actual Price*"}
              type={"number"}
              onInput={inputHandler}
              id={"price"}
              placeholder={"What is the price?🤔"}
            />
            <Input
              inputName={"Category*"}
              type={"text"}
              onInput={inputHandler}
              id={"category"}
              placeholder={"Eg:- Food, Cloths, Sanitary, Accessories, etc"}
            />
            <Input
              inputName={"Brand*"}
              type={"text"}
              onInput={inputHandler}
              id={"brand"}
              placeholder={"Brand name"}
            />
            <Input
              inputName={"Made In*"}
              type={"text"}
              onInput={inputHandler}
              id={"madeIn"}
              placeholder={"Made in which country?"}
            />
            <GetProductImages name={"More images(min 1, max 3)"} id={"images"} onInput={inputHandler} />
            <hr className="add-product-form-hr" />
            <Button type="submit">Upload</Button>
          </form>
        </div>
        <div className="add-product-section-design1"></div>
        <div className="add-product-section-design2"></div>
      </div>
    </>
  );
};

export default AddYourProduct;
