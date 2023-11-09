import React, { createContext, useContext, useState } from 'react'

type SpeechContextProviderProps = {
  children: React.ReactNode
}

type SpeechContextMethonds = {
    setPlay: (play: boolean) => void
  play: boolean
}

const SpeechContext = createContext<SpeechContextMethonds | null>(null)

export const SpeechContextProvider = ({
  children,
}: SpeechContextProviderProps) => {
  const [play, setPlay] = useState<boolean>(true)

  const values = {
    play,
    setPlay,
  }

  return (
    <SpeechContext.Provider value={values}>{children}</SpeechContext.Provider>
  )
}

const useSpeech = () => {
  const context = useContext(SpeechContext)
  if (context === null) {
    throw new Error('Context must use inside SpeechContextProvider')
  }

  return context
}

export default useSpeech
