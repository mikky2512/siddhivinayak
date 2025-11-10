import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.footer {
  background:#09779f;
  color:#ddd;
  text-align:center;
  padding:10px 12px;
  margin-top:auto;
  border-top:1px solid rgba(29, 44, 49, 0.03);
}
`;

function Footer() {
  return (
    <footer className="footer">
         <GlobalStyle />
      devloped by <b> Techstrota </b>  
    </footer>
  );
}

export default Footer;
