import style from './index.module.css';

const Surah = () => {
  return (
    <div className={`py-5 text-center ${style.surah}`}>
        <div className="container">
            <p className="vidaloka text-warning fs-3">WITH LOVE</p>
            <div className="andada px-3">
                <p className="">“Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).”</p>
                <p className="fw-bold">Q.S Adz-Dzariyat : 49</p>
            </div>
        </div>
    </div>
  )
}

export default Surah