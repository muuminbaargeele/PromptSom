import React, { useEffect } from "react";
import postData from "./api/chat";
import Sidebar from "./components/sidebar";
import Chat from "./components/Chat";

const App: React.FC = () => {
  useEffect(() => {
    postData();
  }, []);
  return (
    <div className="flex bg-darkLightGreen h-screen w-full">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
