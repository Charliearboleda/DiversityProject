import React from "react";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const Header = styled.div`
      display: flex;
      justify-content: space-around;
      position:relative;
      background:#FFF;
      left:0;
      top:0;
      width:100%;
      height: 60px;
      box-shadow: 0px 2px 4px rgba(97, 116, 128, 0.12), 0px 4px 8px rgba(176, 186, 191, 0.12)
    }
  `;
  const Image = styled.img`
    width: 28px;
    height: 28px;
  `;

  const LogoTitle = styled.h4`
    font: 1.2rem bungee;
    margin: 0 0 0 8px;
    letter-spacing: 1.5px;
  `;

  const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 19px;
    left: 5.3vw;
    margin: 0;
  `;
  const NavLinksDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 22vw;
    top: 23px;
  `;

  const Profile = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50px;
  `;

  const RightNavDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 3vw;
    top: 19px;
  `;

  const Initials = styled.p`
    position: absolute;
    top: -12px;
    font-family: roboto;
    font-weight: 200;
    right: 3px;
    color: white;
  `;

  return (
    <Header>
      <LogoDiv>
        <Link className="knowledgelinkhome" to="/">
          <Image src="Logo.png" />
          <LogoTitle>Mathison</LogoTitle>
        </Link>
      </LogoDiv>

      <NavLinksDiv>
        <NavLink
          to="jobs"
          className={({ isActive }) =>
            "knowledgelink" + (isActive ? " active" : " inactive")
          }
        >
          Jobs
        </NavLink>

        <NavLink
          to="equal"
          className={({ isActive }) =>
            "knowledgelink" + (isActive ? " active" : " inactive")
          }
        >
          Equal Hiring Index
        </NavLink>

        <NavLink
          to="knowledgecenter"
          className={({ isActive }) =>
            "knowledgelink" + (isActive ? " active" : " inactive")
          }
        >
          Knowledge Center
        </NavLink>
        <NavLink
          to="bias"
          className={({ isActive }) =>
            "knowledgelink" + (isActive ? " active" : " inactive")
          }
        >
          Bias Scanner
        </NavLink>
      </NavLinksDiv>

      <RightNavDiv>
        <NavLink
          style={{ paddingBottom: "14px" }}
          to="contact"
          className={({ isActive }) =>
            "contact" + (isActive ? " active" : " inactive")
          }
        >
          Contact Us
        </NavLink>

        <div className="bell">
          <i
            style={{ fontSize: "25px", margin: "0 10px 5px 0", color: "#555" }}
            class="far fa-bell"
          ></i>
          <div className="notification"></div>
        </div>
        <Link to="profile">
          <div style={{ position: "relative", paddingBottom: "17px" }}>
            <Profile src="image_50333441.JPG" />
            <Initials>CA</Initials>
          </div>
        </Link>
      </RightNavDiv>
    </Header>
  );
};
export default Header;
