import React, { useState, useEffect } from "react";
import ResizeObserver from "rc-resize-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText"; //////
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

import "./sidebar.css";
import logo from "../../imgs/logo.svg";
import cart from "../../imgs/cart-icon.svg";
import home from "../../imgs/home-icon.svg";
import DropdownItem from "../dropdownItem/DropdownItem";
import ListItem from "../listItem/ListItem";
import SlidebarHeader from "../SlidebarHeader";
import HeaderItem from "../HeaderItem";

const navListAppAndPages = [
  { icon: <EmailOutlinedIcon />, text: "Email" },
  { icon: <ChatBubbleOutlineOutlinedIcon />, text: "Chat" },
  { icon: <CheckBoxOutlinedIcon />, text: "Todo" },
  { icon: <CalendarTodayOutlinedIcon />, text: "Calendar" },
];
const navListUserInterface = [
  { icon: <FormatColorTextIcon />, text: "Typography" },
  { icon: <InvertColorsOutlinedIcon />, text: "Colors" },
  { icon: <RemoveRedEyeOutlinedIcon />, text: "Feather" },
];
const Sidebar = () => {
  const [close, toggleClose] = useState(false);
  const [trunc, toggleTrunc] = useState(false);
  return (
    <ResizeObserver
      onResize={(e) => {
        if (e.width < 250) {
          toggleTrunc(true);
        } else {
          toggleTrunc(false);
        }
      }}
    >
      <div className={`sidebar ${close && "close"}`}>
        <SlidebarHeader logo={logo} toggleClose={toggleClose} />
        <ul className="main-nav">
          <li className="nav-item has-sub">
            <a href="#">
              <HomeOutlinedIcon
                className="scale-icon"
                xs={{ fontSize: "40" }}
                fontSize="large"
              />
              <span className={`${trunc && "text-trunc"} menu-title`}>
                dashboard
              </span>
              <span className={`${trunc && "text-trunc"} badge`}>2</span>
            </a>
            <span className={`${trunc && "text-trunc"} arrow`}>
              <ArrowForwardIosOutlinedIcon />
            </span>
          </li>
          <HeaderItem trunc={trunc} text="Apps & Pages" />
          {navListAppAndPages.map((element, index) => (
            <ListItem
              key={index}
              trunc={trunc}
              text={element.text}
              icon={element.icon}
            />
          ))}
          <DropdownItem
            icon={<DescriptionOutlinedIcon className="scale-icon" />}
            text="Invoice"
            subElements={["list", "preview", "edit", "add"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<ShoppingCartOutlinedIcon className="scale-icon" />}
            text="e-commerce"
            subElements={["Shop", "details", "wishlist", "checkout"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<PersonOutlinedIcon className="scale-icon" />}
            text="User"
            subElements={["List", "View", "Edit"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<InsertDriveFileOutlinedIcon className="scale-icon" />}
            text="Pages"
            subElements={[
              "Authentication",
              "Account Settings",
              "Profile",
              "Faq",
              "Knowledge Base",
              "Pricing",
              "Blog",
              "Mail Templates",
            ]}
            trunc={trunc}
          />
          <HeaderItem trunc={trunc} text="User Interface" />
          {navListUserInterface.map((element, index) => (
            <ListItem
              key={index}
              trunc={trunc}
              text={element.text}
              icon={element.icon}
            />
          ))}{" "}
        </ul>
      </div>
    </ResizeObserver>
  );
};

export default Sidebar;
