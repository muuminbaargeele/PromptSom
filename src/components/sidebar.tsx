import React from "react";
// import { RiUserFill } from 'react-icons/ri'
import { FaUserTie } from "react-icons/fa";
import { promptSomDevs } from "../lib/data";

const Sidebar: React.FC = () => {
  return (
    <section className="hidden lg:flex flex-col justify-between  h-full bg-darkGreen text-grayColor w-80 px-[1.875rem]">
      <h1 className="font-slackSide text-[3rem] text-primaryColor font-bold">
        PromptSom
      </h1>

      <div className="pb-10 ">
        <div className="border-b border-primaryColor pb-5">
          {promptSomDevs.map((dev) => (
            <ul key={dev.id} className="flex items-center gap-[0.3rem]">
              <div className="flex gap-2 my-1 items-end">
                <FaUserTie className=" h-6 w-6" />
                <li className="text-[0.75rem] font-popins">{dev.name}</li>
              </div>
            </ul>
          ))}
        </div>

        <p className="opacity-50 pt-5 text-[0.75rem] font-popins font-medium leading-7">
          These five students worked together to create a chatbot that
          understands Somali. Their goal was to make a special version of AI
          that is easy for Somali speakers to use. They succeeded in making a
          helpful tool that improves communication and breaks down language
          barriers.
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
