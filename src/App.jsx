import "./App.css";
import { GrHomeRounded } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import heroImg from "./assets/heroImg.png";
import gsap from "gsap";

function App() {
  const tl = gsap.timeline();

  function cursorAnimation(dets) {
    gsap.to("#cursor", {
      x: dets.clientX,
      y: dets.clientY,
      translate: "-50% -50%",
      ease: "slow(0.7,0.7,false)",
    });
  }
  useGSAP(function () {
    tl.from(".hero-part2", {
      y: "100%",
      duration: 0.8,
      opacity: 0,
      ease: "slow",
    });
    tl.from(".nav-part1", {
      y: -100,
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
    });
    tl.from(".nav-part2", {
      x: 100,
      duration: 0.6,
      stagger: 1,
      opacity: 0,
    });
    tl.from(".hero-part1 .big-font", {
      opacity: 0,
      duration: 0.6,
      y: "-100%",
    });
    tl.from(".hero-part1 .small-font", {
      opacity: 0,
      duration: 0.6,
      y: "-100%",
    });
    tl.from(".hero-part3", {
      x: "100%",
      opacity: 0,
      duration: 0.6,
    });
    tl.from(".hero-part1 #links", {
      opacity: 0,
      duration: 0.3,
    });
    tl.from("#cursor", {
      opacity: 0,
      duration: 0.2,
    }).add(cursorAnimation);
  });
  return (
    <>
      <div id="cursor"></div>
      <main onMouseMove={cursorAnimation}>
        <nav>
          <div className="nav-part1 ">
            <a href="#">home</a>
            <a href="#">marketplace</a>
            <a href="#" id="active">
              resource
            </a>
            <a href="#">FAQ</a>
          </div>
          <div className="nav-part2">
            <GrHomeRounded size={17} className="nav-icons" />
            <GoPerson size={19} className="nav-icons" />
            <div className="search-container">
              <IoSearchOutline className="search-icon" />
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-part1">
            <h4 className="small-font">CODE</h4>
            <h1 className="big-font">GREEN</h1>
            <div id="links">
              <h3>IN</h3>
              <h3>TW</h3>
              <h3>OS</h3>
            </div>
          </div>
          <div className="hero-part2">
            <img src={heroImg} alt="hero-image" />
          </div>
          <div className="hero-part3">
            <h1>Shine Bright</h1>
            <p>
              Step into a new era of digital art with Light NFT. Our platform
              offers unique, blockchain-secured NFTs that bring light and
              creativity to your collection
            </p>
            <div>
              DISCOVER <HiArrowLongRight size={35} className="icon" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
