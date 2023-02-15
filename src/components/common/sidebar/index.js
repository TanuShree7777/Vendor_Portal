import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { menues } from "./sidebar";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenSmall, setIsOpenSmall] = useState(false);
  const [status, setStatus] = useState('');

  // useEffect(() => {

  //   function handleResize() {
  //     setStatus(getDimension());
  //   }
  //   window.addEventListener("resize", handleResize);

  //   if (status < 1020) {
  //     setIsOpen(false);
  //   }
  //   if (status > 1021) {
  //     setIsOpen(true);
  //   }
  //   return () => window.removeEventListener("resize", handleResize);

  // }, [status]);
  // function getDimension() {
  //   return window.innerWidth;
  // }
  // const { isOpen, setIsOpen, isOpenSmall, setIsOpenSmall } = props;

  const location = useLocation();

  const isActivePath = (menu) => {
    let isActive = false;
    if (location.pathname.length > 2 && menu.path.includes(location.pathname)) {
      isActive = true;
    } else if (menu.subMenu && menu.subMenu.includes(location.pathname)) {
      isActive = true;
    } else if (location.pathname == menu.path) {
      isActive = true;
    }
    return isActive;
  };

  const handleTrigger = () => setIsOpen(!isOpen);
  const handleBack = () => {
    setIsOpenSmall(false)
  }
  return (
    <>
      <div className={`sidebar ${isOpen || isOpenSmall ? "sidebar--open" : ""}`} id="sidebar">
        <div className="logo_sec">
          <img
            onClick={handleTrigger}
            style={{ cursor: "pointer" }}
            className="big_screen_trigger px-3 my-3"
            src={logo}
          />
        </div>
        <hr style={{margin:"0px"}}/>
        {menues.map((item, index) => {
          return (
            <div className="parentDiv px-4">
              <div className={isOpen || isOpenSmall ? "list-group rounded-0" : "list-group rounded-1"} key={index} >
                <p className={isOpen || isOpenSmall ? "" : "text_block"}>{item.head}</p>
                {item.menues.map((menu, ind) => {
                  return (
                    <>
                      <Link
                        key={menu.id}
                        to={menu.path}
                        onClick={handleBack}
                        className={`list-group-item list-group-item-action border-0 align-items-center`}
                      >
                        
                          <Image
                            className="me-2 mb-1 sidebar_close"
                            src={`image/${menu.activeIcon}`}
                          />
                         
                      
                          {/* <Image className="me-2 mb-1 sidebar_close" src={`image/${menu.icon}`} /> */}
                       
                        <span className={`ml-2  ${isOpen || isOpenSmall ? "" : "text_block"}`}>{menu.heading}</span>
                      </Link></>
                  );
                })}
              </div>
            </div>

          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
