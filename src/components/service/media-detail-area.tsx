"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const audioSamples = [
  { label: "Radio Jingle Sample 1", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM.mpeg" },
  { label: "Radio Jingle Sample 2", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(1).mpeg" },
  { label: "Radio Jingle Sample 3", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(2).mpeg" },
  { label: "Radio Jingle Sample 4", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(3).mpeg" },
  { label: "Radio Jingle Sample 5", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(4).mpeg" },
];

const features = [
  "Radio Commercials, Jingles & Hypes",
  "Television Commercials (Announsorial, Documentary)",
  "Media Strategic Planning",
  "Buying of Airtime on Radio, TV, Films & Cinemas",
  "Compliance Monitoring",
  "Press Adverts & Editorials",
];

function WaveformPlayer({ audio, index }: { audio: { label: string; src: string }; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const barsCount = 40;

  // Generate random bar heights for the waveform look
  const [bars] = useState(() =>
    Array.from({ length: barsCount }, () => 20 + Math.random() * 80)
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => { setIsPlaying(false); setProgress(0); setCurrentTime(0); };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleBarClick(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    audio.currentTime = percent * audio.duration;
  }

  function formatTime(t: number) {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  const accentColors = ["#6C63FF", "#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA"];
  const color = accentColors[index % accentColors.length];

  return (
    <div style={{
      background: "#fff",
      borderRadius: "16px",
      padding: "28px 32px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      marginBottom: "20px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}>
      <audio ref={audioRef} src={audio.src} preload="metadata" />

      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
        <button
          onClick={togglePlay}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border: "none",
            background: color,
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.15s ease",
          }}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="3" y="2" width="4" height="14" rx="1" />
              <rect x="11" y="2" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <polygon points="4,2 16,9 4,16" />
            </svg>
          )}
        </button>

        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "16px", fontWeight: 600, margin: 0, marginBottom: "4px", color: "#1a1a2e" }}>
            {audio.label}
          </p>
          <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>
      </div>

      {/* Waveform visualization */}
      <div
        onClick={handleBarClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          height: "60px",
          cursor: "pointer",
          padding: "0 4px",
        }}
      >
        {bars.map((height, i) => {
          const barProgress = (i / barsCount) * 100;
          const isActive = barProgress < progress;
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${height}%`,
                borderRadius: "2px",
                background: isActive ? color : "#e0e0e0",
                opacity: isActive ? 1 : 0.5,
                transition: "background 0.1s ease, opacity 0.1s ease",
                minWidth: "2px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function MediaDetailArea() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <span className="tp_fade_bottom" style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px", display: "block", color: "#888" }}>
                Radio & Television
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                Media Services
              </h4>
              <p className="tp_fade_bottom" style={{ fontSize: "18px", lineHeight: "1.8", maxWidth: "700px", marginTop: "20px" }}>
                We produce high-impact radio jingles and television commercials that capture attention and drive action. Our media team handles everything from concept development to strategic media placement across Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-80">
          <div className="col-xl-5 col-lg-5">
            <div className="tp_fade_bottom">
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>What We Offer</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {features.map((feature, i) => (
                  <li key={i} style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    padding: "12px 0",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}>
                    <span style={{ color: "#000", fontWeight: 600 }}>0{i + 1}.</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "40px" }}>
                <Link href="/contact" className="tp-btn-border" style={{ display: "inline-block" }}>
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">Get a Quote</span>
                    <span className="text-2">Get a Quote</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="tp_fade_bottom">
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>
                Listen to Our Work
              </h4>
              {audioSamples.map((audio, i) => (
                <WaveformPlayer key={i} audio={audio} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
