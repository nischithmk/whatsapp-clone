import React from "react";
import App from "../App";
import ChatList from "./ChatList";
import MainChatWindow from "./MainChatWindow";
import SideChatWindow from "./SideChatwindow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Status from "./status";

const RouterExample = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/:PrfileID"
          element={
            <>
              <SideChatWindow />
              <MainChatWindow />
            </>
          }
        />
        <Route path="/status" element={<Status />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
