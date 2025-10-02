'use client';

import * as React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export const VideoPlayer = ({ src, className }: VideoPlayerProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(false);
  const [showControls, setShowControls] = React.useState(true);
  const controlsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress((video.currentTime / video.duration) * 100);
  };
  
  const handleDurationChange = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTime = (value[0] / 100) * video.duration;
    video.currentTime = seekTime;
    setProgress(value[0]);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  const handlePointerMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-lg group bg-black', className)}
      onClick={togglePlay}
      onPointerMove={handlePointerMove}
    >
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleProgress}
        onDurationChange={handleDurationChange}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-contain"
        playsInline
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div 
        className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-opacity",
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
        )}>
         <div className="flex items-center gap-3">
            <span className="text-white text-xs font-mono">{formatTime(videoRef.current?.currentTime ?? 0)}</span>
            <Slider
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={handleSeek}
                className="w-full cursor-pointer"
            />
            <span className="text-white text-xs font-mono">{formatTime(duration)}</span>
            <button onClick={toggleMute} className="text-white">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
         </div>
      </div>
    </div>
  );
};
