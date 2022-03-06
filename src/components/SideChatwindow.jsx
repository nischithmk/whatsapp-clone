import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import ChatList from "./ChatList";
import { Helmet } from "react-helmet";

import {
  OwnerProfileSideBar,
  OwnerProfileCloisngSideBar,
} from "./OwnerProfile";

function SideChatWindow() {
  let [sidebar, showsidebar] = useState(null);

  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, user-scalable=no"
        />
        <title>React app</title>
        <meta name="description" content="React application" />
      </Helmet>
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
