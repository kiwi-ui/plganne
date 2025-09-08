import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import entrance from '../../assets/entrance3.mp4';

const Opening = () => {
  return (
    <div className='d-flex align-items-center vh-100 position-relative overflow-hidden' style={{ backgroundColor: '#f8f9fa' }}>
      <DotLottieReact
        src="https://lottie.host/d44e2b6d-383a-4743-9a71-da5b1fce1b47/I7XQgFVPtn.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 5, 
          pointerEvents: "none" 
        }}
      />

      <div className="container">
        <video 
          src={entrance}
          autoPlay 
          muted 
          playsInline 
          style={{ objectFit: 'cover'}}
          className='position-absolute start-0 w-100 bottom-0 h-100'
        ></video>

        <div className='position-relative text-center' style={{ zIndex: 10}}>
          <p className="andada fw-light" data-aos="fade-down" data-aos-duration="2800">THE WEDDING OF</p>
          <div className="garlicha text-center py-3">
              <p className="text-warning2 fw-semibold mb-0 me-5" data-aos="fade-right" data-aos-duration="2950" style={{fontSize: '3.3rem'}}>Sisin &</p>
              <p className="text-warning2 fw-semibold ms-5" data-aos="fade-left" data-aos-duration="2950" style={{fontSize: '3.3rem', marginTop:'-1rem'}}>Ikhtiar</p>
          </div>

          <p className="andada pb-1 fw-semibold" data-aos="fade-up" data-aos-duration="3000">19.11.2025</p>
          <div className="d-flex justify-content-center align-items-center mt-3" data-aos="fade-down" data-aos-duration="2200">
            <button type='button' className="btn rounded-pill px-3 py-1 bg-primary2 shadow text-white fw-semibold">Save The Date</button>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Opening