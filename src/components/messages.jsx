import React, { useState } from "react";
import chats from "../chats.js";
import { useParams } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs";
import { Helmet } from "react-helmet";

function Messages({ isprofileClicked }) {
  const { PrfileID } = useParams();
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
      {chats
        .slice(0)
        .reverse()
        .map((chat) => {
          if (chat.id == PrfileID) {
            const {
              id,
              message,
              time,
              timestamp,
              side,
              filename,
              type,
              type2,
            } = chat;

            return (
              <div>
                {id ? (
                  side == "right" ? (
                    <div className="rightside_message" key={timestamp}>
                      <div className="align-right message">
                        <div className="bubble right">
                          {type === "text" ? (
                            message
                          ) : (
                            <img
                              id="output"
                              alt="output"
                              style={{ width: "250px", height: "250px" }}
                              src={
                                type2 == "camera"
                                  ? filename
                                  : URL.createObjectURL(filename)
                              }
                            />
                          )}

                          {type === "file" ? (
                            <div className="timestamp2">
                              {time}
                              <div className="right_tick2">
                                <BsCheck2All size={19} />
                              </div>
                            </div>
                          ) : (
                            <div className="timestamp">
                              {time}
                              <div className="right_tick">
                                <BsCheck2All size={19} />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="triangle triangle-right"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="leftside_message" key={timestamp}>
                      <div className="align-left message">
                        <div className="triangle triangle-left"></div>
                        <div className="bubble left">
                          {message}
                          <div className="timestamp">{time}</div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
            );
          }
        })}

      <div className="rightleft_message_containter">
        <div className="rightside_message" key="164432">
          <div className="align-right message">
            <div className="bubble right">
              Demo message
              <div className="timestamp">
                7:08pm
                <div className="right_tick">
                  <BsCheck2All size={17} />
                </div>
              </div>
            </div>
            <div className="triangle triangle-right"></div>
          </div>
        </div>

        <div className="leftside_message" key="1644323">
          <div className="align-left message">
            <div className="triangle triangle-left"></div>
            <div className="bubble left">
              Bot demo message
              <div className="timestamp">7:09pm</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
