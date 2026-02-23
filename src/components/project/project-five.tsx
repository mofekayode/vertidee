"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";

const project_data = [
  // Activation & Product Sampling
  { id: 1, title: "Product Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/1.jpg" },
  { id: 2, title: "Brand Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/2.jpg" },
  { id: 3, title: "Market Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/3.jpg" },
  { id: 4, title: "Consumer Engagement", category: "Activation", img: "/assets/img/portfolio/activation-sampling/4.jpg" },
  { id: 5, title: "Field Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/1_7.jpg" },
  { id: 6, title: "Product Launch", category: "Activation", img: "/assets/img/portfolio/activation-sampling/2_4.jpg" },
  { id: 7, title: "Sampling Campaign", category: "Activation", img: "/assets/img/portfolio/activation-sampling/3_6.jpg" },
  { id: 8, title: "Brand Experience", category: "Activation", img: "/assets/img/portfolio/activation-sampling/4_5.jpg" },
  { id: 9, title: "Road Show", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3382.JPG" },
  { id: 10, title: "Street Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3385.JPG" },
  { id: 11, title: "Community Engagement", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3450.JPG" },
  { id: 12, title: "Product Demo", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3483.JPG" },
  { id: 13, title: "In-Market Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3484.JPG" },
  { id: 14, title: "Consumer Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3502.JPG" },
  { id: 15, title: "Promo Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3503.JPG" },
  { id: 16, title: "Brand Engagement", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3521.JPG" },
  { id: 17, title: "Field Marketing", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3530.JPG" },
  { id: 18, title: "Outdoor Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3544.JPG" },
  { id: 19, title: "Live Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3629.JPG" },
  { id: 20, title: "Market Promo", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3632.JPG" },
  { id: 21, title: "Consumer Promo", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3633.JPG" },
  { id: 22, title: "Brand Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3635.JPG" },
  { id: 23, title: "Event Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/IMG_3637.JPG" },
  { id: 24, title: "Campaign Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_10.34.35.jpeg" },
  { id: 25, title: "Team Deployment", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_11.21.39_(1).jpeg" },
  { id: 26, title: "Brand Promo", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_11.21.40.jpeg" },
  { id: 27, title: "Product Activation", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.21.jpeg" },
  { id: 28, title: "Market Engagement", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.38_(1).jpeg" },
  { id: 29, title: "Activation Event", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_13.14.41.jpeg" },
  { id: 30, title: "Field Sampling", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_14.48.14.jpeg" },
  { id: 31, title: "Promo Campaign", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2025-06-23_at_14.50.49_(1).jpeg" },
  { id: 32, title: "Brand Launch", category: "Activation", img: "/assets/img/portfolio/activation-sampling/WhatsApp_Image_2026-01-27_at_10.29.03_AM.jpeg" },

  // Outdoor
  { id: 33, title: "Billboard Campaign", category: "Outdoor", img: "/assets/img/portfolio/outdoor/1.jpg" },
  { id: 34, title: "Highway Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/2.jpg" },
  { id: 35, title: "Outdoor Signage", category: "Outdoor", img: "/assets/img/portfolio/outdoor/3.jpg" },
  { id: 36, title: "Billboard Design", category: "Outdoor", img: "/assets/img/portfolio/outdoor/4.jpg" },
  { id: 37, title: "Street Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/5.jpg" },
  { id: 38, title: "Brand Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/6.jpg" },
  { id: 39, title: "Signage Production", category: "Outdoor", img: "/assets/img/portfolio/outdoor/7.jpg" },
  { id: 40, title: "Outdoor Campaign", category: "Outdoor", img: "/assets/img/portfolio/outdoor/8.jpg" },
  { id: 41, title: "Transit Ad", category: "Outdoor", img: "/assets/img/portfolio/outdoor/9.jpg" },
  { id: 42, title: "Lamp Post Signage", category: "Outdoor", img: "/assets/img/portfolio/outdoor/10.jpg" },
  { id: 43, title: "Wall Mural", category: "Outdoor", img: "/assets/img/portfolio/outdoor/11.jpg" },
  { id: 44, title: "Building Wrap", category: "Outdoor", img: "/assets/img/portfolio/outdoor/12.jpg" },
  { id: 45, title: "Roadside Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/13.jpg" },
  { id: 46, title: "LED Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/14.jpg" },
  { id: 47, title: "Bus Stop Ad", category: "Outdoor", img: "/assets/img/portfolio/outdoor/15.jpg" },
  { id: 48, title: "Outdoor Branding", category: "Outdoor", img: "/assets/img/portfolio/outdoor/16.jpg" },
  { id: 49, title: "Bridge Banner", category: "Outdoor", img: "/assets/img/portfolio/outdoor/17.jpg" },
  { id: 50, title: "Location Signage", category: "Outdoor", img: "/assets/img/portfolio/outdoor/18.jpg" },
  { id: 51, title: "Branded Billboard", category: "Outdoor", img: "/assets/img/portfolio/outdoor/19.jpg" },
  { id: 52, title: "Outdoor Display", category: "Outdoor", img: "/assets/img/portfolio/outdoor/20.jpg" },

  // Modern Trade
  { id: 53, title: "In-Store Display", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/1.jpg" },
  { id: 54, title: "Retail Branding", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/2.jpg" },
  { id: 55, title: "Shelf Branding", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/3.jpg" },
  { id: 56, title: "POS Display", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/4.jpg" },
  { id: 57, title: "Store Activation", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/5.jpg" },
  { id: 58, title: "Gondola Display", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/6.jpg" },
  { id: 59, title: "Trade Display", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/7.jpg" },
  { id: 60, title: "Retail Activation", category: "Modern Trade", img: "/assets/img/portfolio/modern-trade/8.jpg" },

  // Event Management
  { id: 61, title: "Corporate Conference", category: "Events", img: "/assets/img/portfolio/event-management/1.jpg" },
  { id: 62, title: "Brand Exhibition", category: "Events", img: "/assets/img/portfolio/event-management/2.jpg" },
  { id: 63, title: "Product Launch Event", category: "Events", img: "/assets/img/portfolio/event-management/3.jpg" },
  { id: 64, title: "Corporate Gathering", category: "Events", img: "/assets/img/portfolio/event-management/4.jpg" },
  { id: 65, title: "Brand Event", category: "Events", img: "/assets/img/portfolio/event-management/5.jpg" },
  { id: 66, title: "Corporate Event", category: "Events", img: "/assets/img/portfolio/event-management/6.jpg" },

  // Training
  { id: 67, title: "Team Training", category: "Training", img: "/assets/img/portfolio/training/1.jpg" },
  { id: 68, title: "Workshop Session", category: "Training", img: "/assets/img/portfolio/training/2.jpg" },
  { id: 69, title: "Brand Training", category: "Training", img: "/assets/img/portfolio/training/3.jpg" },
  { id: 70, title: "Staff Development", category: "Training", img: "/assets/img/portfolio/training/4.jpg" },

  // General / Branding Work
  { id: 71, title: "Enchanteur Campaign", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_1.jpg" },
  { id: 72, title: "Enchanteur Display", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_2.jpg" },
  { id: 73, title: "Enchanteur Promo", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_3.jpg" },
  { id: 74, title: "Enchanteur Branding", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_4.jpg" },
  { id: 75, title: "Enchanteur Creative", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_5.jpg" },
  { id: 76, title: "Enchanteur Launch", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_6.jpg" },
  { id: 77, title: "Enchanteur Design", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_7.jpg" },
  { id: 78, title: "Enchanteur Activation", category: "Branding", img: "/assets/img/portfolio/general/Enchanteur_8.jpg" },
  { id: 79, title: "Bio Oil Campaign", category: "Branding", img: "/assets/img/portfolio/general/Bio_Oil_1.jpg" },
  { id: 80, title: "Bio Oil Display", category: "Branding", img: "/assets/img/portfolio/general/Bio_Oil_2.jpg" },
  { id: 81, title: "Bio Oil Promo", category: "Branding", img: "/assets/img/portfolio/general/Bio_Oil_3.jpg" },
  { id: 82, title: "Bio Oil Branding", category: "Branding", img: "/assets/img/portfolio/general/Bio_Oil_4.jpg" },
  { id: 83, title: "NDL Campaign", category: "Branding", img: "/assets/img/portfolio/general/NDL1.jpg" },
  { id: 84, title: "NDL Branding", category: "Branding", img: "/assets/img/portfolio/general/NDL2.jpg" },
  { id: 85, title: "NDL Design", category: "Branding", img: "/assets/img/portfolio/general/NDL3.jpg" },
  { id: 86, title: "NDL Display", category: "Branding", img: "/assets/img/portfolio/general/NDL4.jpg" },
  { id: 87, title: "NDL Creative", category: "Branding", img: "/assets/img/portfolio/general/NDL5.jpg" },
  { id: 88, title: "ORS Campaign", category: "Branding", img: "/assets/img/portfolio/general/ORS_1.jpg" },
  { id: 89, title: "ORS Branding", category: "Branding", img: "/assets/img/portfolio/general/ORS_2.jpg" },
  { id: 90, title: "ORS Display", category: "Branding", img: "/assets/img/portfolio/general/ORS_3.jpg" },
  { id: 91, title: "ORS Promo", category: "Branding", img: "/assets/img/portfolio/general/ORS_4.jpg" },
  { id: 92, title: "STI Campaign", category: "Branding", img: "/assets/img/portfolio/general/STI_1.jpg" },
  { id: 93, title: "STI Branding", category: "Branding", img: "/assets/img/portfolio/general/STI_2.jpg" },
  { id: 94, title: "STI Display", category: "Branding", img: "/assets/img/portfolio/general/STI_3.jpg" },
  { id: 95, title: "STI Creative", category: "Branding", img: "/assets/img/portfolio/general/STI_4.jpg" },
  { id: 96, title: "Satnam Campaign", category: "Branding", img: "/assets/img/portfolio/general/Satnam_1.jpg" },
  { id: 97, title: "The Promise Branding", category: "Branding", img: "/assets/img/portfolio/general/The_Promise_1.jpg" },
  { id: 98, title: "The Promise Display", category: "Branding", img: "/assets/img/portfolio/general/The_Promise_2.jpg" },
  { id: 99, title: "The Promise Creative", category: "Branding", img: "/assets/img/portfolio/general/The_Promise_3.jpg" },
  { id: 100, title: "Topwide Campaign", category: "Branding", img: "/assets/img/portfolio/general/Topwide1.jpg" },
  { id: 101, title: "Topwide Branding", category: "Branding", img: "/assets/img/portfolio/general/Topwide_2.jpg" },
  { id: 102, title: "Topwide Design", category: "Branding", img: "/assets/img/portfolio/general/Topwide_3.jpg" },
  { id: 103, title: "X-Pression Campaign", category: "Branding", img: "/assets/img/portfolio/general/Xpression.jpg" },
];

// Items for homepage (curated selection)
const homepage_items = [1, 33, 71, 61, 79, 53, 88, 35, 83, 24, 92, 100];

const categories = ["All", "Activation", "Outdoor", "Modern Trade", "Events", "Training", "Branding", "Videos", "Radio Jingles"];

function PortfolioLightbox({ images, activeIndex, onClose }: { images: { img: string; title: string }[]; activeIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(activeIndex);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Close */}
      <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", cursor: "pointer", zIndex: 10, padding: 8 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.5)", fontSize: 14, letterSpacing: 2 }}>
        {current + 1} / {images.length}
      </div>

      {/* Title */}
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: 16, fontWeight: 600 }}>
        {images[current].title}
      </div>

      {/* Prev */}
      <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      {/* Image */}
      <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80vw", height: "80vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current].img}
          alt={images[current].title}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 8 }}
        />
      </div>

      {/* Next */}
      <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
    </div>
  );

  return createPortal(content, document.body);
}

// prop type
type IProps = {
  style_2?: boolean;
};
const portfolio_videos = [
  { src: "/assets/video/activation-video-1.mp4", title: "Activation Campaign 1" },
  { src: "/assets/video/activation-video-2.mp4", title: "Activation Campaign 2" },
  { src: "/assets/video/activation-video-3.mp4", title: "Activation Campaign 3" },
];

const portfolio_jingles = [
  { label: "Radio Jingle 1", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM.mpeg" },
  { label: "Radio Jingle 2", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(1).mpeg" },
  { label: "Radio Jingle 3", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(2).mpeg" },
  { label: "Radio Jingle 4", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(3).mpeg" },
  { label: "Radio Jingle 5", src: "/assets/img/portfolio/radio-jingles/WhatsApp_Audio_2026-02-18_at_1.32.32_PM_(4).mpeg" },
];

function PortfolioVideoCard({ src, title }: { src: string; title: string }) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    if (!ref.current) return;
    ref.current.play();
    setStarted(true);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px", background: "#000" }}>
      <video
        ref={ref}
        controls={started}
        playsInline
        preload="metadata"
        onEnded={() => setStarted(false)}
        style={{ width: "100%", height: "280px", display: "block", objectFit: "cover" }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <div
          onClick={handlePlay}
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "2px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
              <path d="M6 3.5v17a1 1 0 0 0 1.5.87l14-8.5a1 1 0 0 0 0-1.74l-14-8.5A1 1 0 0 0 6 3.5z" />
            </svg>
          </div>
        </div>
      )}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        pointerEvents: "none",
      }}>
        <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600, margin: 0 }}>{title}</p>
      </div>
    </div>
  );
}

function JinglePlayer({ audio, index }: { audio: { label: string; src: string }; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const barsCount = 40;
  const [bars] = useState(() => Array.from({ length: barsCount }, () => 20 + Math.random() * 80));

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => { setCurrentTime(el.currentTime); setProgress(el.duration ? (el.currentTime / el.duration) * 100 : 0); };
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => { setIsPlaying(false); setProgress(0); setCurrentTime(0); };
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => { el.removeEventListener("timeupdate", onTime); el.removeEventListener("loadedmetadata", onMeta); el.removeEventListener("ended", onEnd); };
  }, []);

  function togglePlay() {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) el.pause(); else el.play();
    setIsPlaying(!isPlaying);
  }

  function handleBarClick(e: React.MouseEvent<HTMLDivElement>) {
    const el = audioRef.current;
    if (!el || !el.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.currentTime = ((e.clientX - rect.left) / rect.width) * el.duration;
  }

  function fmt(t: number) { if (!t || isNaN(t)) return "0:00"; return `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, "0")}`; }

  const colors = ["#6C63FF", "#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA"];
  const color = colors[index % colors.length];

  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "24px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "16px" }}>
      <audio ref={audioRef} src={audio.src} preload="metadata" />
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
        <button onClick={togglePlay} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "none", background: color, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><rect x="3" y="2" width="4" height="14" rx="1" /><rect x="11" y="2" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><polygon points="4,2 16,9 4,16" /></svg>
          )}
        </button>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "15px", fontWeight: 600, margin: 0, color: "#1a1a2e" }}>{audio.label}</p>
          <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>{fmt(currentTime)} / {fmt(duration)}</p>
        </div>
      </div>
      <div onClick={handleBarClick} style={{ display: "flex", alignItems: "center", gap: "2px", height: "50px", cursor: "pointer" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "2px", background: (i / barsCount) * 100 < progress ? color : "#e0e0e0", opacity: (i / barsCount) * 100 < progress ? 1 : 0.5, transition: "background 0.1s ease", minWidth: "2px" }} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectFive({ style_2 = false }: IProps) {
  const items = style_2 ? project_data : project_data.filter((p) => homepage_items.includes(p.id));
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        {/* Category filters - only on portfolio page */}
        {style_2 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "50px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 16px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  border: activeCategory === cat ? "2px solid #1a1a2e" : "2px solid rgba(150,150,150,0.4)",
                  background: activeCategory === cat ? "#1a1a2e" : "transparent",
                  color: activeCategory === cat ? "#fff" : "inherit",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.5px",
                }}
              >
                {cat} {cat !== "All" && cat !== "Videos" && cat !== "Radio Jingles" && <span style={{ opacity: 0.6, fontSize: "12px" }}>({project_data.filter(p => p.category === cat).length})</span>}
                {cat === "Videos" && <span style={{ opacity: 0.6, fontSize: "12px" }}>({portfolio_videos.length})</span>}
                {cat === "Radio Jingles" && <span style={{ opacity: 0.6, fontSize: "12px" }}>({portfolio_jingles.length})</span>}
              </button>
            ))}
          </div>
        )}

        {style_2 ? (
          <>
            {/* Videos section - show when "Videos" or "All" */}
            {(activeCategory === "Videos" || activeCategory === "All") && (
              <div style={{ marginBottom: activeCategory === "All" ? "60px" : "0" }}>
                {activeCategory === "All" && <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Videos</h3>}
                <div className="row" style={{ rowGap: "24px" }}>
                  {portfolio_videos.map((vid, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-12">
                      <PortfolioVideoCard src={vid.src} title={vid.title} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Radio Jingles section - show when "Radio Jingles" or "All" */}
            {(activeCategory === "Radio Jingles" || activeCategory === "All") && (
              <div style={{ marginBottom: activeCategory === "All" ? "60px" : "0" }}>
                {activeCategory === "All" && <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Radio Jingles</h3>}
                <div className="row">
                  <div className="col-lg-8 col-12">
                    {portfolio_jingles.map((jingle, i) => (
                      <JinglePlayer key={i} audio={jingle} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Image grid - show when not "Videos" or "Radio Jingles" */}
            {activeCategory !== "Videos" && activeCategory !== "Radio Jingles" && (
              <div>
                {activeCategory === "All" && <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Projects</h3>}
                <div className="row" style={{ rowGap: "24px" }}>
                  {filteredItems.map((item, idx) => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div
                        onClick={() => setLightboxIndex(idx)}
                        style={{
                          overflow: "hidden",
                          borderRadius: "12px",
                          position: "relative",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={800}
                          height={600}
                          style={{ height: "280px", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        />
                        <div style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "20px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                        }}>
                          <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.7)" }}>{item.category}</span>
                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", margin: "4px 0 0" }}>{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Homepage: original layout with GSAP animations */
          <div className="row gx-140">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                  data-cursor="View<br>Project"
                >
                  <div className="cursor-hide">
                    <span className="tp_img_reveal">
                      <div className="tp_img_reveal">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={800}
                          height={600}
                          style={{ height: "auto", width: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </span>
                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{item.category}</span>
                    </div>
                    <div className="tp-project-5-2-content tp_fade_anim">
                      <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!style_2 && (
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                    href="/portfolio"
                  >
                    <span className="tp-btn-circle-text">
                      More <br /> Projects
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && activeCategory !== "Videos" && activeCategory !== "Radio Jingles" && (
        <PortfolioLightbox
          images={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
