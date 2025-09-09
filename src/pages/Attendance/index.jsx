import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { GiConfirmed } from 'react-icons/gi';
import { webapp } from '../../utlis/googlesheetDetails';

const Attendance = ({name}) => {
const [isLoading, setIsLoading] = useState(false);
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
  }, [])
  const kehadiranListener = (e) => {
    const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
  }
  const validateForm = () => {
        const emptyInputs = Object.keys(formData).filter(key => formData[key] === '');
        return emptyInputs.length === 0
    };
  const handleSubmit = async (event) =>  {
        event.preventDefault();
        
        setIsLoading(true)
        const url = webapp; 
        const form = document.getElementById('form');
        const CompleteformData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            CompleteformData.append(key, value);
        })

        if (!validateForm()) {
            alert('Masih ada yang belum terisi')
            setIsLoading(false)
            return;
        }

        fetch(url, {
          method: 'POST',
          body: CompleteformData
        })
        .then(() => {
          toast.success('Kehadiran berhasil dikirim!');
          form.reset();
        })
        .catch(() =>  {
          toast.error('Kehadiran gagal dikirim!')
          setIsLoading(false);
        })
        .finally(() =>  {
          setIsLoading(false);
           setFormData(prev => ({
            ...prev,
            kehadiran: ''
          }));
        });
    } 

  return (
    <div className="text-center py-5 bg-body-tertiary">
      <div className='container'>   
        <div>
          <p className="fw-bold fs-2 mb-0 text-warning pb-2">Konfirmasi Kehadiran</p>
        </div>

        <div>
          <form name='wishApp' id='form' onSubmit={handleSubmit} method='post'>
            <div className="mb-3 border-top border-black">
              <p className="fw-semibold pt-2 fs-5">Apakah Anda Akan Hadir?</p>
              
              <div className="row mx-auto justify-content-center mt-1">
                <div className="col-6 d-flex justify-content-end">
                  <input
                    type="radio"
                    className="btn-check"
                    name="kehadiran"
                    id="btn-check-outlined"
                    autoComplete="off"
                    value="ya"
                    checked={formData.kehadiran === 'ya'}
                    onChange={kehadiranListener}
                  />
                  <label className="btn btn-outline-warning w-75 rounded-pill" htmlFor="btn-check-outlined">Ya</label>
                </div>

                <div className="col-6 d-flex justify-content-start" style={{zIndex: 100}}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="kehadiran"
                    id="btn-check-outlined2"
                    autoComplete="off"
                    value="tidak"
                    checked={formData.kehadiran === 'tidak'}
                    onChange={kehadiranListener}
                  />
                  <label className="btn btn-outline-warning w-75 rounded-pill" htmlFor="btn-check-outlined2">Tidak</label>
                </div>
              </div>
            </div>

            <button className="btn bg-primary2 mx-auto rounded-2 border-0  shadow-lg  d-flex flex-row align-items-center justify-content-around gap-2       " type="submit">
              {
                isLoading ?
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                <div className="d-flex flex-row align-items-center gap-2">
                  <GiConfirmed />
                  <p className="m-0">Konfirmasi</p>
                </div>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Attendance
