import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ListOutlinedIcon from "@material-ui/icons/ListAltOutlined";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    color: "navbar__linksRed",
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <FormatListBulletedIcon />,
    color: "navbar__linksGreen",
  },
  {
    title: "Lists",
    path: "/lists",
    icon: <ListOutlinedIcon />,
    color: "navbar__linksYellow",
  },
  
  {
    title: "Chat",
    path: "/chat",
    icon: <ForumIcon />,
    color: "navbar__linksPurple",
  },
];