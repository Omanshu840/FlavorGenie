import React, { useState, useEffect } from "react";
import { CupHot, Cookie, Fire, Cart4 } from "react-bootstrap-icons";
import * as Colors from "../css/colors";

const icons = [Cart4, CupHot, Cookie, Fire];

const Loader = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShrinking(true);
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        setIsShrinking(false);
      }, 375); // Half of the cycle time for shrinking
    }, 750);

    return () => clearInterval(interval);
  }, []);

  const IconComponent = icons[currentIconIndex];

  return (
    <div style={styles.overlay}>
      <div style={styles.loaderContainer}>
        <div style={styles.circleLoader}></div>
        <IconComponent
          style={{
            ...styles.icon,
            transform: isShrinking ? "scale(0)" : "scale(1)",
            opacity: isShrinking ? 0 : 1,
            transition: "transform 0.3 ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100px",
    position: "relative",
  },
  circleLoader: {
    position: "absolute",
    width: "80px",
    height: "80px",
    border: `2px solid ${Colors.BG1}`,
    borderTop: "2px solid transparent",
    borderBottom: "2px solid transparent",
    borderRadius: "50%",
    animation: "spin 1.5s linear infinite",
  },
  icon: {
    fontSize: "48px",
    color: Colors.BG1,
  },
};

export default Loader;
