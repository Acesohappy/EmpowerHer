import React from "react";
import Box from "../Components/Box";  
import SOSButton from "../Components/SOSButton";
import Footer from "../Components/Footer";
import "../App.css";

function Home() {
  const pages = [
    { text: "Feature 1", path: "/feature1" },
    { text: "Feature 2", path: "/feature2" },
    { text: "Feature 3", path: "/feature3" },
    { text: "Feature 4", path: "/feature4" },
    { text: "Feature 5", path: "/feature5" },
    { text: "Feature 6", path: "/feature6" }
  ];

  return (
    <div className="container">

      <div className="header">
        <img src="/logo.jpg" alt="logo" className="logo"/>
        <img src="/profile.png" alt="profile" className="profile"/>
      </div>      

      <h2 className="headline">Welcome to the App</h2>
        
      <div className="box-container">
        {pages.map((page, index) => (
          <Box key={index} text={page.text} path={page.path} />
        ))}
      </div>

      <SOSButton />

      <Footer />  
    </div>
  );
}

export default Home;
