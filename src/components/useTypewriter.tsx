import { useState, useEffect } from 'react'
import useScroll from '../context/ScrollContext'

function useTypewriter(
  initialText: string | number | undefined,
  typingInterval: number = 50
) {
  const { setScrollable } = useScroll()

  const [text, setText] = useState<string | number>('')
  const [charIndex, setCharIndex] = useState<number>(0)

  useEffect(() => {
    if (charIndex < String(initialText).length) {
      const timeoutId = setTimeout(() => {
        setText((prevText) => prevText + String(initialText)[charIndex])
        setCharIndex(charIndex + 1)
      }, typingInterval)

      return () => {
        clearTimeout(timeoutId)
      }
    } else {
      // Mark typing as done when all characters have been typed
      console.log('Wuu dhamaaday')
      setScrollable(true)
    }
  }, [charIndex, initialText, typingInterval])

  return text
}

export default useTypewriter
