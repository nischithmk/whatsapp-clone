import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import users from "../data.js";
import chats from "../chats.js";
import { BsCheck2All } from "react-icons/bs";

function ChatList() {
  let navigate = useNavigate();

  const [searchName, setSearchName] = useState("");
  const { PrfileID } = useParams();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };
  const SingleChat = () => {
    const { PrfileID } = useParams();
    return (
      <div className="allchats">
        {/* User Searching functionality Begins here */}

        {searchName ? (
          <div>
            {users.map((user) => {
              if (user.login.includes(searchName)) {
                const { id, login, avatar_url, time, latest_msg } = user;
                return (
                  <div
                    key={id + 12156}
                    id="singlechat_container_id"
                    className="singlechat_container"
                    style={
                      id == PrfileID
                        ? {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            zIndex: "1",
                            height: "75px",
                          }
                        : {
                            backgroundColor: "#111b21",
                            hover: "#fffff",
                          }
                    }
                    onClick={() => {
                      navigate("/" + id);
                    }}
                  >
                    <img src={avatar_url} alt={login} />
                    <div className="name">
                      <p id="login">{login}</p>
                      <p id="right_tick">
                        <BsCheck2All size={18} />
                      </p>
                      <p id="latest_msg">{latest_msg || "Demo message"}</p>
                      <p id="time">{time || "7:08pm"}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div>
            {users.map((user) => {
              const { id, login, avatar_url, time, latest_msg } = user;
              return (
                <div
                  key={id}
                  id="singlechat_container_id"
                  className="singlechat_container"
                  style={
                    id == PrfileID
                      ? {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          zIndex: "1",
                          height: "75px",
                        }
                      : {
                          backgroundColor: "#111b21",
                          hover: "#fffff",
                        }
                  }
                  onClick={() => {
                    navigate("/" + id);
                  }}
                >
                  <img src={avatar_url} alt={login} />
                  <div className="name">
                    <p id="login">{login}</p>
                    <p id="right_tick">
                      <BsCheck2All size={18} />
                    </p>
                    <p id="latest_msg">{latest_msg || "Demo message"}</p>
                    <p id="time">{time || "7:08pm"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* User Searching functionality Ends here */}
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
          value={searchName}
          onChange={handleSearch}
        />
      </div>
      <SingleChat />
    </div>
  );
}

export default ChatList;
