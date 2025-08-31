import React from 'react'
import { CgInstagram } from 'react-icons/cg'
import style from './index.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const Couple = () => {
  return (
    <div className={`container py-5 text-center px-3 ${style.couple}`}>
      <p className="andada">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :</p>
      <div className="text-start py-4 ps-md-5 ms-md-5">
      
        <p className="analogue mb-1 fs-3 text-warning fw-bold">Anonim Anonim A</p>
        <div className="">
          <p className="andada mb-0">Putri Kedua dari Bapak M. Dawam</p>
          <p className="andada">& (Almh) Ibu Dewi Sudarwati</p>
        </div>
        <div className='d-inline d-flex justify-content-start'>
          <div className="d-flex bg-primary p-2 border border-1 border-white rounded-circle justify-content-center align-items-center">
            <CgInstagram className="fs-5 text-white"/>
          </div>
        </div>
      </div>

      <p className="py-4 fs-3 adine">&</p>

      <div className="text-end py-4 pe-md-5 me-md-5">
        <p className="analogue mb-1 fs-3 text-warning fw-bold">Anonim Anonim A</p>
        <div className="">
          <p className="andada mb-0">Putri Kedua dari Bapak M. Dawam</p>
          <p className="andada">& (Almh) Ibu Dewi Sudarwati</p>
        </div>
        <div className='d-inline d-flex justify-content-end'>
          <div className="d-flex bg-primary p-2 border border-1 border-white rounded-circle justify-content-center align-items-center">
            <CgInstagram className="fs-5 text-white"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Couple
 