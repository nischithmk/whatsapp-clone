import React, { useState, useRef, useEffect } from "react";
import Messages from "./messages";
import chats from "../chats";
import { useParams } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import Picker from "emoji-picker-react";
import { BsEmojiSmile, BsSlack } from "react-icons/bs";
import Webcam from "react-webcam";
import users from "../data";
import { Helmet } from "react-helmet";

function MessageBar({ isprofileClicked }) {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ampm;
    return strTime;
  }

  const { PrfileID } = useParams();
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState(chats);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isEmojiOpen, setisEmojiOpen] = useState(false);
  const [isFileBarOpen, setisFileBarOpen] = useState(false);
  const [wobble, setWobble] = React.useState(0);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMessage([message + chosenEmoji.emoji]);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const newMessage = {
        message: message,
        time: formatAMPM(new Date()),
        timestamp: new Date().getTime().toString(),
        side: "right",
        id: PrfileID,
        type: "text",
      };
      chats.push(newMessage);
      const newMessage2 = {
        message: "Bot replying back",
        time: formatAMPM(new Date()),
        timestamp: new Date().getTime().toString() + 1,
        id: PrfileID,
        side: "left",
        latest: "Bot replying back",
      };
      chats.push(newMessage2);
    }
    update_latest_message();
    setAllMessages([...allMessages]);
    setMessage("");
    setisEmojiOpen(false);
    setWobble(1);
  };

  const [file, setFile] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      filename: file,
      time: formatAMPM(new Date()),
      timestamp: new Date().getTime().toString(),
      side: "right",
      id: PrfileID,
      type: "file",
      type2: "file",
    };
    chats.push(newMessage);
    setAllMessages([...allMessages]);
    setisFileBarOpen(false);
    setenableWebcam(false);
    setFile(null);
    update_latest_message();
  };

  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  // Image Input Video handling
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [enableWebcam, setenableWebcam] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("before", imgSrc);
    setImgSrc(imageSrc);
    console.log("after", imgSrc);
    handleCameraSend(imageSrc);
  }, [webcamRef, setImgSrc]);

  // const stopVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then(function (stream) {
  //       stream.getVideoTracks().forEach(function (track) {
  //         if (track.readyState == "live" && track.kind == "video") {
  //           track.stop();
  //         }
  //       });
  //     });
  // };
  const handleCameraSend = (imageSrc) => {
    // e.preventDefault();
    const newMessage = {
      filename: imageSrc,
      time: formatAMPM(new Date()),
      timestamp: new Date().getTime().toString(),
      side: "right",
      id: PrfileID,
      type: "file",
      type2: "camera",
    };
    chats.push(newMessage);
    setAllMessages([...allMessages]);
    setisFileBarOpen(false);
    setenableWebcam(false);
    update_latest_message();
  };

  // latest message updating

  const update_latest_message = () => {
    for (var i = 0; i < chats.length; i++) {
      latest_message(chats[i].id, chats[i].time, chats[i].type2);
    }
  };
  var latest_message = (mId, mTime, mType) => {
    for (let j = 0; j < users.length; j++) {
      if (users[j].id == mId) {
        if (mType == "camera") {
          users[j].time = mTime;
          users[j].latest_msg = "Image";
        } else if (mType == "file") {
          users[j].time = mTime;
          users[j].latest_msg = "File";
        } else {
          users[j].time = mTime;
          users[j].latest_msg = "Bot replying back";
        }
      }
    }
  };

  return (
    <>
      <div
        className={
          isprofileClicked ? "messagebar-container2" : "messagebar-container"
        }
        // style={{
        //   width: isprofileClicked ? "610px" : "100vw",
        //   transition: "  1s",
        // }}
      >
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, user-scalable=no"
          />
          <title>React app</title>
          <meta name="description" content="React application" />
        </Helmet>
        {enableWebcam ? (
          <div className="webcam_container">
            <Webcam
              // height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
            <div className="sendImageBackground" onClick={capture}>
              Send
            </div>
            <div
              className="sendImageBackground"
              onClick={() => {
                setenableWebcam(false);
                setisFileBarOpen(!isFileBarOpen);
              }}
            >
              Cancel
            </div>
          </div>
        ) : null}
        {isFileBarOpen ? (
          <div className="box2">
            <button type="button" name="button" onClick={onButtonClick}>
              <svg viewBox="-1 -1 55 55" width="53" height="53" className="">
                <defs>
                  <circle
                    id="image-SVGID_1_"
                    cx="26.5"
                    cy="26.5"
                    r="25.5"
                  ></circle>
                </defs>

                <path
                  fill="#AC44CF"
                  d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                ></path>
                <path
                  fill="#BF59CF"
                  d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                ></path>
                <path fill="#AC44CF" d="M17 24.5h18v9H17z"></path>

                <g fill="#F5F5F5">
                  <path
                    id="svg-image"
                    d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 0 1-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364Zm5.081 8.22-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 0 0-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 0 0-.861.011Zm8.351-5.22a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"
                  ></path>
                </g>
              </svg>
              <form>
                <input
                  accept="image/*,video/mp4,video/3gpp,video/quicktime"
                  type="file"
                  id="my-file"
                  multiple=""
                  style={{ display: "none" }}
                  onChange={handleInput}
                  ref={inputFile}
                />
              </form>
            </button>

            <button
              type="button"
              name="button"
              onClick={() => setenableWebcam(true)}
            >
              <svg viewBox="-1 -1 55 55" width="53" height="53" className="">
                <defs>
                  <circle
                    id="camera-SVGID_1_"
                    cx="26.5"
                    cy="26.5"
                    r="25.5"
                  ></circle>
                </defs>
                <path
                  fill="#D3396D"
                  d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                ></path>
                <path
                  fill="#EC407A"
                  d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                ></path>
                <path fill="#D3396D" d="M17 24.5h15v9H17z"></path>
                <g fill="#F5F5F5">
                  <path
                    id="svg-camera"
                    d="M27.795 17a3 3 0 0 1 2.405 1.206l.3.403a3 3 0 0 0 2.405 1.206H34.2a2.8 2.8 0 0 1 2.8 2.8V32a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-9.385a2.8 2.8 0 0 1 2.8-2.8h1.295a3 3 0 0 0 2.405-1.206l.3-.403A3 3 0 0 1 25.205 17h2.59ZM26.5 22.25a5.25 5.25 0 1 0 .001 10.501A5.25 5.25 0 0 0 26.5 22.25Zm0 1.75a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        ) : null}

        {/* Displaying uploaded File */}
        {file ? (
          <div className="fileUploaded" onClick={handleFileSubmit}>
            <img
              id="output"
              alt="output"
              src={file ? URL.createObjectURL(file) : null}
            />

            <div className="sendFileBackground">Send</div>
          </div>
        ) : null}

        <div
          className="emoji"
          wobble={wobble}
          onAnimationEnd={() => setWobble(0)}
          style={{
            opacity: !isEmojiOpen ? "0" : "1",
            transition: "2s",
            visibility: !isEmojiOpen ? "hidden" : "visible",
          }}
        >
          <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{
              width: "300px",
              height: "320px",
              backgroundColor: "rgb(32, 44, 53,1)",
              border: "0",
              boxShadow: "0 1px 1px 0 hsl(0, 0%, 31%)",
              color: "white",
            }}
            disableSearchBar={true}
            preload={true}
            groupNames={{
              smileys_people: "",
              animals_nature: "",
              food_drink: "",
              travel_places: "",
              activities: "",
              objects: "",
              symbols: "",
              flags: "",
              recently_used: "",
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            id={isprofileClicked ? "message2" : "message"}
            placeholder="Type a message"
            value={message}
            onChange={handleChange}
            autoComplete="off"
            // style={{
            //   width: isprofileClicked ? "360px" : "50vw",
            //   left: "115px",
            //   transition: "  1s",
            // }}
          />
          <RiAttachment2
            size={35}
            className="file"
            onClick={() => setisFileBarOpen(!isFileBarOpen)}
          />

          <BsEmojiSmile
            size={33}
            className="smiley"
            onClick={() => {
              setisEmojiOpen(!isEmojiOpen);
              setWobble(1);
            }}
          />
          <IoSendSharp
            type="submit"
            className={isprofileClicked ? "send2" : "send"}
            onClick={handleSubmit}
            size={38}
            // style={{
            //   left: isprofileClicked ? "550px" : "65vw",
            //   transition: "  1s",
            // }}
          />
        </form>
      </div>

      <div
        className={
          isprofileClicked ? "message_container2" : "message_container"
        }
        // style={{
        //   width: isprofileClicked ? "558px" : "1028px",
        //   transition: "  1s",
        // }}
      >
        <Messages isprofileClicked={isprofileClicked} />
      </div>
    </>
  );
}

export default MessageBar;
