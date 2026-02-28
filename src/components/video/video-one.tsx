'use client';
import React from 'react';

const VideOne = () => {
  return (
    <div className="tp-hero-bottom-img-wrap tp-hero-video-mobile">
      <div className="tp-hero-bottom-img" style={{ position: "relative" }}>
        <video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src="/assets/video/hero-video.webm" type="video/webm" />
        </video>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
        }}>
          <h2 style={{
            fontFamily: "var(--tp-ff-heading)",
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 700,
            marginBottom: "10px",
            lineHeight: 1.1,
            color: "#FFFFFF",
            textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.4)",
            letterSpacing: "0.04em",
          }}>Vert Idee</h2>
          <p style={{
            fontFamily: "var(--tp-ff-body)",
            fontSize: "clamp(14px, 2vw, 24px)",
            fontWeight: 400,
            fontStyle: "italic",
            margin: 0,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#61A706",
            textShadow: "0 1px 10px rgba(0,0,0,0.8)",
          }}>Fresh Ideas</p>
        </div>
      </div>
    </div>
  );
};

export default VideOne;
