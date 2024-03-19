import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

import "./Login.css";

import Button from "../UI/Button";
import loginImg from "../../assets/login2.png";
import useAuth from "../../hooks/auth-hook";
import { contextManage } from "../../context/ManageState";
import LoadingSpinner from "../UI/LoadingSpinner";
import { HttpLogin } from "../../api/HttpAuthApis";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import Input from "../UI/Input";
import useForm from "../../hooks/form-hook";
import StatusrModel from "../UI/StatusModel";

const initialFormData = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};

const Login = () => {
  const { sendRequest, data, error, status } = useAuth(HttpLogin);
  const [showModel, setShowModel] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    Object.assign({}, initialFormData),
    false
  );

  const navigate = useNavigate();
  const ctx = useContext(contextManage);

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
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
    }, 8000);

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
        <StatusrModel close={closeModel} status={"error"}>
          {error}
        </StatusrModel>
      )}
      <section className="login-section">
        <div className="login-form-section">
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

          <form className="login-form" onSubmit={loginFormSubmitHandler}>
            <Input
              inputName={"E-mail"}
              type={"email"}
              onInput={inputHandler}
              id={"email"}
              placeholder={"test@test.com"}
            />
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
              Login
            </Button>
          </form>
        </div>
        <div className="login-form-vector-design">
          <img src={loginImg} alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;
