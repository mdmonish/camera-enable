import React from "react";
import background from "../background.png";
import milky from "../images/milkybar-logo.png";
import home from "../images/home-icon.png";
import sourvenir from "../images/sourvenirs.png";
import download from "../images/downlaod.png";
import passport from "../images/my-passport.png";
import bottom from "../images/passport-bottom.png";
import details from "../images/details.png";
import edit from "../images/edit.png";
import group from "../images/Group.png";

const Home = ({ setEnable, picture, name, setName }) => {
  console.log("picture", picture);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "yellow",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "30px",
        }}
      >
        <img src={milky} />
        <div>
          <img src={sourvenir} style={{ marginRight: "10px" }} />
          <img src={home} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          backgroundImage: `url(${background})`,
          height: "86vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          //   display: "flex",
          //   flexDirection: "column",
        }}
      >
        <img
          src={passport}
          width={200}
          style={{ marginTop: "70px", marginLeft: "10px" }}
        />
        {picture && name ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",

              marginBottom: "40px",
              height: "180px",
              width: 280,
              rotate: "11.77deg",
              marginLeft: "80px",
              // height: 200,
              border: "1px solid #4B4B4B4D",
              boxShadow:
                "3px 0px 2px 0px #29292980, -3px 0px 2px 0px #00000040, 0px 4px 4px 0px #4B4B4B4D",
              borderRadius: "25px 25px 2px 2px",
              background: "gray",
              marginTop: "-163px",
              backgroundImage:
                "linear-gradient(to bottom, rgb(255,255,255), rgb(200,200,200))",
            }}
          >
            <div
              style={{ position: "relative", paddingLeft: "10px" }}
              onClick={() => setEnable(true)}
            >
              <img
                src={picture.picture}
                width={90}
                height={100}
                style={{ border: "2px solid #021689", borderRadius: "7px" }}
              />
              <div style={{ position: "absolute", left: "90px", top: "-5px" }}>
                <img src={edit} width={20} />
                <img
                  src={group}
                  style={{
                    position: "absolute",
                    top: "4px",
                    width: "10px",
                    left: "5px",
                  }}
                />
              </div>
            </div>
            {name && (
              <div style={{ marginLeft: "15px" }}>
                <h1
                  style={{
                    color: "#021689",
                    marginLeft: "15px",
                    fontSize: "16px",
                    margin: 0,
                    paddingLeft: "10px",
                  }}
                >
                  Name
                </h1>
                <h1
                  style={{
                    color: "#0394C3",
                    fontFamily: "Hobeaux regular",
                    fontSize: "35px",
                    lineBreak: "anywhere",
                    margin: 0,
                  }}
                >
                  {name}
                </h1>
                <h1
                  style={{
                    color: "#FAEA18",
                    fontFamily: "Hobeaux regular",
                    fontSize: "11px",
                    marginTop: "20px",
                    textShadow:
                      "0px 0px #0394C3,2px 0px #0394C3,2px 0px #0394C3,2px 2px #0394C3",
                    textDecoration: "1px solid #021689",
                  }}
                >
                  I’m ready to discover the world !
                </h1>
              </div>
            )}
          </div>
        ) : (
          <div style={{ position: "relative" }} onClick={() => setEnable(true)}>
            <img
              src={details}
              width={320}
              style={{ marginTop: "-200px", marginLeft: "60px" }}
            />
          </div>
        )}
        <div>
          <img
            src={bottom}
            width={320}
            style={{ marginTop: "-73px", marginLeft: "25px" }}
          />
        </div>
        <img
          src={download}
          style={{ marginTop: "5px", marginLeft: "10px" }}
          width={130}
        />
      </div>
    </div>
  );
};

export default Home;
