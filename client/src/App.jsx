import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Cart from "./components/Cart";


const client = new ApolloClient({
  uri: "/graphql",
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
      {/*also we need to prompt it if the user is not logged in eventually*/}
      {isCartVisible && <Cart onClose={toggleCart} />}
      <Footer />
    </ApolloProvider>
  );
}

export default App;
