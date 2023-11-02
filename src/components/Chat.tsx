import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Header from './Header'

const Chat: React.FC = () => {
  return (
    <section className="flex flex-col  h-full w-full px-5 lg:px-[3.625rem]">
      <div className="flex flex-col justify-between flex-1  py-7 lg:pt-8 lg:py-[0.60rem] ">
        <Header />

        <div className="flex justify-center">
          <BsFillLightningChargeFill className="w-[21rem] h-[21rem] opacity-50 object-contain text-darkGreen" />
        </div>

        <form className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <input
              className="w-full outline-none border border-grayColor py-3 lg:py-4 text-white opacity-50 font-popins text-sm lg:text-xl bg-transparent rounded-xl lg:rounded-2xl pl-3 lg:pl-5 focus:border-blue-600 transition-all duration-150 ease-in-out"
              type="text"
              placeholder="Send a Message"
              required
            />
            <button
              type="submit"
              className="bg-primaryColor text-grayColor font-popins text-sm lg:text-2xl rounded-xl lg:rounded-2xl py-3 lg:py-4 px-7 lg:px-10 hover:opacity-75 transition-opacity duration-150 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <p className="hidden lg:block pb-4 text-grayColor font-popins text-[0.75rem] font-medium">
        Designed by Baargelle
      </p>
    </section>
  )
}

export default Chat
