import React, { useState } from "react";
import ImageViewer from "./components/ImageViewer";
import Layout from "./components/Layout";

//Note- may need to rewatch taht Dev guy on YT, his video on using Router. I want to have my NavBar as its own separate component
//Continued - and I want to have each nav element(about/browse/fileupload/home) as their own Link (instead of a href) using Router

function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Layout />
      <div className="my-4">
        <ImageViewer />
      </div>
    </div>
  );
}

export default App;
