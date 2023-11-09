import React from "react";
import Sidebar from "./components/sidebar";
import Chat from "./components/Chat";
import { postData } from "./api/chat";
import { ScrollContextProvider } from "./context/ScrollContext";
import { SpeechContextProvider } from "./context/SpeechContext";

const App: React.FC = () => {
  return (
    <div className="flex bg-darkLightGreen absolute top-0 bottom-0 lg:h-screen w-full">
      <ScrollContextProvider>
        <SpeechContextProvider>
          <Sidebar />
          <Chat postData={postData} />
        </SpeechContextProvider>
      </ScrollContextProvider>
    </div>
  );
};

export default App;
