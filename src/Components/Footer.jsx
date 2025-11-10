import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.footer {
  background:#000000;
  color:#ddd;
  text-align:center;
  padding:10px 12px;
  margin-top:auto;
  border-top:1px solid rgba(37, 21, 70, 0.03);
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
