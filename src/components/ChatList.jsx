import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import users from "../data.js";

function ChatList() {
  let navigate = useNavigate();

  const { PrfileID } = useParams();
  const SingleChat = () => {
    const { PrfileID } = useParams();
    return (
      <div className="allchats">
        {users.map((user) => {
          const { id, login, avatar_url, url } = user;
          return (
            <div
              key={id}
              id="singlechat_container_id"
              className="singlechat_container"
              style={
                id == PrfileID
                  ? { backgroundColor: "rgba(255, 255, 255, 0.1)" }
                  : {
                      backgroundColor: "#111b21",
                      hover: "#fffff",
                    }
              }
              // onMouseOver={() => {
              //   console.log("over");
              //   setBgColour("rgba(255, 255, 255, 0.1)");
              // }}
              onClick={() => {
                navigate("/" + id);
              }}
            >
              <img src={avatar_url} alt={login} />
              <div className="name">
                <p>{login}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="chatlist-container">
      <div className="searchBox">
        <label htmlFor="searchBox" id="icon">
          <AiOutlineSearch size={20} />
        </label>
        <input
          type="text"
          id="searchBox"
          placeholder="Search or start new chat"
        />
      </div>
      <SingleChat />
    </div>
  );
}

export default ChatList;
