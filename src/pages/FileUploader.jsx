import React, { useState } from 'react';
import "../styles/pages/FileUploader.css"
import { useStore } from '../custom-hooks/store';
import { NavLink } from 'react-router-dom';
// File upload component
const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setLaws, setFileLaws } = useStore();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // on upload click - validating json and updating store with new laws
  // redirect to laws page with new data
  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const json = JSON.parse(content);
        if(!validateJson(json)) {
          alert('JSON file is invalid');
        } else {
          setLaws(json.laws)
          setFileLaws(json.laws)
        }
      };
      reader.readAsText(selectedFile);
      
    } else {
      console.error('No file selected');
    }
  };

  // validate json content to make sure it is readable and in data structure
  const validateJson = (json) => {
    if (!json || typeof json !== 'object') return false

    if (!json.laws || !Array.isArray(json.laws)) {
        return false;
    }

    for (let law of json.laws) {
        if (!validateLaw(law)) {
            return false;
        }
    }

    return true;
  }

  // validate that law object has all needed properties
  const validateLaw = (law) => {
    if (!law || typeof law !== 'object') return false

    if (typeof law.id !== 'string'
        || !law.label
        || typeof law.label !== 'object'
        || (law.children && !Array.isArray(law.children))) {
        return false;
    }

    if(law.children) {
      for (let child of law.children) {
          if (!validateLaw(child)) {
              return false;
          }
      }
    }
    return true;
  }

  return (
    <main className="json-file-uploader-container">
      {selectedFile ? (
        <>
          <div className="file-info">
            Selected file: {selectedFile.name}
          </div>
          <NavLink to='../'>
            <button className="upload-button" onClick={handleUpload} disabled={!selectedFile}>Upload</button>
          </NavLink>
        </>
      ) : (
        <input className="file-input" type="file" onChange={handleFileChange} />
      )}
    </main>
  );
};

export default FileUploader;
