import React from 'react'
import { RiUserFill } from 'react-icons/ri'
import { promptSomDevs } from '../lib/data'

const Sidebar: React.FC = () => {
  return (
    <section className="fixed left-0 hidden lg:flex flex-col justify-between  h-full bg-darkGreen text-white w-80 px-[1.875rem]">
      <h1 className="font-slackSide text-[3rem] text-primaryColor font-bold">
        PromptSom
      </h1>

      <div className="pb-10">
        <div className="border-b border-primaryColor pb-5">
          {promptSomDevs.map((dev) => (
            <ul key={dev.id} className="flex items-center gap-[5px]">
              <RiUserFill className=" h-8 w-8" />
              <li className="text-[1rem] font-popins py-3">{dev.name}</li>
            </ul>
          ))}
        </div>

        <p className="opacity-50 pt-5 text-[1rem] font-popins font-bold leading-7">
          These five students worked together to create a chatbot that
          understands Somali. Their goal was to make a special version of AI
          that is easy for Somali speakers to use. They succeeded in making a
          helpful tool that improves communication and breaks down language
          barriers.
        </p>
      </div>
    </section>
  )
}

export default Sidebar
