import { AiFillInstagram } from "react-icons/ai"
import { FaItunesNote } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import style from './index.module.css'

const Closing = ({songIndex}) => {
  return (
    <div className={`${style.closing}`}>
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '100dvh' }}>
                <div className="animate__animated animate__fadeInDown">
                    <p className="mb-0">Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</p>
                </div>

                <div>
                <div className={`fw-semibold`}>
                    <p className="animate__animated animate__flipInX animate__slower mb-0">Kami yang berbahagia</p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center gap-4 animate__animated animate__fadeInDown">
                    <p className="greatVibes mb-0 text-warning" style={{ fontSize: '2rem' }}>Sherin</p>
                    <p className="greatVibes mb-0" style={{ fontSize: '1.6rem' }}>&</p>
                    <p className="greatVibes mb-0 text-warning" style={{ fontSize: '2rem' }}>Ariz</p>
                </div>
                <div className="row py-2 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
                    <div className='col-6 animate__animated animate__rotateInDownRight d-flex flex-column border border-warning border-top-0 border-bottom-0 border-start-0'>
                        <div>
                        <p className="mb-1 text-decoration-underline fw-semibold text-warning">Keluarga</p>
                        </div>
                        <div>
                        <p className="mb-0">Bapak Syariful Iman</p>
                        <p className='my-1'>&</p>
                        <p className="mb-0">Ibu Siti Subaidah, S.Pd.SD</p>
                        </div>
                    </div>
                    
                    <div className='col-6 animate__animated animate__rotateInDownLeft d-flex flex-column'>
                        <div>
                        <p className="mb-1 text-decoration-underline fw-semibold text-warning">Keluarga</p>
                        </div>
                        <div>
                        <p className="mb-0">Alm. Bapak Hafandi</p>
                        <p className='my-1'>&</p>
                        <p className="mb-0">Ibu Kuttilah</p>
                        </div>
                    </div>
                </div>

                <div className="border-top w-50 mx-auto border-warning animate__animated animate__fadeInUp animate__delay-1s mt-4">
                    <p className={`mt-3 mb-3`}>Made With ♥ Divition</p>
                    
                    <div className="d-flex flex-row gap-2 justify-content-center">
                    <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://www.instagram.com/yanggaraa/">
                        <AiFillInstagram className="text-warning fs-3"/>
                    </a>
                    <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://wa.link/0gd2cu">
                        <IoLogoWhatsapp className="text-warning fs-3"/>
                    </a>
                    {songIndex ==  0 &&     <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=tX73H2FRcK8">
                        <FaItunesNote className="text-warning fs-3"/>
                        </a>
                    }
                    {songIndex ==  1 &&
                        <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=Cj7E2YB3pe0">
                        <FaItunesNote className="text-warning fs-3"/>
                        </a>
                    }
                    {songIndex ==  2 &&
                        <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=INnehEK0Yec">
                        <FaItunesNote className="text-warning fs-3"/>
                        </a>
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Closing
