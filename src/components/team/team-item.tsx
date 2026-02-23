import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";

// prop type
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div
      className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
      onClick={() => handleTeamModal(item)}
      style={{ cursor: "pointer" }}
    >
      <div className="tp-hover-btn-item tp-team-img-wrap" style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", position: "relative" }}>
        <Image
          src={item.image}
          alt={item.name}
          width={375}
          height={500}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.4s ease" }}
        />
        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "20px",
        }} className="team-hover-overlay">
          <span style={{
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            border: "1px solid rgba(255,255,255,0.5)",
            padding: "8px 20px",
            borderRadius: "30px",
          }}>
            View Profile
          </span>
        </div>
      </div>
      <div className="tp-team-content">
        <span>{item.designation}</span>
        <h4 className="tp-team-title-sm">
          {item.name}
        </h4>
      </div>
      <style jsx>{`
        .tp-team-item:hover .team-hover-overlay {
          opacity: 1 !important;
        }
        .tp-team-item:hover .tp-hover-btn-item img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
