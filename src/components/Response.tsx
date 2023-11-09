import { useEffect, useRef } from "react";
import { FaUser, FaRobot } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { previousQuestionsType, previousAnswersType } from "./Chat";
import TypewriterParagraph from "./TypewriterParagraph";
import useScroll from "../context/ScrollContext";
import { Speak } from "../api/speak";
import useSpeech from "../context/SpeechContext";

type ResponseProps = {
  previousQuestions: previousQuestionsType[];
  previousAnswers: previousAnswersType[];
  question: string | number;
};

const Response = ({ previousQuestions, previousAnswers }: ResponseProps) => {
  const { scrollable, setScrollable } = useScroll();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { play, setPlay } = useSpeech();

  useEffect(() => {
    //hoos ikeey
    const scrollInterval = setInterval(() => {
      // Scroll to the bottom of the section with smooth behavior
      //hadi la scroll-gareykarin
      if (sectionRef.current && !scrollable) {
        console.log("Lama Scroll-gareykaro");
        sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 2);

    //Userka Ha maamulo hadi la scroll-gareykaro
    if (!scrollable) {
      sectionRef.current?.addEventListener("drag", handleScroll);
      function handleScroll() {
        console.log("Waala Scroll-gareykara");
        setScrollable(true);
      }
    }

    return () => {
      clearInterval(scrollInterval);
      // Clean up the interval when the component unmounts
    };
  }, [scrollable, setScrollable]);

  return (
    <section
      className="flex flex-col gap-3 h-[435px] w-full overflow-y-scroll active-scroll
       absolute bg-transparent "
      ref={sectionRef}
    >
      {previousQuestions.map((question, index) => (
        <div key={question.id} className="flex flex-col w-full gap-3 pb-4 ">
          <div className="flex w-full gap-3">
            <span className="border self-start border-grayColor/50 rounded-2xl p-[14px]">
              <FaUser className="text-white h-6 w-6 lg:h-12 lg:w-12" />
            </span>
            <span className="flex-1 pl-4 py-3 lg:py-7 text-white font-popins text-[10px] lg:text-sm border border-grayColor/50 rounded-2xl">
              {question.question}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="border border-grayColor/50 rounded-2xl p-[14px]">
              <FaRobot className="text-white h-6 w-6 lg:h-12 lg:w-12" />
            </span>
            <div className="flex flex-col justify-between w-full border border-grayColor/50 rounded-2xl px-4 py-3 lg:py-7">
              {previousAnswers[index].answer && (
                <TypewriterParagraph
                  textToType={
                    previousAnswers
                      ? previousAnswers[index].answer
                      : "Something went wrong try again"
                  }
                />
              )}
              <span className="self-end  cursor-pointer">
                {play ? (
                  <FaPause
                    className="text-white h-3 w-3 lg:h-6 lg:w-6 "
                    onClick={() =>
                      Speak(previousAnswers[index].answer, setPlay)
                    }
                  />
                ) : (
                  <FaPlay
                    className="text-white h-3 w-3 lg:h-6 lg:w-6 "
                    onClick={() =>
                      Speak(previousAnswers[index].answer, setPlay)
                    }
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Response;
