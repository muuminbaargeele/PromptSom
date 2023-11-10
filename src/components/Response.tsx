import { CSSProperties, useEffect, useRef } from "react";
import { FaUser, FaRobot } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa";
import { previousQuestionsType, previousAnswersType } from "./Chat";
import TypewriterParagraph from "./TypewriterParagraph";
import useScroll from "../context/ScrollContext";
import { Speak } from "../api/speak";
import useSpeech from "../context/SpeechContext";
import ClipLoader from "react-spinners/ClipLoader";

type ResponseProps = {
  previousQuestions: previousQuestionsType[];
  previousAnswers: previousAnswersType[];
  question: string | number;
  select: number;
  setSelect: (select: number) => void;
  player: any;
  setPlayer: (player: any) => void;
  isLoading: boolean;
  override: CSSProperties;
};

const Response = ({
  previousQuestions,
  previousAnswers,
  select,
  setSelect,
  player,
  setPlayer,
  isLoading,
}: // override,
ResponseProps) => {
  const { scrollable, setScrollable } = useScroll();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  let { play, setPlay } = useSpeech();

  useEffect(() => {
    //hoos ikeey
    const scrollInterval = setInterval(() => {
      // Scroll to the bottom of the section with smooth behavior
      //hadi la scroll-gareykarin
      if (sectionRef.current && !scrollable) {
        sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 2);

    //Userka Ha maamulo hadi la scroll-gareykaro
    if (!scrollable) {
      sectionRef.current?.addEventListener("drag", handleScroll);
      function handleScroll() {
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
              {isLoading && index == select ? (
                <div className="flex items-center justify-center text-white  h-6 w-6 lg:h-12 lg:w-12">
                  <ClipLoader
                    color="#FFFFFF"
                    loading={isLoading}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    size={25}
                  />
                </div>
              ) : (
                <FaRobot className="text-white h-6 w-6 lg:h-12 lg:w-12" />
              )}
            </span>
            {isLoading && index == select ? null : (
              <div className="flex flex-col justify-between w-full border border-grayColor/50 rounded-2xl px-4 py-3 lg:py-[26px]">
                {previousAnswers[index].answer && (
                  <TypewriterParagraph
                    textToType={
                      previousAnswers
                        ? previousAnswers[index].answer
                        : "Something went wrong try again"
                    }
                  />
                )}
                {isLoading ? null : (
                  <span className="self-end  cursor-pointer">
                    {play && index == select ? (
                      <FaPause
                        className="text-white h-3 w-3 lg:h-6 lg:w-6 "
                        onClick={() => {
                          setPlay(false);
                          Speak(
                            previousAnswers[index].answer,
                            setPlay,
                            (play = false),
                            player,
                            setPlayer,
                            () => {}
                          );
                          player.pause();
                          setSelect(
                            previousQuestions.indexOf(previousQuestions[index])
                          );
                          setScrollable(true);
                        }}
                      />
                    ) : (
                      <FaPlay
                        className="text-white h-3 w-3 lg:h-6 lg:w-6 "
                        onClick={() => {
                          setPlay(true);
                          player.pause();
                          Speak(
                            previousAnswers[index].answer,
                            setPlay,
                            (play = true),
                            player,
                            setPlayer,
                            () => {}
                          );
                          setSelect(
                            previousQuestions.indexOf(previousQuestions[index])
                          );
                        }}
                      />
                    )}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Response;
