import React from "react";
import styles from "./concept.module.css";

export default function Concept() {
  return (
    <div className="bg-white flex justify-center">
      <video playsInline autoPlay muted loop preload="auto">
        <source src="amadeus_concept.mp4" type="video/mp4" />
        <source src="amadeus_concept.webm" type="video/webm" />
      </video>
    </div>
  );
}
