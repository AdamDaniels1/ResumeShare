import React from "react";
import resume from "../images/0001.jpg"; //has to be in src folder for this method to work, other method through modules has to be through public folder

function ImageViewer() {
  return (
    <div>
      <img
        src={resume}
        alt="resume"
        className="w-8/12 h-11/12 mx-auto my-auto pb-10"
      />
    </div>
  );
}

export default ImageViewer;
