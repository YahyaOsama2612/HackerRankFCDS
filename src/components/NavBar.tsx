import { useState, useEffect } from "react";
import logo from "/src/assets/hackerrank8164.logowik.com.webp"

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "center" : "flex-start",
        justifyContent: "space-between",
      }}
      className="d-flex flex-col md:flex-row justify-between items-center md:items-start"
    >
      <img
        src={logo}
        alt=""
        style={{
          width: isSmallScreen ? "150px" : "250px",
          marginTop: isSmallScreen ? "10px" : "-50px",
          marginLeft: isSmallScreen ? "0" : "20px",
        }}
        className="w-[150px] md:w-[250px] mt-2 md:mt-[-50px] ml-0 md:ml-4 "
      />
      <ul
        className="header list-none flex flex-col md:flex-row items-center md:items-start mr-0 mt-5 md:mt-9 font-bold p-0"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: isSmallScreen ? "center" : "flex-start",
          marginRight: isSmallScreen ? "0" : "0px",
          marginTop: isSmallScreen ? "20px" : "35px",
          fontWeight: "bold",
          padding: 0,
        }}
      >
        <li
          style={{
            marginRight: isSmallScreen ? "0" : "100px",
            marginBottom: isSmallScreen ? "15px" : "0",
          }}
          className="mr-0 md:mr-[100px] mb-4 md:mb-0"
        >
          <a href="#project">About Us</a>
        </li>
        <li
          style={{
            marginRight: isSmallScreen ? "0" : "100px",
            marginBottom: isSmallScreen ? "15px" : "0",
          }}
          className="mr-0 md:mr-[100px] mb-4 md:mb-0"
        >
          <a href="#contact">Contact Us</a>
        </li>
        <li
          style={{
            marginRight: isSmallScreen ? "0" : "100px",
            marginBottom: isSmallScreen ? "15px" : "0",
          }}
          className="mr-0 md:mr-[100px] mb-4 md:mb-0"
        >
          <a href="#sponser">Sponsors</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
