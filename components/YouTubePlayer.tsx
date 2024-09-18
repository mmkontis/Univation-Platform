'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Video {
  youtubeId: string;
  title: string;
  year: number;
}

interface YouTubePlayerProps {
  videos: Video[];
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videos }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initPlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    const handleChangeVideo = (event: CustomEvent) => {
      const newIndex = event.detail.index;
      if (newIndex !== currentVideoIndex && newIndex < videos.length) {
        setCurrentVideoIndex(newIndex);
        playerRef.current?.loadVideoById(videos[newIndex].youtubeId);
      }
    };

    window.addEventListener('change-video' as any, handleChangeVideo);

    return () => {
      window.removeEventListener('change-video' as any, handleChangeVideo);
    };
  }, [currentVideoIndex, videos]);

  const initPlayer = () => {
    playerRef.current = new window.YT.Player(containerRef.current.querySelector('iframe'), {
      events: {
        'onStateChange': onPlayerStateChange,
        'onReady': onPlayerReady,
      }
    });
  };

  const onPlayerReady = () => {
    updateQualityOptions();
    ensureUnmuted();
  };

  const onPlayerStateChange = (event: any) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  const togglePlay = () => {
    if (playerRef.current?.getPlayerState() === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const updateQualityOptions = () => {
    // Implementation for quality options
  };

  const ensureUnmuted = () => {
    if (playerRef.current?.isMuted()) {
      playerRef.current.unMute();
    }
  };

  const initialVideo = videos[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${initialVideo.youtubeId}/0.jpg`;

  return (
    <div ref={containerRef} className="youtube-player-container">
      <div className="youtube-player">
        <iframe
          src={`https://www.youtube.com/embed/${initialVideo.youtubeId}?enablejsapi=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="overlay" style={{ backgroundImage: `url(${thumbnailUrl})` }}></div>
      <button className="play-button" aria-label="Play video" onClick={togglePlay}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>
      </button>
      {/* Add custom controls here */}
    </div>
  );
};

export default YouTubePlayer;