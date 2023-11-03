import React from 'react'
import Sidebar from './components/sidebar'
import Chat from './components/Chat'
import { postData } from './api/chat'

const App: React.FC = () => {
  return (
    <div className="flex bg-darkLightGreen h-screen w-full">
      <Sidebar />
      <Chat postData={postData} />
    </div>
  )
}

export default App
