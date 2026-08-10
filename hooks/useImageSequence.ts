import { useState, useEffect, useRef } from 'react';

interface UseImageSequenceOptions {
  folderPath: string; // e.g. '/pr1_seq'
  frameCount: number; // 240
}

export function useImageSequence({ folderPath, frameCount }: UseImageSequenceOptions) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let isCancelled = false;
    const imgArray: HTMLImageElement[] = new Array(frameCount);
    imagesRef.current = imgArray;
    let count = 0;

    const base = folderPath || '/pr1_seq';

    for (let i = 0; i < frameCount; i++) {
      const pad = String(i).padStart(3, '0');
      const img = new Image();

      img.onload = () => {
        if (isCancelled) return;
        count++;
        setLoadedCount(count);
        if (count === 1 || count % 5 === 0 || count === frameCount) {
          setImages([...imagesRef.current]);
        }
        if (count === frameCount) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        // Secondary fallback url attempt
        if (!img.src.includes('delay')) {
          img.src = `${base}/frame_${pad}_delay-0.041s.png`;
        }
      };

      img.src = `${base}/frame_${pad}.png`;
      imgArray[i] = img;
    }

    setImages(imgArray);

    return () => {
      isCancelled = true;
    };
  }, [folderPath, frameCount]);

  const progress = frameCount > 0 ? loadedCount / frameCount : 0;

  return { images, loadedCount, isLoaded, progress, frameCount };
}
