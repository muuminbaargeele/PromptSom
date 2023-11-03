import React from 'react'
import { FaUser, FaRobot } from 'react-icons/fa'
import { BiSolidUserVoice } from 'react-icons/bi'

const Response: React.FC = () => {
  return (
    <section className="flex flex-col gap-3 h-[435px] overflow-y-scroll active-scroll absolute pr-5 bg-transparent">
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <span className="border  border-grayColor/50 rounded-2xl p-[14px]">
            <FaUser className="text-white h-6 w-6 lg:h-12 lg:w-12" />
          </span>
          <span className="flex-1 pl-4 py-3 lg:py-7 text-white font-popins text-[10px] lg:text-sm border border-grayColor/50 rounded-2xl">
            hey my name is ahmed khaliif i am from somalia i love coding i am
            flutter developer
          </span>
        </div>

        <div className="flex items-start gap-3 ">
          <span className="border border-grayColor/50 rounded-2xl p-[14px]">
            <FaRobot className="text-white h-6 w-6 lg:h-12 lg:w-12" />
          </span>
          <div className="flex flex-col justify-between border border-grayColor/50 rounded-2xl px-4 py-3 lg:py-7  overflow-y-scroll active-scroll">
            <p className="text-white text-[10px] lg:text-sm font-popins font-normal ">
              That's great, Ahmed! Flutter is a popular framework for developing
              cross-platform mobile applications. It's great to hear that you
              love coding and have chosen to specialize in Flutter development.
              Keep up the good work and continue learning and improving your
              skills. If you have any questions or need any assistance, feel
              free to ask!
            </p>
            <span className="self-end  cursor-pointer">
              <BiSolidUserVoice className="text-white h-7 w-7 lg:h-10 lg:w-10 " />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Response
