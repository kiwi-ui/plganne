import { useEffect, useState } from 'react';
import style from './index.module.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import { addWish, subscribeWishes } from '../../service/wishService';
import toast from 'react-hot-toast';
import { formatDistance } from 'date-fns';
import { background, textColor } from '../../utlis/profileStyles';
import { webapp } from '../../utlis/googlesheetDetails';

const Wish = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
      timestamp: new Date(),
      name: '',
      kehadiran: ''
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      name: name
    }))

    const unsubscribe = subscribeWishes(setWishes);
    return () => {
      unsubscribe();
    };
  }, [])
  
  const kehadiranListener = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendWish = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name.trim() || !message.trim()) {
      alert("Masih ada yang belum terisi");
      setLoading(false);
      return;
    }

    try {
      const CompleteformData = new FormData();
      CompleteformData.append("timestamp", new Date());
      CompleteformData.append("name", name.trim());
      CompleteformData.append("kehadiran", formData.kehadiran);
      CompleteformData.append("message", message.trim());

      const res = await fetch(webapp, {
        method: "POST",
        body: CompleteformData,
      });

      if (!res.ok) throw new Error("Gagal kirim ke Google Sheet");

      addWish(name.trim(), message.trim());

      setName("");
      setMessage("");
      setFormData({ name: "", kehadiran: "" });
      toast.success("Wish sent successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={` ${style.wish} py-5`}>
      <div className="container text-center">
        <div className="">
          <div className="text-dark" >
            <p className="fw-bold mb-2 text-warning2 text-warning2 garlicha" data-aos="fade-up" data-aos-duration="2500" style={{fontSize: '2.6rem'}}>Wishes</p>
            <p data-aos="fade-down" duration="3000">Sampaikan harapan terbaik anda untuk mempelai</p>

            <form name="wishApp" id='form' className="text-start" onSubmit={sendWish}>
              <div className="mb-3">
                <input
                  className="form-control shadow"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  placeholder="Nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <select
                  className="form-control shadow"
                  name="kehadiran"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  value={formData.kehadiran}
                  onChange={kehadiranListener}
                >
                  <option value="" disabled>Bisa hadir?</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control shadow"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  placeholder="Your wish"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ minHeight: 80 }}
                />
              </div>

              <div className="text-end">
                <button className="btn bg-primary2 text-white d-flex flex-row align-items-center my-3 gap-2 ms-auto fw-semibold rounded-pill shadow" disabled={loading} type="submit" data-aos="zoom-in" data-aos-duration="2400">
                  {
                    loading ? 
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                      :
                    <div className='d-flex flex-row align-items-center gap-2'>
                      <RiSendPlaneFill />
                      <p className='mb-0'>Send Wish</p>
                    </div>
                  }
                </button>
              </div>
            </form>

            <div id='wishes' className={`border-top border-2 border-dark-subtle pt-3 mt-4 `}>
              <ul className="w-100 position-relative ps-4" style={{ overflowY: 'auto', maxHeight: '300px' }}>
                {wishes.map((item, index) => {
                  const createdAt = item.created_at?.toDate?.() || new Date();
                  const timeAgo = formatDistance(createdAt, new Date(), { addSuffix: true });
                  const randomIndex = item.randomIndex ?? 0;
                  
                  return (
                    <li key={index} className="list-unstyled row my-4 w-100 justify-content-center gap-2" data-aos="fade-right" data-aos-duration="3000">
                      <div
                        className={`${background[randomIndex]} col-2 d-flex justify-content-center align-items-center rounded-circle`}
                        style={{ height: 50, width: 50 }}
                      >
                        <p className={`${textColor[randomIndex]} mb-0 fs-5`}>
                          {item.name.charAt(0)}
                        </p>
                      </div>

                      <div className="col-8 text-start d-flex flex-column justify-content-center">
                        <div className="d-flex text-start mb-1 flex-column flex-wrap">
                          <p className="mb-0 fw-semibold text-break w-75">{item.name}</p>
                          <p className='mb-0 fw-light' style={{ fontSize: '0.7rem' }}>{item.created_at ? timeAgo : 'just now'}</p>
                        </div>
                        <p className="mb-0 text-break">{item.message}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wish
