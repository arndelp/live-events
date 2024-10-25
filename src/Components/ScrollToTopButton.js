import React, { useState, useEffect } from "react";
import "../style/ScrollToTopButton.css";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button ${visible ? "visible" : ""}`}>
      <button onClick={scrollToTop}><div><img src="../assets/fleches-vers-le-haut.png" id="fleche"/></div>Retour</button>
    </div>
  );
}

export default ScrollToTopButton;