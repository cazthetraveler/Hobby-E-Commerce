const Header = () => {
  //TODO
  // user button should open login/signup modal
  // i think for cart, a menu should open from the right side of the screen??
  return (
    <header className="flex justify-between px-10 py-4 bg-cyan-500">
      <button className="lg:hidden">
        <i className="fa-solid fa-bars text-3xl text-white hover:text-cyan-800 duration-200"></i>
      </button>
      <h1 className="text-3xl text-white font-bold">Store Name</h1>
      <div>
        <button className="mr-5">
          <i className="fa-solid fa-user text-3xl text-white hover:text-cyan-800 duration-200"></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping text-3xl text-white hover:text-cyan-800 duration-200"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
