const Nav2 = () => {
  return (
    <nav className="bg-white  px-12 py-5  flex justify-between">
      <div className="flex h-14 w-11/12 items-center ">
        <img className=" absolute left-96" src="/public/find.svg" alt="" />
        <div className="h-full flex items-center w-4/6">
          <input
            className="h-12 w-9/12 px-16"
            type="text"
            placeholder="Search Actions"
          />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex h-6 gap-6">
          <img className="cursor-pointer" src="/public/message.svg" alt="" />
          <img className="cursor-pointer" src="/public/alarm.svg" alt="" />
        </div>
        <div className="flex gap-[5px]">
          <img
            className="cursor-pointer h-10 rounded-full"
            src="/public/perfil.jpg"
            alt=""
          />
          <div className="flex ">
            <div className="text-sm w-44">
              <h1 className="cursor-pointer text-base font-bold">
                Lydia Rhiel Madsen
              </h1>
              <h2 className="text-ms font-semibold text-gray-700">Senior HR</h2>
            </div>
            <div className="flex mr-7">
              <img
                className="cursor-pointer"
                src="/public/arrowbotton.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
