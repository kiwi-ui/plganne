import { CiLock, CiUnlock } from 'react-icons/ci';
import style from './index.module.css'

const Cover = ({name, isPlaying, setOpenMainPage, setIsPlaying, audioRef, setScrollBehavior}) => {
  const handleOpenMainPage = (e) => {
    e.preventDefault();
    setIsPlaying(true);
    audioRef.current.play();
    setTimeout(() => {
      setOpenMainPage(true);
      setScrollBehavior(true);
      document.documentElement.requestFullscreen()
    }, 1500)
  };

  return (
      <section className={`position-relative text-center`} style={{ height: '100dvh' }}>      
        <div className={`${style.cover} d-flex flex-column justify-content-center align-items-center h-100`}>
          <div style={{ zIndex: 2 }}>
            <p className="andada animate__animated animate__zoomInLeft animate__slower mb-0">The Wedding of</p>
            <p className="garlicha fw-semibold text-warning animate__animated animate__zoomInRight animate__slower mb-4 mt-4" style={{  fontSize: '2.6rem', letterSpacing: '0.2rem' }}>
              Anonim
            </p>
            <p className="garlicha fw-semibold text-warning animate__animated animate__zoomInRight animate__slower mb-4 " style={{ fontSize: '2rem', letterSpacing: '0.2rem' }}>
              &
            </p>
            <p className="garlicha fw-semibold text-warning animate__animated animate__zoomInRight animate__slower mb-4" style={{  fontSize: '2.6rem', letterSpacing: '0.2rem' }}>
              Anonim
            </p>
          </div>

          <div className={`px-5 pb-3 rounded-3 andada`} style={{ fontSize: '0.72rem', zIndex: 2 }}>
            <div className="">
              <p className="mb-0 animate__animated animate__zoomIn animate__delay-2s animate__slower">Kepada yang terhormat</p>
              <p className="mb-0 animate__animated animate__zoomIn animate__delay-2s animate__slower">Bapak/Ibu/Saudara/i</p>
              <p className="my-1 text-warning fw-bold animate__animated animate__zoomIn animate__delay-2s animate__slower fs-5 pt-2">{name}</p>
            </div>
          </div>
          
          <button className="btn shadow bg-warning rounded-pill d-flex flex-row align-items-center gap-2 text-black animate__animated animate__zoomIn animate__delay-1s cormorantG py-2 px-3 text-white" type="button" onClick={handleOpenMainPage} style={{ zIndex: 2 }}>
            {isPlaying ? <CiUnlock className='animate__animated animate__zoomIn animate__fast'/>:<CiLock />} <p className="mb-0">Buka Undangan</p>
          </button>
        </div>
      </section>
  )
}

export default Cover
