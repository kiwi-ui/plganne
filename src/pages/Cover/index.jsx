import { CiLock, CiUnlock } from 'react-icons/ci';
import style from './index.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cover = ({name, isPlaying, setOpenMainPage, setIsPlaying, audioRef, setScrollBehavior}) => {
  const handleOpenMainPage = (e) => {
    e.preventDefault();
    setIsPlaying(true);
    // audioRef.current.play();
    setTimeout(() => {
      setOpenMainPage(true);
      setScrollBehavior(true);
      document.documentElement.requestFullscreen()
    }, 1500)
  };

  return (
      <section className={`position-relative text-center`} style={{ height: '100dvh' }}>      
        <DotLottieReact
        src="https://lottie.host/d44e2b6d-383a-4743-9a71-da5b1fce1b47/I7XQgFVPtn.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 5, // di atas video
          pointerEvents: "none" // biar ga ganggu klik
        }}
      />
        <div className={`${style.cover} d-flex flex-column justify-content-center align-items-center h-100`}>
          <div style={{ zIndex: 2 }}>
            <p className="andada animate__animated animate__zoomIn animate__slower mb-0">The Wedding of</p>
            <p className="garlicha fw-semibold text-warning2 animate__animated animate__slideInRight animate__slower mb-4 mt-4" style={{  fontSize: '2.6rem', letterSpacing: '0.2rem' }}>
              Anonim
            </p>
            <p className="garlicha fw-semibold text-warning2 animate__animated animate__zoomIn animate__slower mb-4 " style={{ fontSize: '2rem', letterSpacing: '0.2rem' }}>
              &
            </p>
            <p className="garlicha fw-semibold text-warning2 animate__animated animate__slideInLeft animate__slower mb-4" style={{  fontSize: '2.6rem', letterSpacing: '0.2rem' }}>
              Anonim
            </p>
          </div>

          <div className={`px-5 pb-3 rounded-3 andada`} style={{ fontSize: '0.72rem', zIndex: 2 }}>
            <div className="">
              <p className="mb-0 animate__animated animate__zoomIn animate__delay-2s animate__slower">Kepada yang terhormat</p>
              <p className="mb-0 animate__animated animate__zoomIn animate__delay-2s animate__slower">Bapak/Ibu/Saudara/i</p>
              <p className="my-1 text-warning2 fw-bold animate__animated animate__zoomIn animate__delay-2s animate__slower fs-5 pt-2">{name}</p>
            </div>
          </div>
          
          <button className="btn shadow bg-primary2 rounded-pill d-flex flex-row align-items-center gap-2 text-black animate__animated animate__zoomIn animate__delay-1s cormorantG py-1 px-3 text-white fw-semibold" type="button" onClick={handleOpenMainPage} style={{ zIndex: 2 }}>
            {isPlaying ? <CiUnlock className='animate__animated animate__zoomIn '/> : <CiLock />} <p className="mb-0">Buka Undangan</p>
          </button>
        </div>
      </section>
  )
}

export default Cover
