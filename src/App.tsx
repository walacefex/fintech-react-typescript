import React from 'react';
import videoSrc from './assets/video.mp4';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    console.log('isPlaying', isPlaying);
  }, []);

  function forward() {
    if(!video.current) return;
    video.current.currentTime += 2;
  }

  function changePlayBackRate(speed: number) {
    if(!video.current) return;
    video.current.playbackRate = speed;
  }

  function mute() {
    if(!video.current) return;
    video.current.muted = !video.current.muted;
  }

  async function pictureInPicture() {
    if(!video.current) return;
    if(document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    }else {
      await video.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        {isPlaying ?
          ( <button onClick={() => video.current?.play()}>Play</button>)
        : (<button onClick={() => video.current?.pause()}>Pause</button>)
        }
        <button onClick={forward}>+ 2s</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={() => changePlayBackRate(3)}>Mute</button>
      </div>

      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}>
        </video>
    </div>
  );
}

export default App;
