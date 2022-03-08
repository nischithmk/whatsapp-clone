import React from "react";
import data from "../data.js";
import { useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import {
  MdOutlineArrowForwardIos,
  MdStarRate,
  MdNotifications,
} from "react-icons/md";
import { IoIosTimer, IoIosLock } from "react-icons/io";
import { RiForbid2Line, RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineThumbDown } from "react-icons/hi";
import { Helmet } from "react-helmet";
import m1 from "../images/media1.jpg";
import m2 from "../images/media2.jpg";
import m3 from "../images/media3.jpg";
import m4 from "../images/media4.jpg";

//  user profile view when clicked on user image
function ChatProfileView({ isprofileClicked, setisprofileClicked }) {
  const { PrfileID } = useParams();
  var user = data[PrfileID - 1];
  return (
    <div className="chatprofileview_container">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
      <div className="navbar">
        <ImCross
          size={17}
          style={{
            position: "relative",
            top: "25px",
            left: "40px",
            cursor: "pointer",
          }}
          onClick={() => setisprofileClicked(!isprofileClicked)}
        />
        <p>Contact info</p>
      </div>
      <div className="image">
        <img src={user.avatar_url} alt="profile" />
        <p id="name">{user.login}</p>
      </div>
      <div className="about">
        <p id="about"> About</p>
        <p id="quote"> Die with memories, not dreams.</p>
      </div>
      <div className="media">
        <p>Media, links and docs </p>
        <MdOutlineArrowForwardIos
          size={17}
          style={{
            Color: "red",
            position: "relative",
            top: "25px",
            left: "10px",
            cursor: "pointer",
          }}
        />
        <div id="medias">
          <img src={m1} alt="m1" />
          <img src={m2} alt="m2" />
          <img src={m3} alt="m3" />
          <img src={m4} alt="m4" />
        </div>
      </div>

      <div className="starred">
        <MdStarRate
          size={25}
          style={{
            position: "relative",
            top: "25px",
            left: "25px",
            cursor: "pointer",
          }}
        />
        <p>Starred messages</p>
      </div>
      <div className="notification">
        <div className="mute">
          <MdNotifications
            size={25}
            style={{
              position: "relative",
              top: "25px",
              left: "25px",
              cursor: "pointer",
            }}
          />
          <p>Mute notifications</p>
        </div>
        <div className="disappear">
          <IoIosTimer
            size={25}
            style={{
              position: "relative",
              top: "-20px",
              left: "25px",
              cursor: "pointer",
            }}
          />
          <p>Disappearing messages</p>
          <p>off</p>
        </div>
        <div className="encryption">
          <IoIosLock
            size={25}
            style={{
              position: "relative",
              top: "-100px",
              left: "25px",
              cursor: "pointer",
            }}
          />
          <p>Encryption</p>
          <p>Messages are end-to-end encrypted. Click to verify.</p>
        </div>
      </div>

      <div className="block_report">
        <div className="block">
          <RiForbid2Line
            size={25}
            style={{
              position: "relative",
              top: "5px",
              left: "-30px",
              cursor: "pointer",
            }}
          />
          Block {user.login}
        </div>
        <div className="report">
          <HiOutlineThumbDown
            size={25}
            style={{
              position: "relative",
              top: "5px",
              left: "-30px",
              cursor: "pointer",
            }}
          />
          Report {user.login}
        </div>
      </div>

      <div className="delete">
        <RiDeleteBin7Line
          size={25}
          style={{
            position: "relative",
            top: "20px",
            left: "30px",
            cursor: "pointer",
            color: "rgb(209, 65, 65)",
          }}
        />
        <p>Delete chat</p>
      </div>
    </div>
  );
}

export default ChatProfileView;
