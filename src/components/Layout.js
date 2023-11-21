import React from "react";
import NavBar from "../components/NavBar";

function Layout({ children }) {
  return (
    <div className="bg-slate-200">
      <NavBar></NavBar>
      <div className="bg-slate-200">{children}</div>
    </div>
  );
}

export default Layout;
