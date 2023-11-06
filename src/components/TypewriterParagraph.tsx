import React from "react";
import useTypewriter from "./useTypewriter";

function TypewriterParagraph({ textToType }) {
  const typingInterval = 50; // Adjust the typing speed (milliseconds per character)

  const displayText = useTypewriter(textToType, typingInterval);

  return (
    <p className="text-white text-[10px] lg:text-sm font-popins font-normal">
      {displayText}
    </p>
  );
}

export default TypewriterParagraph;
