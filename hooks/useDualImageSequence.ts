import { useImageSequence } from './useImageSequence';

export function useDualImageSequence({ seq1Path, frameCountPerSeq }: { seq1Path: string; seq2Path?: string; frameCountPerSeq: number }) {
  const { images, loadedCount, isLoaded, progress, frameCount } = useImageSequence({
    folderPath: seq1Path || '/pr1_seq',
    frameCount: frameCountPerSeq || 240,
  });

  return {
    seq1Images: images,
    seq2Images: images,
    loadedCount,
    isLoaded,
    progress,
    totalFrames: frameCount,
  };
}
