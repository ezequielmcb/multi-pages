const Nav = () => {
  return (
    <nav className="flex justify-around gap-96">
      <div className=" w-24 rounded-full">
        <img className="rounded-full" src="/public/and.jpg" alt="" />
      </div>
      <div className="flex justify-center w-96items-center">
        <input
          className=" p-6 w-96 h-10 rounded-xl pr-24 relative "
          type="text"
        />
        <img
          className="absolute top-20 right-72 bottom-0"
          src="/public/find.svg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Nav;
