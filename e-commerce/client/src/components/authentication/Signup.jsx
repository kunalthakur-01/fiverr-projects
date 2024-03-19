import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

import signupImg from "../../assets/signup.png";
import Button from "../UI/Button";
import useAuth from "../../hooks/auth-hook";
import { HttpSignup } from "../../api/HttpAuthApis";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import LoadingSpinner from "../UI/LoadingSpinner";
import { contextManage } from "../../context/ManageState";
import ImageUpload from "./ImageUpload";
import useForm from "../../hooks/form-hook";
import Input from "../UI/Input";
import StatusrModel from "../UI/StatusModel";

const initialFormData = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
  image: {
    value: "",
    isValid: false,
  },
};

const Signup = () => {
  const { sendRequest, data, error, status } = useAuth(HttpSignup);
  const [showModel, setShowModel] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    Object.assign({}, initialFormData),
    false
  );

  const navigate = useNavigate();
  const ctx = useContext(contextManage);

  // signup form
  const signupFormSubmitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      image: formState.inputs.image.value,
    });
    setFormData(initialFormData, false);
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/");
    }
  }, [status, error]);

  useEffect(() => {
    if (data) ctx.login(data);
  }, [data]);

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
      {showModel && <StatusrModel close={closeModel} status={"error"}>{error}</StatusrModel>}
      {/* <StatusrModel className={'open-model'} status={"error"}>{error}</StatusrModel> */}
      <section className="signup-section">
        <div className="signup-form-section">
          <div className="third-party-login">
            <h2>Sign in to clever</h2>
            <div className="third-parties">
              <button>
                <FcGoogle className="third-party-icon" />
              </button>
              <button>
                <FaFacebookF className="third-party-icon" />
              </button>
              <button>
                <BsApple className="third-party-icon" />
              </button>
            </div>
          </div>
          <p className="small-p">or do it with E-mail</p>

          <form className="signup-form" onSubmit={signupFormSubmitHandler}>
            <Input
              inputName={"Name"}
              type={"text"}
              onInput={inputHandler}
              id={"name"}
              placeholder={"Enter your name"}
            />
            <Input
              inputName={"E-mail"}
              type={"email"}
              onInput={inputHandler}
              id={"email"}
              placeholder={"test@test.com"}
            />
            <ImageUpload name={"User image"} id={"image"} onInput={inputHandler} />
            <Input
              inputName={"Password"}
              type={"password"}
              onInput={inputHandler}
              id={"password"}
              placeholder={"Enter your password"}
            />
            <Button
              type="submit"
              isDisabled={!formState.formIsValid}
              className={
                !formState.formIsValid ? "formIsValid" : "auth-form-btn"
              }
            >
              Signup
            </Button>
          </form>
        </div>
        <div className="signup-form-vector-design">
          <img src={signupImg} alt="login" />
        </div>
      </section>
    </>
  );
};

export default Signup;
