import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import shutter from "../images/shutter-button.png";
import close from "../images/close-btn.png";
import retake from "../images/retake-button.png";

const videoConstraints = {
  width: 550,
  height: 1920,
  facingMode: "user",
};
const Web = ({ setEnable, setPicture, picture, name, setName }) => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();

    setPicture(pictureSrc);
  }, [webcamRef]);

  const handleSave = ({}) => {
    if (picture && name) {
      localStorage.clear();
      localStorage.setItem("picture", picture.picture);
      localStorage.setItem("name", name);

      setEnable(false);
    }
  };
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, "");

    setName(result);
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "100%",
        height: "94vh",
        paddingTop: "40px",
        borderRadius: "10px",
      }}
    >
      <div>
        {picture?.picture === "" ? (
          <div
            style={{
              border: "3px dashed gray",
              width: 350,
              position: "relative",
              borderRadius: "10px",
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              width={350}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
        ) : (
          <img
            src={picture.picture}
            style={{
              border: "3px dashed gray",
              width: 350,
              position: "relative",
              borderRadius: "10px",
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          />
        )}
      </div>
      <div>
        <img
          src={close}
          onClick={e => {
            e.preventDefault();
            setEnable(false);
          }}
          style={{ position: "absolute", top: "62px", left: "58%" }}
        />
        {picture?.picture !== "" ? (
          <img
            src={retake}
            onClick={e => {
              e.preventDefault();
              setPicture("");
            }}
            style={{ position: "absolute", top: "420px", left: "48%" }}
            className="btn btn-primary"
          />
        ) : (
          <img
            src={shutter}
            onClick={e => {
              e.preventDefault();
              capture();
            }}
            style={{ position: "absolute", top: "420px", left: "48%" }}
            className="btn btn-danger"
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            boxShadow: "2px 2px 1px 0px #00000040 inset",
            width: "80%",
            borderRadius: "4px",
            marginTop: "25px",
            marginRight: "auto",
            marginLeft: "auto",
            background: "#CFCFCF",
            height: "50px",
            textAlign: "center",
          }}
        >
          <input
            type="text"
            maxlength="30"
            placeholder="Enter Your First Name"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              width: "85%",
              background: "#CFCFCF",
              border: "none",
              outline: "none",
            }}
            pattern="[A-Za-z]"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10px",

            boxShadow: "0px 4px 0px 0px #00000040",
            borderRadius: "12px",
            border: "5px solid white",
          }}
        >
          <button
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "10px",
              // width: "160px",
              border: "none",
              background: "#A1A1A1",
              fontSize: "36px",
              borderRadius: "12px",
              fontFamily: "Hobeaux regular",
              fontWeight: "900",
              color: "white",
              padding: "10px 40px 10px 40px",
            }}
            className={picture.picture && name ? "hover" : ""}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Web;
