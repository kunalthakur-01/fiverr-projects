import React, { useEffect, useRef, useState } from "react";
import ImageUpload from "../authentication/ImageUpload";

import "./GetProductImages.css";

const GetProductImages = (props) => {
  const pickImageRef = useRef();
  const [files, setFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [isMainImgSelected, setIsMainSelected] = useState(false);

  useEffect(() => {
    if (!files || !files.length) {
      return;
    }

    const file = files[files.length - 1];
    const fileReader = new FileReader();

    if (files.length === 5) {
      fileReader.onload = () => {
        setPreviewUrl((prevState) => [
          prevState[0],
          prevState[1],
          prevState[2],
          prevState[3],
          fileReader.result,
        ]);
      };
      fileReader.readAsDataURL(file);
      return;
    }

    fileReader.onload = () => {
      setPreviewUrl((prevState) => [...prevState, fileReader.result]);
    };

    fileReader.readAsDataURL(file);
  }, [files, files.length, files[4], files[0]]);

  const pickedHandler = (e) => {
    let pickedFile = files;

    // if(e.target.files && e.target.files.length !== 0 && !pickedFile.length){
    //   pickedFile[1] = e.target.files[0];
    //   setFiles(pickedFile);
    // }

    if (!pickedFile.length) {
      setIsMainSelected(true);
      return;
    }

    if (
      e.target.files &&
      e.target.files.length !== 0 &&
      pickedFile.length < 5
    ) {
      pickedFile.push(e.target.files[0]);
      setFiles(pickedFile);
      setIsValid(true);
    } else if (
      e.target.files &&
      e.target.files.length !== 0 &&
      files.length >= 5
    ) {
      pickedFile[4] = e.target.files[0];
      setFiles(pickedFile);
    }

    props.onInput({
      id: props.id,
      value: pickedFile,
      isValid: pickedFile.length > 1,
    });
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsMainSelected(false);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [isMainImgSelected]);

  const pickImageBtn = () => {
    pickImageRef.current.click();
  };

  const getMainImg = (data) => {
    if (data.isValid) {
      let pickedFiles = files;
      pickedFiles.unshift(data.value);
      setFiles(pickedFiles);
      props.onInput({ id: props.id, value: pickedFiles, isValid: false });

      // let pickedFiles = files;
      // pickedFiles[0] = data.value;
      // setFiles(pickedFiles);
      // props.onInput({ id: props.id, value: pickedFiles, isValid: false });
    }
  };

  return (
    <>
      <ImageUpload
        name={"Product Main Image*"}
        id={"image"}
        onInput={getMainImg}
      />
      <div className="form-images-input">
        <label htmlFor="images"> {props.name} </label>
        <input
          type="file"
          id={props.id}
          ref={pickImageRef}
          onChange={pickedHandler}
          name="image1"
          style={{ display: "none" }}
          accept=".jpg, .jpeg, .png"
        />
    
        <div className="form-images-section">
          <div onClick={pickImageBtn} className="form-image-placeholder">
            {previewUrl[1] ? (
              <img src={previewUrl[1]} alt="preview" />
            ) : (
              <p>
                Click to <br /> pick img
              </p>
            )}
          </div>
          <div onClick={pickImageBtn} className="form-image-placeholder">
            {previewUrl[2] ? (
              <img src={previewUrl[2]} alt="preview" />
            ) : (
              <p>
                Click to <br /> pick img
              </p>
            )}
          </div>
          <div onClick={pickImageBtn} className="form-image-placeholder">
            {previewUrl[3] ? (
              <img src={previewUrl[3]} alt="preview" />
            ) : (
              <p>
                Click to <br /> pick img
              </p>
            )}
          </div>
          <div onClick={pickImageBtn} className="form-image-placeholder">
            {previewUrl[4] ? (
              <img src={previewUrl[4]} alt="preview" />
            ) : (
              <p>
                Click to <br /> pick img
              </p>
            )}
          </div>
        </div>
      </div>
      {isMainImgSelected && (
        <p className="clickBeforeMain">First select main image!</p>
      )}
    </>
  );
};

export default GetProductImages;
