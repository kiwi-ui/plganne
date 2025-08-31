import style from './index.module.css'
const Events = () => {
  return (
    <div className="bg-light">
        <div className="container text-center py-5">
            <p className="andada">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami</p>
            <div className="px-2">
                <div className={`border border-4 border-white rounded-3 position-relative`}>
                    <div className={`${style.events}`}>
                        <div className="py-5 position-relative" style={{zIndex: 2}}>
                            <div className="border-bottom border-3 border-light w-75 mx-auto mb-4">
                                <p className="my-3 garlicha text-warning2 fw-semibold" style={{fontSize: '3rem'}}>Akad Nikah</p>
                            </div>

                            <div className="mb-4 mx-auto andada" style={{width: '85%'}}>
                                <p className="fw-semibold mb-0 ">Minggu, 30 Desember 2025</p>
                                <p>Pukul : 10.00 WIB – Selesai</p>
                                <div>
                                    <p className="mb-0">Alamat : Kediaman Mempelai Wanita</p>
                                    <p className="fw-semibold">Ds Pagu Kec. Wates Kab. Kediri</p>
                                </div>
                                <div className="mb-4">
                                    <button type="button" className="btn bg-primary2 border border-1  border-white px-3 py-1 text-white rounded-pill fw-semibold">Lokasi Acara</button>
                                </div>
                            </div>
                        </div>

                        <div className="py-5 position-relative" style={{zIndex: 2}}>
                            <div className="border-bottom border-3 border-light w-75 mx-auto mb-4">
                                <p className="my-3 garlicha text-warning2 fw-semibold" style={{fontSize: '3rem'}}>Resepsi</p>
                            </div>

                            <div className="mb-4 mt-4 mx-auto" style={{width: '85%'}}>
                                <p className="fw-semibold mb-0 ">Minggu, 30 Desember 2025</p>
                                <p>Pukul : 10.00 WIB – Selesai</p>
                                <div>
                                    <p className="mb-0">Alamat : Kediaman Mempelai Wanita</p>
                                    <p className="fw-semibold">Ds Pagu Kec. Wates Kab. Kediri</p>
                                </div>
                                <div className="mb-4">
                                    <button type="button" className="btn bg-primary2 border border-1  border-white px-3 py-1 text-white rounded-pill fw-semibold">Lokasi Acara</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events
