import { CgInstagram } from 'react-icons/cg'
import style from './index.module.css'

const Couple = () => {
  return (
    <div className={`py-5 text-center px-3 ${style.couple}`}>
      <p className="andada" data-aos="fade-down" data-aos-duration="2900">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :</p>
      
      <div className="text-start py-4 ps-md-5 ms-md-5">
        <p className="analogue mb-1 fs-3 text-warning2 fw-bold" data-aos="fade-left" data-aos-duration="2800">Anni Syntya, S.Gz</p>
        <div className="">
          <p className="andada mb-0" data-aos="fade-down-right" data-aos-duration="2500">Putri Bapak H. Husni Tamrin</p>
          <p className="andada" data-aos="fade-down-left" data-aos-duration="2500">& Ibu Hj. Sufiatul Jannah</p>
        </div>
        <div className='d-inline d-flex justify-content-start'>
          <a href='https://www.instagram.com/annisyntya/' target='__blank' className="d-flex bg-primary2 p-2 border border-1 border-white rounded-circle justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="2800">
            <CgInstagram  className="fs-5 text-white shadow-lg"/>
          </a>
        </div>
      </div>

      <p className="py-4 fs-3 adine" data-aos="fade-down" data-aos-duration="1800">&</p>

      <div className="text-end py-4 pe-md-5 me-md-5">
        <p className="analogue mb-1 fs-3 text-warning2 fw-bold" data-aos="fade-left" data-aos-duration="2800">Ikhtiar Rahmatullah, S.IP.</p>
        <div className="">
          <p className="andada mb-0" data-aos="fade-down-right" data-aos-duration="2500">Putra Bapak H. Moh. Kamil Mahfud</p>
          <p className="andada" data-aos="fade-down-left" data-aos-duration="2500"> & Ibu Hj. Imamah</p>
        </div>
        <div className='d-inline d-flex justify-content-end'>
          <a href='https://www.instagram.com/ikhtiar_r/' target='__blank'  className="d-flex bg-primary2 p-2 border border-1 border-white rounded-circle justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="2800">
            <CgInstagram className="fs-5 text-white shadow-lg"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Couple
 