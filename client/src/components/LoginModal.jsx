import { useState } from "react";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

import { LOGIN_USER } from "../utils/mutations";
import { ADD_USER } from "../utils/mutations";

const LoginModal = ({ onClose }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const [addUser, { error }] = useMutation(ADD_USER);
  const [loginUser, { loginError }] = useMutation(LOGIN_USER);

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    console.log(signUpFormData);

    try {
      const { data } = await addUser({
        variables: { ...signUpFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(loginFormData);

    try {
      const { data } = await loginUser({
        variables: { ...loginFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }
  };

  const [isLoginFormVisible, setLoginVisibility] = useState(true);
  const toggleForm = (e) => {
    e.preventDefault();
    setLoginVisibility(!isLoginFormVisible);
  };
  // closes modal, onClose taken from app.jsx
  const toggleClose = () => {
    onClose();
  };

  return (
    <section
      id="modal-container"
      className="bg-gray-600/[0.5] w-screen h-screen flex justify-center items-center fixed top-0 left-0 transition-opacity duration-300"
    >
      <section
        id="login-register-modal"
        className="bg-white p-5 h-1/2 w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 rounded-xl flex flex-col items-end"
      >
        <button onClick={toggleClose}>
          <i className="fa-solid fa-close text-2xl"></i>
        </button>
        {isLoginFormVisible ? (
          <form
            id="login-form"
            className="flex flex-col items-center justify-evenly w-full h-full"
            onSubmit={handleLoginSubmit}
          >
            <h2 className="text-4xl font-medium border-b-2 w-full text-center pb-3">
              Login
            </h2>
            <input
              id="login-email"
              type="email"
              name="email"
              onChange={handleLoginInputChange}
              value={loginFormData.email}
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="E-mail"
            />
            <input
              id="login-password"
              type="password"
              name="password"
              onChange={handleLoginInputChange}
              value={loginFormData.password}
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="Password"
            />
            <button className="bg-cyan-600 hover:bg-cyan-800 text-white text-xl p-2 w-1/2 rounded-lg">
              Login
            </button>
            <button onClick={toggleForm} className="underline italic">
              Don't have an account?
            </button>
          </form>
        ) : (
          <form
            id="login-form"
            className="flex flex-col items-center justify-evenly w-full h-full"
            onSubmit={handleRegisterSubmit}
          >
            <h2 className="text-4xl font-medium border-b-2 w-full text-center pb-3">
              Register
            </h2>
            <div className="flex justify-around px-6">
              <input
                id="first-name"
                type="text"
                name="firstName"
                onChange={handleRegisterInputChange}
                value={signUpFormData.firstName}
                required
                className="border-b-2 text-xl w-2/5 p-2 enabled:outline-transparent"
                placeholder="First Name"
              />
              <input
                id="last-name"
                type="text"
                name="lastName"
                onChange={handleRegisterInputChange}
                value={signUpFormData.lastName}
                className="border-b-2 text-xl w-2/5 p-2 enabled:outline-transparent"
                placeholder="Last Name"
              />
            </div>
            <input
              id="register-email"
              type="email"
              name="email"
              onChange={handleRegisterInputChange}
              value={signUpFormData.email}
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="E-mail"
            />
            <input
              id="register-password"
              type="password"
              name="password"
              onChange={handleRegisterInputChange}
              value={signUpFormData.password}
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="Password"
            />
            <button className="bg-cyan-600 hover:bg-cyan-800 text-white text-xl p-2 w-1/2 rounded-lg">
              Register
            </button>
            <button onClick={toggleForm} className="underline italic">
              Already have an account?
            </button>
          </form>
        )}
      </section>
    </section>
  );
};

export default LoginModal;
