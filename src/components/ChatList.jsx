import React, { Component, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function ChatList() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => getUsers(), [url]);

  const SingleChat = () => {
    return (
      <div className="allchats">
        {users.map((user) => {
          const { id, login, avatar_url, url } = user;
          return (
            <div key={id} className="singlechat_container">
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
