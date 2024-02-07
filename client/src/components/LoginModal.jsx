import { useState } from "react";

const LoginModal = ({ onClose }) => {
  //TODO
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
          >
            <h2 className="text-4xl font-medium border-b-2 w-full text-center pb-3">
              Login
            </h2>
            <input
              id="login-email"
              type="email"
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="E-mail"
            />
            <input
              id="login-password"
              type="password"
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
          >
            <h2 className="text-4xl font-medium border-b-2 w-full text-center pb-3">
              Register
            </h2>
            <div className="flex justify-around px-6">
              <input
                id="first-name"
                type="text"
                className="border-b-2 text-xl w-2/5 p-2 enabled:outline-transparent"
                placeholder="First Name"
              />
              <input
                id="last-name"
                type="text"
                className="border-b-2 text-xl w-2/5 p-2 enabled:outline-transparent"
                placeholder="Last Name"
              />
            </div>
            <input
              id="register-email"
              type="email"
              className="border-b-2 text-xl w-4/5 p-2 enabled:outline-transparent"
              placeholder="E-mail"
            />
            <input
              id="register-password"
              type="password"
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
