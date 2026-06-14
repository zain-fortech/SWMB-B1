import React, { useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [passwordInputType, setPasswordInputTye] = useState("password");

  const onChangeHandler = (key, value) => {
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const onSubmitHandler = () => {
    console.log({
      username: formData.username,
      password: formData.password,
    });

    const result = login(formData.username, formData.password);

    console.log({ result });
  };

  const passwordRef = useRef(null);

  const showPassword = () => {
    let type = "";

    const currentType = passwordRef.current.type;

    if (currentType == "text") {
      type = "password";
    } else {
      type = "text";
    }

    setPasswordInputTye(type);
  };

  useEffect(() => {
    passwordRef.current.type = passwordInputType;
  }, [passwordInputType]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex bg-secondary min-h-screen gap-y-5 justify-center mt-30">
      <div className="h-min w-1/4 bg-white flex flex-col p-10 gap-y-5">
        <span>
          <p className="text-center text-2xl">Login!</p>
        </span>
        <span>
          <input
            onChange={(e) => onChangeHandler("username", e.target.value)}
            value={formData.username}
            type="text"
            placeholder="username"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          />
        </span>

        <span>
          <input
            ref={passwordRef}
            onChange={(e) => onChangeHandler("password", e.target.value)}
            value={formData.password}
            type="password"
            placeholder="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          />
          <p
            className="underline cursor-pointer"
            onClick={() => showPassword()}
          >
            {passwordInputType == "text" ? "hide password" : "show password"}
          </p>
        </span>

        <span className="flex justify-center">
          <button
            onClick={() => onSubmitHandler()}
            type="button"
            className="bg-success box-border border hover:bg-success-strong focus:ring-2 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
          >
            Login
          </button>
        </span>
      </div>
    </div>
  );
}
