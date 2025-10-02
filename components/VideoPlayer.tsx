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
  const [isMuted, setIsMuted] = React.useState(true);
  const [showControls, setShowControls] = React.useState(true);
  const controlsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const hideControls = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2000);
  };
  
  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.play().catch(() => {
            setIsPlaying(false);
        });
    }

    return () => {
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
    }
  }, []);

  React.useEffect(() => {
    if (isPlaying) {
      hideControls();
    } else {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
    }
  }, [isPlaying]);


  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
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

  const handlePointerMove = () => {
    setShowControls(true);
    hideControls();
  };

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-lg group bg-black', className)}
      onClick={togglePlay}
      onPointerMove={handlePointerMove}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
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
        autoPlay
        muted={isMuted}
      />
      <div 
        className={cn(
            "absolute bottom-0 left-0 right-0 p-2 sm:p-4 transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
        )}>
         <div className="flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm p-2 rounded-lg">
            <button onClick={togglePlay} className="text-white flex-shrink-0">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <span className="text-white text-xs font-mono">{formatTime(videoRef.current?.currentTime ?? 0)}</span>
            <Slider
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={handleSeek}
                className="w-full cursor-pointer"
                onClick={(e) => e.stopPropagation()}
            />
            <span className="text-white text-xs font-mono">{formatTime(duration)}</span>
            <button onClick={toggleMute} className="text-white flex-shrink-0">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
         </div>
      </div>
    </div>
  );
};
