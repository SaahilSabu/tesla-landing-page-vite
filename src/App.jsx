import { useState } from "react";
import CarVid from "./assets/final.mp4";
import gsap from "gsap";
import "./App.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  let heroH2 = useRef();
  let heroH3 = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroH2,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 2 }
    );
    gsap.fromTo(
      heroH3,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 2.2 }
    );
  });

  return (
    <div className="App">
      <div className="hero">
        <section className="video-section">
          <h2 ref={(el) => (heroH2 = el)}>Tesla Model S</h2>
          {/* <h3 ref={(el) => (heroH3 = el)}>
            Feeling cute might switch to electric
          </h3> */}
          <video autoPlay muted src={CarVid}></video>
        </section>
      </div>
    </div>
  );
}

export default App;
