import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { GET_ONE_USER_CART, GET_ITEMS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Cart = ({ onClose }) => {
  const toggleClose = () => {
    onClose();
  };

  const userId = Auth.getProfile().data._id;

  const {
    loading: loadingCart,
    error: errorCart,
    data: dataCart,
    refetch: refetchCart,
  } = useQuery(GET_ONE_USER_CART, {
    variables: { id: userId },
  });

  const {
    loading: loadingItems,
    error: errorItems,
    data: dataItems,
  } = useQuery(GET_ITEMS);

  if (loadingCart || loadingItems) {
    return <p>Loading...</p>;
  }

  if (errorCart || errorItems) {
    return <p>Error: {errorCart ? errorCart.message : errorItems.message}</p>;
  }

  const cartItems = dataCart.user.shoppingCart;
  const items = dataItems.items;

  const cartItemDetails = items.filter((item) => cartItems.includes(item._id));

  const totalPrice = cartItemDetails.reduce(
    (total, item) => total + item.price,
    0
  );

  refetchCart();

  return (
    <aside
      id="modal-container"
      onClick={toggleClose}
      className="bg-gray-600/[0.5] w-screen h-screen flex justify-end items-center fixed top-0 left-0 transition-opacity duration-300"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="w-2/3 md:w-2/5 2xl:w-1/4 h-screen bg-white p-5 flex flex-col items-center"
      >
        <section className="flex justify-evenly w-full mb-5">
          <button onClick={toggleClose}>
            <i className="fa-solid fa-arrow-left text-2xl text-gray-500"></i>
          </button>
          <h2 className="text-3xl font-semibold">Shopping Cart</h2>
        </section>
        <section
          id="cart-item-overview"
          className="w-full flex flex-col gap-3 overflow-y-scroll"
        >
          {cartItemDetails.map((item) => (
            <CartItem key={item._id} item={item} userId={userId} />
          ))}
        </section>
        <section
          id="to-checkout"
          className="mt-auto w-full p-3 flex flex-col items-center border-t-2"
        >
          <h3 className="text-xl font-bold mb-3">
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button className="bg-cyan-400 hover:bg-cyan-600 duration-200 text-white text-lg rounded-lg p-3">
            Proceed to Checkout
          </button>
        </section>
      </section>
    </aside>
  );
};

export default Cart;
