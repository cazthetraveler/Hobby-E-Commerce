import Auth from "../utils/auth";

const Header = ({ onToggleModal, onToggleNav, onToggleCart }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="flex justify-between px-10 py-4 bg-cyan-500">
      <button onClick={onToggleNav} className="lg:hidden">
        <i className="fa-solid fa-bars text-3xl text-white hover:text-cyan-800 duration-200"></i>
      </button>
      <h1 className="text-3xl text-white font-bold">Store Name</h1>
      <div>
        {Auth.loggedIn() ? (
          <>
            <button onClick={logout} className="mr-5">
              <i className="fa-solid fa-right-from-bracket text-3xl text-white hover:text-cyan-800 duration-200"></i>
            </button>
          </>
        ) : (
          <>
            <button onClick={onToggleModal} className="mr-5">
              <i className="fa-solid fa-user text-3xl text-white hover:text-cyan-800 duration-200"></i>
            </button>
          </>
        )}

        <button onClick={Auth.loggedIn() ? onToggleCart : onToggleModal}>
          {/* if user is logged in, show cart, if not then open login modal */}
          <i className="fa-solid fa-cart-shopping text-3xl text-white hover:text-cyan-800 duration-200"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
