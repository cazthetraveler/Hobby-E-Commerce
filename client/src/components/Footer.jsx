const Footer = () => {
  //TODO
  return (
    <div className="flex justify-evenly px-10 py-4 bg-cyan-500">
      <div className="flex ">
        <div className="text-2xl text-white font-bold mx-6">
          <a href="https://github.com/drewhouses">
            <i className="fa-brands fa-github ml-16"></i>
            <h2>Drew Casas</h2>
          </a>
        </div>
        <div className="text-2xl text-white font-bold mx-6">
          <a href="https://github.com/cazthetraveler">
            <i className="fa-brands fa-github ml-14"></i>
            <h2>Luis Olmos</h2>
          </a>
        </div>
        <div className="text-2xl text-white font-bold mx-6">
          <a href="https://github.com/FoundEven">
            <i className="fa-brands fa-github ml-12"></i>
            <h2>Evan Rice</h2>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
