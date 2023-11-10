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
          Lixdaas arday baa si wadajir ah uga shaqaysay barnaamijkaan
          ChatGPT-ga ah oo afka Soomaaliga wax lagu weyddiin karo. Hadafku wuxuu
          ahaa in la helo qeyb maskaxda macmalka ah oo Soomaalida u fuduseysa
          inay wax baaraan. Waa ay ku guuleysteen inay gaaraan qalbkaas. Hadda
          dadka Soomaaliyeed luqad kama hor taagna inay ChatGPT la xirriiraan.
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
