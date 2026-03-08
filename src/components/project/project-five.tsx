"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
import default_portfolio_data from "@/data/portfolio-data";

// Items for homepage (curated selection) - uses default IDs
const homepage_items = [1, 33, 71, 61, 79, 53, 88, 35, 83, 24, 92, 100];

const categories = ["All", "Creative", "Outdoor", "Events", "Training", "Media", "Experiential Marketing"];

// Helper: check if item belongs to Experiential Marketing tab
const isExperientialCategory = (cat: string) => cat === "Experiential Marketing";

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
  { src: "/assets/video/activation-video-1.mp4", title: "Campus Activation 1" },
  { src: "/assets/video/activation-video-2.mp4", title: "Campus Activation 2" },
  { src: "/assets/video/activation-video-3.mp4", title: "Campus Activation 3" },
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
  const [project_data, setProjectData] = useState(default_portfolio_data);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then((data: { id: string; title: string; category: string; img: string; order: number }[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data
            .sort((a, b) => a.order - b.order)
            .map((item, i) => ({
              id: i + 1,
              title: item.title,
              category: item.category,
              img: item.img,
            }));
          setProjectData(mapped);
        }
      })
      .catch(() => { /* keep defaults */ });
  }, []);

  const items = style_2 ? project_data : project_data.filter((p) => homepage_items.includes(p.id));
  const getExperientialItems = () => project_data.filter(p => isExperientialCategory(p.category));

  const categoryOrder = ["Creative", "Outdoor", "Events", "Training", "Media", "Experiential Marketing"];
  const getCategoryIndex = (cat: string) => isExperientialCategory(cat) ? categoryOrder.indexOf("Experiential Marketing") : categoryOrder.indexOf(cat);
  const filteredItems = activeCategory === "All"
    ? [...items].sort((a, b) => getCategoryIndex(a.category) - getCategoryIndex(b.category))
    : activeCategory === "Experiential Marketing"
      ? items.filter((item) => isExperientialCategory(item.category))
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
                {cat} {cat !== "All" && (
                  <span style={{ opacity: 0.6, fontSize: "12px" }}>
                    ({cat === "Media"
                      ? portfolio_jingles.length
                      : cat === "Experiential Marketing"
                        ? getExperientialItems().length + portfolio_videos.length
                        : project_data.filter(p => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {style_2 ? (
          <>
            {/* Media tab: Radio Jingles */}
            {activeCategory === "Media" && (
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Radio Jingles</h3>
                <div className="row">
                  <div className="col-lg-8 col-12">
                    {portfolio_jingles.map((jingle, i) => (
                      <JinglePlayer key={i} audio={jingle} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experiential Marketing tab: images + videos */}
            {activeCategory === "Experiential Marketing" && (
              <div>
                {/* Experiential Marketing Videos */}
                <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Experiential Marketing Videos</h3>
                <div className="row" style={{ rowGap: "24px", marginBottom: "50px" }}>
                  {portfolio_videos.map((vid, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-12">
                      <PortfolioVideoCard src={vid.src} title={vid.title} />
                    </div>
                  ))}
                </div>
                {/* Experiential Marketing images */}
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

                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", margin: "4px 0 0" }}>{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All tab: show grouped by category in pill order */}
            {activeCategory === "All" && (() => {
              const categoryOrder = ["Creative", "Outdoor", "Events", "Training", "Media", "Experiential Marketing"];
              let runningIndex = 0;
              return (
                <>
                  {categoryOrder.map((cat) => {
                    const catItems = cat === "Experiential Marketing"
                      ? items.filter((item) => isExperientialCategory(item.category))
                      : items.filter((item) => item.category === cat);
                    const startIdx = runningIndex;
                    runningIndex += catItems.length;

                    if (cat === "Media") {
                      return (
                        <div key={cat} style={{ marginBottom: "60px" }}>
                          <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Media</h3>
                          <div className="row">
                            <div className="col-lg-8 col-12">
                              {portfolio_jingles.map((jingle, i) => (
                                <JinglePlayer key={i} audio={jingle} index={i} />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    if (cat === "Experiential Marketing") {
                      const expItems = items.filter((item) => isExperientialCategory(item.category));
                      return (
                        <div key={cat} style={{ marginBottom: "60px" }}>
                          <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>Experiential Marketing</h3>
                          {/* Videos first */}
                          <div className="row" style={{ rowGap: "24px", marginBottom: "40px" }}>
                            {portfolio_videos.map((vid, i) => (
                              <div key={i} className="col-lg-4 col-md-6 col-12">
                                <PortfolioVideoCard src={vid.src} title={vid.title} />
                              </div>
                            ))}
                          </div>
                          {/* Then images */}
                          <div className="row" style={{ rowGap: "24px" }}>
                            {catItems.map((item, idx) => (
                              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                                <div
                                  onClick={() => setLightboxIndex(startIdx + idx)}
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
          
                                    <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", margin: "4px 0 0" }}>{item.title}</h4>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    if (catItems.length === 0) return null;

                    return (
                      <div key={cat} style={{ marginBottom: "60px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px", color: "inherit" }}>{cat}</h3>
                        <div className="row" style={{ rowGap: "24px" }}>
                          {catItems.map((item, idx) => (
                            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                              <div
                                onClick={() => setLightboxIndex(startIdx + idx)}
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
        
                                  <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", margin: "4px 0 0" }}>{item.title}</h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })()}

            {/* Other category tabs (Creative, Outdoor, Events, Training): just image grid */}
            {activeCategory !== "All" && activeCategory !== "Experiential Marketing" && activeCategory !== "Media" && (
              <div>
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
      {lightboxIndex !== null && activeCategory !== "Media" && (
        <PortfolioLightbox
          images={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
