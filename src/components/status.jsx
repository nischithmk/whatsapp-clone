import React, { useState } from "react";
import profilePic from "../images/profile.jpeg";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import users from "../data";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllStatusList = ({ setImageCounter }) => {
  return (
    <div className="allstatus">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
      {users.map((user) => {
        if (user.id != 1 && user.id != 20) {
          const { id, login, avatar_url } = user;
          return (
            <div
              key={id}
              id="singlechat_container_id"
              className="singleStatus_container"
              onClick={() => setImageCounter(id - 2)}
            >
              <svg
                width="61"
                height="61"
                viewBox="0 0 100 100"
                className="circle"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="green"
                  strokeWidth="5"
                  strokeDasharray="100 5"
                  strokeDashoffset="-15"
                />
              </svg>
              <img src={avatar_url} alt={login} />
              <div className="name">
                <p id="login">{login}</p>
                <p id="time">7:08pm</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

const StatusSidebar = () => {
  return (
    <div className="status_sidebar">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
      <p id="my_status">My Status</p>
      <p id="no_update">No updates</p>
      <img src={profilePic} alt="profilepic" />
      <div className="line"></div>
    </div>
  );
};

const StatusMainbar = ({
  imageCounter,
  setImageCounter,
  rightArrow,
  setRightArrow,
}) => {
  let navigate = useNavigate();
  return (
    <div className="status_Mainbar" key={imageCounter}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
      <ImCross id="cancel" size={18} onClick={() => navigate("/")} />
      <div className="dummy"></div>
      <IoMdArrowDropleftCircle
        size={31}
        onClick={() => {
          setRightArrow(false);
          if (imageCounter >= 17) {
            setImageCounter(17);
          } else {
            setImageCounter(imageCounter + 1);
          }
        }}
        className="left_arrow"
      />
      <IoMdArrowDroprightCircle
        size={31}
        onClick={() => {
          setRightArrow(true);
          if (imageCounter > 0) {
            setImageCounter(imageCounter - 1);
          } else {
            setImageCounter(0);
          }
        }}
        className="right_arrow"
      />
      {imageCounter + 2 < users.length - 1 ? (
        <div
          className={
            rightArrow ? (imageCounter - 1 >= 0 ? "one2" : "dummy") : "one"
          }
        >
          {rightArrow ? (
            imageCounter >= 0 ? (
              users[imageCounter].status[0].endsWith("jpeg") ? (
                <img src={users[imageCounter].status[0]} alt="status" />
              ) : (
                <video src={users[imageCounter].status[0]} loop={true} />
              )
            ) : null
          ) : users[imageCounter + 2].status[0].endsWith("jpeg") ? (
            <img src={users[imageCounter + 2].status[0]} alt="status" />
          ) : (
            <video src={users[imageCounter + 2].status[0]} loop={true} />
          )}
        </div>
      ) : null}

      {imageCounter >= 0 ? (
        <div className={rightArrow ? "two2" : "two"}>
          {rightArrow ? (
            users[imageCounter + 1].status[0].endsWith("jpeg") ? (
              <img src={users[imageCounter + 1].status[0]} alt="status" />
            ) : (
              <video
                src={users[imageCounter + 1].status[0]}
                loop={true}
                autoPlay={rightArrow ? "autoPlay" : null}
                controls={rightArrow ? true : null}
                muted={rightArrow ? false : null}
              />
            )
          ) : imageCounter == 0 ? null : users[imageCounter].status[0].endsWith(
              "jpeg"
            ) ? (
            <img src={users[imageCounter].status[0]} alt="status" />
          ) : (
            <video
              src={users[imageCounter].status[0]}
              loop={true}
              autoPlay={rightArrow ? "autoPlay" : null}
              controls={rightArrow ? true : null}
              muted={rightArrow ? false : null}
            />
          )}
        </div>
      ) : null}

      <div className={rightArrow ? "three2" : "three"}>
        {rightArrow ? (
          users[imageCounter + 2].status[0].endsWith("jpeg") ? (
            <img src={users[imageCounter + 2].status[0]} alt="status" />
          ) : (
            <video
              src={users[imageCounter + 2].status[0]}
              loop={true}
              autoPlay={rightArrow ? null : "autoPlay"}
              controls={rightArrow ? null : true}
              muted={rightArrow ? null : false}
            />
          )
        ) : users[imageCounter + 1].status[0].endsWith("jpeg") ? (
          <img src={users[imageCounter + 1].status[0]} alt="status" />
        ) : (
          <video
            src={users[imageCounter + 1].status[0]}
            loop={true}
            autoPlay={rightArrow ? null : "autoPlay"}
            controls={rightArrow ? null : true}
            muted={rightArrow ? null : false}
          />
        )}
      </div>
    </div>
  );
};

function Status() {
  const [imageCounter, setImageCounter] = useState(0);
  const [rightArrow, setRightArrow] = useState(false);

  return (
    <>
      <AllStatusList
        imageCounter={imageCounter}
        setImageCounter={setImageCounter}
        rightArrow={rightArrow}
        setRightArrow={setRightArrow}
      />
      <StatusSidebar />
      <StatusMainbar
        imageCounter={imageCounter}
        setImageCounter={setImageCounter}
        rightArrow={rightArrow}
        setRightArrow={setRightArrow}
      />
    </>
  );
}

export default Status;
