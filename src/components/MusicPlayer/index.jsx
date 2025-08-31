import { useEffect, useRef, useState } from 'react';
import { BsDiscFill } from 'react-icons/bs';

const MusicPlayer = ({audioRef, isPlaying, setIsPlaying}) => {
    const rotateRef = useRef(0);
    const [isRotating, setIsRotating] = useState(0);
    const toggleSong = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
        audio.play();
        rotateRef.current = setInterval(() => {
            setIsRotating(prevIsRotating => prevIsRotating + 10);
        }, 100) 
    } else {
        audio.pause();
        if (rotateRef.current) {
            clearInterval(rotateRef.current);
            rotateRef.current;
        }
    }
    return () => {
        if (rotateRef.current) {
            clearInterval(rotateRef.current);
        }
    }
}, [isPlaying]);

return (
    <div className={ `text-center text-white me-3 mt-3 music position-absolute top-0 end-0` } onClick={ toggleSong } style={{zIndex: 100}}>
        <button className={ `d-flex align-items-center justify-items-center my-3 mx-1 position-relative bg-transparent rounded-circle border-0` }>
            <BsDiscFill className="bg-transparent rounded-circle fs-2 text-warning" style={{ transform: isPlaying ? `rotate(${isRotating}deg)` : `rotate(${isRotating})` }}/>
        </button>
    </div>
    )
}

export default MusicPlayer
