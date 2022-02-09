import React, { useState, useRef, useEffect } from "react";
import Messages from "./messages";
import chats from "../chats";
import { useParams } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

function MessageBar() {
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
      };
      chats.push(newMessage);
      const newMessage2 = {
        message: "Bot replying back",
        time: formatAMPM(new Date()),
        timestamp: new Date().getTime().toString() + 1,
        id: PrfileID,
        side: "left",
      };
      chats.push(newMessage2);
    }

    setAllMessages([...allMessages]);
    setMessage("");
    setisEmojiOpen(false);
    setWobble(1);
  };

  //   const messagesEndRef = useRef(null);
  //   const scrollToBottom = () => {
  //     console.log(messagesEndRef.current);
  //     messagesEndRef.current.style.top = "50px";
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  //   useEffect(scrollToBottom, [allMessages]);

  // const messageEl = useRef(null);

  // useEffect(() => {
  //   if (messageEl) {
  //     messageEl.current.addEventListener("DOMNodeInserted", (event) => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top: target.scrollHeight, behavior: "smooth" });
  //     });
  //   }
  // }, []);
  const [wobble, setWobble] = React.useState(0);
  return (
    <>
      <div className="messagebar-container">
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
            id="message"
            placeholder="Type a message"
            value={message}
            onChange={handleChange}
            autoComplete="off"
          />
          <RiAttachment2 size={35} className="file" />
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
            className="send"
            onClick={handleSubmit}
            size={38}
          />
        </form>
      </div>

      <div className="message_container">
        {/* ref={messageEl} */}
        <Messages />
        {/* <p ref={messagesEndRef} /> */}
      </div>
    </>
  );
}

export default MessageBar;
