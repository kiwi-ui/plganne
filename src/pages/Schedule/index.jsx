import CountDown from '../../components/CountDown';
import style from './index.module.css';

const Schedule = () => {
  return (
    <div className={`${style.date} position-relative py-5 text-center px-3`}>
        <div className="container mt-5 mb-3 text-decoration-underline" style={{textUnderlineOffset: '0.3rem', color: 'white' }}>
            <p className="garlicha fw-bold text-warning2" style={{fontSize: "2.6rem"}}>Save The Date</p>
        </div>
        <CountDown />
    </div>
  )
}

export default Schedule

