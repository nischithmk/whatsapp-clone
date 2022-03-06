import App from "../App";
import ChatList from "./ChatList";
import MainChatWindow from "./MainChatWindow";
import SideChatWindow from "./SideChatwindow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Status from "./status";
import React, { useEffect, useState } from "react";

const RouterExample = () => {
  // var root = document.getElementById("root");

  // window.addEventListener("resize", () => {
  // root.style.setProperty("--screen-x", window.screenX);
  // root.style.setProperty("--screen-y", window.screenY);
  // console.log(window.screenX);
  // console.log(window.screenY);
  // const [windowWidth, setWindowWidth] = useState(0);
  // const [windowHeight, setWindowHeight] = useState(0);
  // let resizeWindow = () => {
  //   setWindowWidth(window.innerWidth);
  //   setWindowHeight(window.innerHeight);
  // };

  // useEffect(() => {
  //   resizeWindow();
  //   window.addEventListener("resize", resizeWindow);
  //   return () => window.removeEventListener("resize", resizeWindow);
  // }, []);

  // console.log("height - " + windowHeight + "px");
  // console.log("width - " + windowWidth + "px");
  // root.style.setProperty("--screen-x", windowHeight);
  // root.style.setProperty("--screen-y", windowWidth);

  // });
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
