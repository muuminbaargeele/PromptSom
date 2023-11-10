import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <h1 className="text-grayColor text-center text-xl font-popins font-bold">
        Baargeelle Bot
      </h1>
      <p className="pb-4 text-grayColor font-popins text-[0.5rem] lg:text-[0.75rem] lg:font-medium">
        Waxaa taabagaliyey Eng. Muniira Haadi Cumar.
      </p>
    </header>
  );
};

export default Header;
