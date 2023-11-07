import React, { useState, CSSProperties } from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Header from './Header'
import Response from './Response'
import ClipLoader from 'react-spinners/ClipLoader'
import useScroll from '../context/ScrollContext'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
}

type ChatTypeProps = {
  postData: (question: string | number) => Promise<string | number | undefined>
}

export type previousQuestionsType = {
  id: number
  question: string | number
}

export type previousAnswersType = {
  id: number
  answer: string | number | undefined
}

const Chat = ({ postData }: ChatTypeProps) => {
  const { setScrollable } = useScroll()

  const [question, setQuestion] = useState<string | number>('')
  const [previousQuestions, setPreviousQuestion] = useState<
    previousQuestionsType[]
  >([])
  let [previousAnswers, setPreviousAnwers] = useState<previousAnswersType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value)
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setScrollable(false)
    setIsLoading(true)

    // Clear then save answers in state
    let newAnswer: previousAnswersType = {
      id: Date.now(),
      answer: '',
    }
    setPreviousAnwers((prevAnswer) => [...prevAnswer, newAnswer])

    // save question in state
    const newQuestion: previousQuestionsType = {
      id: Date.now(),
      question: question,
    }
    setPreviousQuestion((prevQuestion) => [...prevQuestion, newQuestion])

    // clear the input
    setQuestion('')

    // get the Response
    const res: string | number | undefined = await postData(question)

    setIsLoading(false)

    // Update The Answer in state
    newAnswer.answer = res

    setScrollable(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (!isLoading) return
      event.preventDefault()
    }
  }

  return (
    <section className="flex flex-col  h- w-full px-5 lg:px-[3.625rem]">
      <div className="flex flex-col justify-between  flex-1 py-7 lg:pt-8 lg:py-[0.60rem] ">
        <Header />

        <div className="flex h-[80%] justify-center items-center relative">
          <BsFillLightningChargeFill className="w-[21rem] h-[21rem] opacity-50 object-contain text-darkGreen" />
          <Response
            previousQuestions={previousQuestions}
            question={question}
            previousAnswers={previousAnswers}
          />
        </div>

        <form
          className="flex flex-col gap-2 relative z-50"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-5">
            <input
              className="w-full outline-none border border-grayColor py-3 lg:py-4 text-white opacity-50 font-popins text-[1rem] lg:text-xl bg-transparent rounded-xl lg:rounded-2xl pl-3 lg:pl-5 focus:border-blue-600 transition-all duration-150 ease-in-out"
              type="text"
              placeholder="Dir farriin"
              name="question"
              value={question}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              required
            />
            <button
              type="submit"
              className={`bg-primaryColor text-grayColor font-popins text-[1rem] lg:text-2xl rounded-xl lg:rounded-2xl py-3 lg:py-4 px-7 lg:px-10 hover:opacity-75 transition-opacity duration-150 ease-in-out ${
                isLoading && 'pointer-events-none'
              }`}
            >
              {isLoading ? (
                <ClipLoader
                  color="#FFFFFF"
                  loading={isLoading}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  size={23}
                />
              ) : (
                'Dirso'
              )}
            </button>
          </div>
        </form>
      </div>

      <p className="pb-4 text-grayColor font-popins text-[0.75rem] lg:font-medium">
        Fadlan gali qoraal dhigaalkiisu saxan yahay; si aad warcelin sugan u heshid.
      </p>
    </section>
  )
}

export default Chat
