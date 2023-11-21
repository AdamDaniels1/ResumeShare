import React, { useState } from "react";
import Layout from "./Layout";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement file upload logic here (e.g., send the file to a backend).
    // For now, you can display a message or log the selected file.
    console.log("Selected file:", selectedFile);
  };

  return (
    <div>
      <Layout>
        <div className="text-center pt-11 min-h-screen">
          <div className="relative">
            <label className="text-center font-mono font-bold bg-blue-900 text-slate-100 rounded-md shadow-lg cursor-pointer px-4 py-2">
              Choose a File
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default FileUpload;
