import React from "react";
import styled from "styled-components";

function Layout(props) {
  return <Layout>{props.children}</Layout>;
}

export default Layout;

const Layout = styled.div`
  width: 1200px;
  height: 800px;
`;
