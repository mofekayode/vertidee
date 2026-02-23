'use client';
import React from 'react';

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap tp-hero-video-mobile">
      <div className="tp-hero-bottom-img">
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/assets/video/hero-video.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default VideOne;
