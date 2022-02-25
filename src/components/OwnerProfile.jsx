import React, { Component } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiArrowNarrowLeft } from "react-icons/hi";
import profilePic from "../images/profile.jpeg";

const OwnerProfileSideBar = (props) => {
  console.log(props.sidebar);
  return (
    <div className="expanded_sidebar">
      <div className="close_button" onClick={() => props.closeSideBar(false)}>
        <h4>
          <HiArrowNarrowLeft size={31} className="closeIcon" />
          <p>Profile</p>
        </h4>
      </div>
      <div className="contents">
        <img src={profilePic} alt="profilepic" />
        <p id="yourName">Your Name</p>
        <p id="name">Nischith MK</p>
        <p id="warinng">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
        <p id="about">About</p>
        <p id="about2">Life is about creating yourself! </p>
      </div>
    </div>
  );
};

const OwnerProfileCloisngSideBar = (props) => {
  console.log(props.sidebar);
  return (
    <div className="closingBar">
      <div className="close_button" onClick={() => props.closeSideBar(false)}>
        <h4>
          <HiArrowNarrowLeft size={31} className="closeIcon" />
          <p>Profile</p>
        </h4>
      </div>
      <div className="contents2">
        <img src={profilePic} alt="profilepic" />
        <p id="yourName">Your Name</p>
        <p id="name">Nischith MK</p>
        <p id="warinng">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
        <p id="about">About</p>
        <p id="about2">Life is about creating yourself! </p>
      </div>
    </div>
  );
};

export { OwnerProfileSideBar, OwnerProfileCloisngSideBar };