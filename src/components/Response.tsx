import { FaUser, FaRobot } from 'react-icons/fa'
import { BiSolidUserVoice } from 'react-icons/bi'
import { previousQuestionsType, previousAnswersType } from './Chat'

type ResponseProps = {
  previousQuestions: previousQuestionsType[]
  previousAnswers: previousAnswersType[]
  question: string | number
}

const Response = ({ previousQuestions, previousAnswers }: ResponseProps) => {
  return (
    <section
      className="flex flex-col gap-3 h-[435px] w-full overflow-y-scroll active-scroll
       absolute bg-transparent"
    >
      {previousQuestions.map((question, index) => (
        <div key={question.id} className="flex flex-col w-full gap-3">
          <div className="flex w-full gap-3">
            <span className="border self-start border-grayColor/50 rounded-2xl p-[14px]">
              <FaUser className="text-white h-6 w-6 lg:h-12 lg:w-12" />
            </span>
            <span className="flex-1 pl-4 py-3 lg:py-7 text-white font-popins text-[10px] lg:text-sm border border-grayColor/50 rounded-2xl">
              {question.question}
            </span>
          </div>

          <div className="flex items-start gap-3 ">
            <span className="border border-grayColor/50 rounded-2xl p-[14px]">
              <FaRobot className="text-white h-6 w-6 lg:h-12 lg:w-12" />
            </span>
            <div className="flex flex-col justify-between w-full border border-grayColor/50 rounded-2xl px-4 py-3 lg:py-7  overflow-y-scroll active-scroll">
              <p className="text-white text-[10px] lg:text-sm font-popins font-normal ">
                {previousAnswers[index].answer}
              </p>
              <span className="self-end  cursor-pointer">
                <BiSolidUserVoice className="text-white h-7 w-7 lg:h-10 lg:w-10 " />
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Response
