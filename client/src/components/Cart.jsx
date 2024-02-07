const Cart = ({ onClose }) => {
  const toggleClose = (e) => {
    e.stopPropagation();
    onClose();
  };
  //TODO
  return (
    <aside
      id="modal-container"
      onClick={toggleClose}
      className="bg-gray-600/[0.5] w-screen h-screen flex justify-end items-center fixed top-0 left-0 transition-opacity duration-300"
    >
      <section className="w-1/4 h-screen bg-white p-5">
        <button onClick={toggleClose}>
          <i className="fa-solid fa-close text-2xl text-gray-500"></i>
        </button>
        <h2>ur cart is empty.</h2>
      </section>
    </aside>
  );
};

export default Cart;
