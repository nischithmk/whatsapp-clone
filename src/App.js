import "./App.css";
import "./css/main.css";
import "./css/mediaQuery.css";
import SideChatWindow from "./components/SideChatwindow";
import MainChatWindow from "./components/MainChatWindow";
import React, { useState, useRef, useEffect } from "react";

function App() {
  return (
    <div>
      <SideChatWindow />
      <MainChatWindow />
    </div>
  );
}

export default App;
