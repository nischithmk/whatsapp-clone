import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import ChatList from "./ChatList";
import {
  OwnerProfileSideBar,
  OwnerProfileCloisngSideBar,
} from "./OwnerProfile";

function SideChatWindow() {
  let [sidebar, showsidebar] = useState(null);

  return (
    <div>
      {sidebar ? (
        <OwnerProfileSideBar sidebar={sidebar} closeSideBar={showsidebar} />
      ) : (
        <OwnerProfileCloisngSideBar
          sidebar={sidebar}
          closeSideBar={showsidebar}
        />
      )}
      <ProfileBar sidebar={sidebar} showsidebar={showsidebar} />
      <ChatList />
    </div>
  );
}

export default SideChatWindow;
