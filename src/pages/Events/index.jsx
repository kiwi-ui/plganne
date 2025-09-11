import style from './index.module.css'
const Events = () => {
  return (
    <div className="bg-light">
        <div className="container text-center py-5">
            <div className="px-2">
                <div className={`border border-4 border-white rounded-3 position-relative`}>
                    <div className={`${style.events}`}>

                        <div className="py-5 position-relative" style={{zIndex: 2}}>
                            <div className="border-bottom border-3 border-light w-75 mx-auto mb-4">
                                <p className="my-3 garlicha text-warning2 fw-semibold" style={{fontSize: '3rem'}} data-aos="fade-up" data-aos-duration="2900">Akad Nikah</p>
                            </div>

                            <div className="mb-4 mt-4 mx-auto" style={{width: '85%'}}>
                                <p className="fw-semibold mb-0" data-aos="fade-up-right" data-aos-duration="2000">Minggu, 19 Oktober 2025</p>
                                <p className='' data-aos="fade-down-right" data-aos-duration="2000">Pukul : 07.30 WIB – Selesai</p>
                                <div className='' data-aos="fade-up" data-aos-duration="2000">
                                    <p className="mb-0">Masjid Agung Asy-Syuhada (Masjid Jami’)</p>
                                    <p className="fw-semibold">Jl. Mesigit No.23, Kabupaten Pamekasan</p>
                                </div>
                                <div className="mb-4">
                                    <a href='https://maps.app.goo.gl/9QRSbXffJ1YwBXRx8' target='__blank'  type="button" className="btn bg-primary2 border border-1  border-white px-3 py-1 text-white rounded-pill fw-semibold shadow" data-aos="fade-down" data-aos-duration="1800">Lokasi Acara</a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="py-5 position-relative" style={{zIndex: 2}}>
                            <div className="border-bottom border-3 border-light w-75 mx-auto mb-4">
                                <p className="my-3 garlicha text-warning2 fw-semibold" style={{fontSize: '3rem'}} data-aos="fade-up" data-aos-duration="2900">Resepsi</p>
                            </div>

                            <div className="mb-4 mt-4 mx-auto" style={{width: '85%'}}>
                                <p className="fw-semibold mb-0" data-aos="fade-up-right" data-aos-duration="2000">Minggu, 19 Oktober 2025</p>
                                <p className="" data-aos="fade-down-right" data-aos-duration="2000">Pukul : 07.30 WIB – Selesai</p>
                                <div className="" data-aos="fade-up" data-aos-duration="2000">
                                    <p className="mb-0">Masjid Agung Asy-Syuhada (Masjid Jami’)</p>
                                    <p className="fw-semibold">Jl. Mesigit No.23, Kabupaten Pamekasan</p>
                                </div>
                                <div className="mb-4">
                                    <a href='https://maps.app.goo.gl/9QRSbXffJ1YwBXRx8' target='__blank'  type="button" className="btn bg-primary2 border border-1  border-white px-3 py-1 text-white rounded-pill fw-semibold shadow" data-aos="fade-down" data-aos-duration="1800">Lokasi Acara</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events
