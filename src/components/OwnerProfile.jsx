import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import profilePic from "../images/profile.jpeg";
import { Helmet } from "react-helmet";

// owner profile dispaly container
const OwnerProfileSideBar = (props) => {
  return (
    <div className="expanded_sidebar">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
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
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
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
