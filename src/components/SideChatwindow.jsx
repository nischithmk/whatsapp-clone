import React, { Component } from "react";
import ProfileBar from "./ProfileBar";
import ChatList from "./ChatList";

function SideChatWindow() {
  return (
    <>
      <ProfileBar />
      <ChatList />
    </>
  );
}

export default SideChatWindow;
