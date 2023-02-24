import React from "react";
import styled from "styled-components";
import { GiBroom } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const logoStyle = {
    color: "white",
    width: "60px",
    height: "60px",
    margin: "auto 10px",
  };
  const userStyle = {
    color: "lightgray",
    width: "40px",
    height: "40px",
    margin: "auto 0px",
  };
  return (
    <HeaderBox>
      <div></div>
      <TitleBox>
        <GiBroom style={logoStyle} />
        <Logo>청소 대장</Logo>
      </TitleBox>
      <FaUserCircle style={userStyle} />
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 6rem;
  background-color: rgb(83, 127, 231);
  color: white;
  display: flex;
  justify-content: space-around;
`;
const TitleBox = styled.div`
  display: flex;
`;
const Logo = styled.h1`
  margin: auto 0px;
`;
