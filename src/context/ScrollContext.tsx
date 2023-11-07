import React, { createContext, useContext, useState } from 'react'

type ScrollContextProviderProps = {
  children: React.ReactNode
}

type ScrollContextMethonds = {
  setScrollable: (scrollable: boolean) => void
  scrollable: boolean
}

const ScrollContext = createContext<ScrollContextMethonds | null>(null)

export const ScrollContextProvider = ({
  children,
}: ScrollContextProviderProps) => {
  const [scrollable, setScrollable] = useState<boolean>(false)

  const values = {
    scrollable,
    setScrollable,
  }

  return (
    <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
  )
}

const useScroll = () => {
  const context = useContext(ScrollContext)
  if (context === null) {
    throw new Error('Context must use inside ScrollContextProvider')
  }

  return context
}

export default useScroll
