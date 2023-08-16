import React from "react"
import videoSrc from "./assets/video.mp4"
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  React.useEffect(() => {
    if(!video.current) return;
    const convertVolumeToNumber = Number(volume);
    if(convertVolumeToNumber >= 0 && convertVolumeToNumber <= 1 ) video.current.volume = convertVolumeToNumber;
  }, [volume])

  return (
    <div>
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  )
}

export default App
