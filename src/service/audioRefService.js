import { useRef } from 'react';
import { musics } from '../utlis/music';

export const randomIndex = Math.floor(Math.random() * musics.length);

export function useAudioRefService() {
  return useRef(new Audio(musics[randomIndex]));
}
