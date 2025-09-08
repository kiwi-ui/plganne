import style from './index.module.css';

const Surah = () => {
  return (
    <div className={`py-5 text-center ${style.surah}`}>
        <div className="container">
            <p className="vidaloka text-warning2 fs-3 animate__animated animate__slideInDown animate__slow">WITH LOVE</p>
            <div className="andada px-3">
                <p className="animate__animated animate__slideInDown animate__slower animate__delay-2s">“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”</p>
                <p className="fw-bold text-warning2 animate__animated animate__slideInDown animate__slow animate__delay-2s">Q.S Adz-Dzariyat : 49</p>
            </div>
        </div>
    </div>
  )
}

export default Surah
