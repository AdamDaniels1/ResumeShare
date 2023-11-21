import React from "react";
import { Link } from "react-router-dom";
import ImageViewer from "../components/ImageViewer";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="bg-slate-200">
          <div className="text-center pt-8">
            <h1 className="text-5xl font-bold font-mono text-slate-800">
              Resume Share
            </h1>
            <p className="font-mono text-slate-800 pt-3 text-lg">
              Get feedback from real people
            </p>
            <hr className="my-4 w-1/2 mx-auto border-t-2 border-gray-300" />
            <span className="ml-2 mr-2 font-bold font-mono cursor-pointer">
              <Link to="/">Home</Link>
            </span>
            <span className="ml-1 mr-2 font-bold font-mono cursor-pointer">
              <Link to="/Fileupload">Upload</Link>
            </span>
            <span className="ml-2 mr-2 font-bold font-mono cursor-pointer">
              <Link to="/About">About</Link>
            </span>
            <span className="ml-2 mr-2 font-bold fond-mono cursor-pointer">
              <Link to="/Browse">Browse</Link>
            </span>
            {/*<div className="my-4">
              <ImageViewer />
  </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
