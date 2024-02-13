import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Cart from "./components/Cart";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  const [isNavVisible, setNavVisibility] = useState(false);
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const [isCartVisible, setCartVisibility] = useState(false);
  const toggleCart = () => {
    setCartVisibility(!isCartVisible);
  };

  return (
    <ApolloProvider client={client}>
      <Header
        onToggleModal={toggleModal}
        onToggleNav={toggleNav}
        onToggleCart={toggleCart}
      />
      <Nav isVisible={isNavVisible} />
      <Outlet />
      {isModalVisible && <LoginModal onClose={toggleModal} />}
      {isCartVisible && <Cart onClose={toggleCart} />}
      <Footer />
    </ApolloProvider>
  );
}

export default App;
