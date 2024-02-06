const Header = () => {
  //TODO
  // user button should open login/signup modal
  // i think for cart, a menu should open from the right side of the screen?? unless we want to add a cart page?
  return (
    <header className="flex justify-between px-10 py-4">
      <h1 className="text-3xl text-red-500">Store Name</h1>
      <div>
        <button className="mr-5">
          <i className="fa-solid fa-user text-3xl text-gray-500 hover:text-gray-300"></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping text-3xl text-gray-500 hover:text-gray-300"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
