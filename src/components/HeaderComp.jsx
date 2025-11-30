//import { Button } from "antd";
import moi from "../assets/images/moi.jpg";
import {
  //FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  //MessageOutlined,
  //TwitterOutlined,
  InstagramOutlined
} from "@ant-design/icons";

// import { useState, useRef, useEffect, useCallback } from "react";


const HeaderComp = () => {
  // const musicList = [
  //   "/music/J. Cole - Huntin' Wabbitz.mp3",
  //   "/music/COCHISE - GRIND .mp3",
  //   "/music/21 Savage - a lot .mp3",
  //   "/music/Loving Me, Loving You.mp3",
  //   "/music/Freestyle.mp3",
  // ].sort();

  // const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // const audioRef = useRef(null);
  

  // // Fonction pour passer à la musique suivante, mémorisée avec useCallback
  // const playNextTrack = useCallback(() => {
  //   setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicList.length);
  // }, [musicList.length]);

  // const playPreviousTrack = useCallback(() => {
  //   setCurrentTrackIndex((prevIndex) =>
  //     prevIndex === 0 ? musicList.length - 1 : prevIndex - 1
  //   );
  // }, [musicList.length]);

  

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // }, [currentTrackIndex]);
  return (
    <header>
      <div className='left'>
        
        <div className='user-infos'>
          <h1>Maxence Ethan</h1>
          <h3>Developpeur web - mobile - Intelligence artificielle</h3>
          <div className='contacts'>
            <div className='contact-item'>
              <a
                  href="https://www.linkedin.com/in/maxence-ethan-bb145928a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="couleur"
                >
              <LinkedinOutlined  />
              </a>
            </div>
            <div className='contact-item'>
            <a
                  href="https://www.instagram.com/maxence_ethan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="couleur"
                >
              <InstagramOutlined />
              </a>
            </div>
            <div className='contact-item'>
            <a
                  href="https://github.com/Maxence2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="couleur"
                >
              <GithubOutlined />
              </a>
            </div>
            
          </div>
        </div>
      </div>
      {/* <div className="music-panel">
        <h2 style={{ color: "white" , marginBottom: "20px"}}>Playlist personnelle</h2>
        <audio
          ref={audioRef}
          src={musicList[currentTrackIndex]}
          autoPlay
          controls
          style={{ display: "inline-block" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          <button
            onClick={playPreviousTrack}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            ◀️
          </button>
          <p style={{ color: "white", margin: "0" }}>
            Musique actuelle : {musicList[currentTrackIndex].split("/").pop()}
          </p>
          <button
            onClick={playNextTrack}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            ▶️
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default HeaderComp;
