import { useState, useEffect } from "react";

function useTypewriter(initialText, typingInterval = 50) {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < initialText.length) {
      const timeoutId = setTimeout(() => {
        setText((prevText) => prevText + initialText[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingInterval);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      // Mark typing as done when all characters have been typed
      console.log("Wuu dhamaaday")
      
    }
  }, [charIndex, initialText, typingInterval]);

  return text;
}

export default useTypewriter;
