"use client";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

export interface ServiceDetailData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
  videos?: string[];
  audioSamples?: { label: string; src: string }[];
}

function VideoCard({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    if (!ref.current) return;
    ref.current.play();
    setStarted(true);
  };

  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "16px",
      background: "#000",
    }}>
      <video
        ref={ref}
        controls={started}
        playsInline
        preload="metadata"
        onPause={() => {}}
        onEnded={() => setStarted(false)}
        style={{ width: "100%", height: "280px", display: "block", objectFit: "cover" }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Custom play button overlay - only shown before first play */}
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
            transition: "transform 0.3s ease",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
              <path d="M6 3.5v17a1 1 0 0 0 1.5.87l14-8.5a1 1 0 0 0 0-1.74l-14-8.5A1 1 0 0 0 6 3.5z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageLightbox({ images, activeIndex, onClose }: { images: string[]; activeIndex: number; onClose: () => void }) {
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

      {/* Prev */}
      <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      {/* Image */}
      <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80vw", height: "80vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={`Image ${current + 1}`}
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

export default function ServiceDetailArea({ data }: { data: ServiceDetailData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <span className="tp_fade_bottom" style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px", display: "block", color: "#888" }}>
                {data.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {data.title}
              </h4>
              <p className="tp_fade_bottom" style={{ fontSize: "18px", lineHeight: "1.8", maxWidth: "700px", marginTop: "20px" }}>
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Video showcase */}
        {data.videos && data.videos.length > 0 && (
          <div className="row mt-60 mb-60">
            <div className="col-12">
              <h4 className="tp_fade_bottom" style={{ fontSize: "28px", fontWeight: 700, marginBottom: "10px" }}>See Us in Action</h4>
              <p className="tp_fade_bottom" style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}>Watch our activations and campaigns come to life.</p>
            </div>
            {data.videos.map((vid, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12 mb-30">
                <VideoCard src={vid} />
              </div>
            ))}
          </div>
        )}

        <div className="row mt-80">
          <div className="col-xl-4 col-lg-5">
            <div className="tp_fade_bottom">
              <h4 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "25px" }}>What We Offer</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.features.map((feature, i) => (
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
          <div className="col-xl-8 col-lg-7">
            <div className="row">
              {data.images.map((img, i) => (
                <div key={i} className="col-6 col-md-4 mb-25">
                  <div
                    onClick={() => setLightboxIndex(i)}
                    style={{ overflow: "hidden", borderRadius: "8px", height: "220px", cursor: "pointer", position: "relative" }}
                  >
                    <Image
                      src={img}
                      alt={`${data.title} work ${i + 1}`}
                      width={400}
                      height={220}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    />
                    {/* Expand icon */}
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }} className="img-expand-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>
                    <style jsx>{`
                      div:hover .img-expand-icon { opacity: 1 !important; }
                      div:hover img { transform: scale(1.05); }
                    `}</style>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={data.images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
