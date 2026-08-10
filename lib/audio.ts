// Pure silent audio placeholder - Audio removed per request
class SilentAudioEngine {
  playHover() {}
  playClick() {}
  playChime() {}
  toggleMute() { return true; }
  isMuted() { return true; }
}

export const luxuryAudio = new SilentAudioEngine();
