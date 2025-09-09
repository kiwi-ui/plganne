import { useEffect, useState } from 'react'
import './App.css'
import { useParams } from 'react-router-dom';
import Cover from './pages/Cover';
import Opening from './pages/Opening';
import Surah from './components/Surah';
import Couple from './pages/Couple';
import Schedule from './pages/Schedule';
import Events from './pages/Events';
import Wish from './pages/Wish';
import { Toaster } from 'react-hot-toast';
import Closing from './components/Closing';
import  { useAudioRefService ,randomIndex } from './service/audioRefService';
import MusicPlayer from './components/MusicPlayer';
import Attendance from './pages/Attendance';
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState(false);
  const [openMainPage, setOpenMainPage] = useState(false);
  const audioRef = useAudioRefService();
  const songIndex = randomIndex;
  const { name } = useParams();
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const capitalizedName = decodedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    useEffect(() => {
    Aos.init({
      once: false,     // kalau true: animasi hanya sekali
      mirror: false,   // kalau true: animasi juga muncul saat scroll ke atas
    });

    Aos.refresh();
  }, []);
  
  return (
     <>
       {
          // !openMainPage ?
          // <>
          //   {/* <BorderFlower /> */}
          //   <Cover name={capitalizedName} isPlaying={isPlaying} setOpenMainPage={setOpenMainPage} setIsPlaying={setIsPlaying} setScrollBehavior={setScrollBehavior} /> 
          // </>
          
          // :
          
          <section className='position-relative' style={{ height: '100dvh'}}>
            <Opening />
            <Surah />
            <Couple />
            <Schedule />
            <Events />
            <Wish />
            <Attendance name={capitalizedName}/>
            <Closing songIndex={activeIndex} />
            <MusicPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

          </section>
        }
       <Toaster position="top-center" />
    </>
  )
}

export default App
