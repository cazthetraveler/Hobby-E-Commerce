const CartItem = () => {
  //TODO
  return (
    <section className="flex justify-between items-center p-3 border w-full bg-gray-200">
      <img className="size-14" src="https://www.placeholder.co/500" />
      <div className="w-full pl-3">
        <h3>Item Name</h3>
        <h4>Qty: 1</h4>
        <h4>$0.00</h4>
      </div>
      <button>
        <i className="fa-solid fa-trash text-xl text-red-500"></i>
      </button>
    </section>
  );
};

export default CartItem;
