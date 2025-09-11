import { CiLock, CiUnlock } from 'react-icons/ci';
import style from './index.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cover = ({name, isPlaying, setOpenMainPage, setIsPlaying, setScrollBehavior}) => {
  const handleOpenMainPage = (e) => {
    e.preventDefault();
    setIsPlaying(true);
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
          zIndex: 10,
          pointerEvents: "none",
          objectFit: 'contain'
        }}
      />
        <div className={`${style.cover} d-flex flex-column justify-content-center align-items-center h-100`}>
          <div style={{ zIndex: 2 }} >
            <p className="andada mb-0" data-aos="zoom-in-down" data-aos-duration="2000">The Wedding of</p>
            <p className="garlicha fw-bold text-warning2 mb-4 mt-4" style={{  fontSize: '3.2rem', letterSpacing: '0.2rem' }} data-aos="fade-up-right" data-aos-duration="3000">
              Sisin
            </p>
            <p className="garlicha fw-semibold text-warning2 mb-4 " style={{ fontSize: '2rem', letterSpacing: '0.2rem' }} data-aos="flip-left" data-aos-duration="2800">
              &
            </p>
            <p className="garlicha fw-bold text-warning2 mb-4" style={{  fontSize: '3.2rem', letterSpacing: '0.2rem' }} data-aos="fade-up-left" data-aos-duration="3000">
              Ikhtiar
            </p>
          </div>

          <div className={`px-5 pb-3 rounded-3 andada`} style={{ fontSize: '0.72rem', zIndex: 2 }}>
            <div className="" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="1400">
              <p className="mb-0">Kepada yang terhormat</p>
              <p className="mb-0">Bapak/Ibu/Saudara/i</p>
              <p className="my-1 text-warning2 fs-5 pt-2">{name}</p>
            </div>
          </div>
          
          <button className="btn shadow-lg bg-primary2 rounded-pill d-flex flex-row align-items-center gap-2 text-black cormorantG py-1 px-3 text-white fw-semibold" type="button" onClick={handleOpenMainPage} style={{ zIndex: 2 }} data-aos="fade-up" data-aos-duration="1800">
            {isPlaying ? <CiUnlock className=''/> : <CiLock />} <p className="mb-0">Buka Undangan</p>
          </button>
        </div>
      </section>
  )
}

export default Cover
