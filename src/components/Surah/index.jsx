import style from './index.module.css';

const Surah = () => {
  return (
    <div className={`py-5 text-center ${style.surah}`}>
        <div className="container">
            <p className="vidaloka text-warning2 fs-3" data-aos="fade-up-right" data-aos-duration="2700">WITH LOVE</p>
            <div className="andada px-3">
                <p data-aos="fade-down-left" data-aos-duration="2800">“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”</p>
                <p className="fw-bold text-warning2" data-aos="fade-up" data-aos-duration="2000">Q.S Adz-Dzariyat : 49</p>
            </div>
        </div>
    </div>
  )
}

export default Surah
