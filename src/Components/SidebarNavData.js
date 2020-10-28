import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ChatIcon from '@material-ui/icons/Chat';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    color: "navbar__linksRed",
  },
  {
    title: "Groups",
    path: "/groups",
    icon: <GroupIcon />,
    color: "navbar__linksYellow",
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <EmojiObjectsIcon />,
    color: "navbar__linksGreen",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <ChatIcon />,
    color: "navbar__linksPurple",
  },
];