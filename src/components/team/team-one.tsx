"use client";
import React, { useRef, useState, useEffect } from "react";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

interface APIMember {
  id: string;
  image: string;
  designation: string;
  name: string;
  description?: string;
  location?: string;
  order: number;
}

function toTeamDT(m: APIMember): ITeamDT {
  return {
    id: Number(m.id) || m.id,
    image: m.image,
    designation: m.designation,
    name: m.name,
    bio: m.description || "",
    location: m.location,
  };
}

type IProps = {
  spacing?: string;
};
const TeamOne = ({ spacing = "pt-20" }: IProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);
  const [isSmall, setIsSmall] = useState(false);
  const [mobileData, setMobileData] = useState<ITeamDT[]>([]);
  const [sliderData, setSliderData] = useState<ITeamDT[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleTeamModal(team: ITeamDT) {
    setShowModal(!showModal);
    setTeamItem(team);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((members: APIMember[]) => {
        const sorted = members.sort((a, b) => a.order - b.order);

        // Mobile: founders only (order 1 and 2)
        const founders = sorted.filter((m) => m.order <= 2);
        setMobileData(founders.map(toTeamDT));

        // Desktop slider: non-founders first half, founders center, non-founders second half
        const others = sorted.filter((m) => m.order > 2);
        const mid = Math.floor(others.length / 2);
        const firstHalf = others.slice(0, mid);
        const secondHalf = others.slice(mid);
        const reordered = [...firstHalf, ...founders, ...secondHalf];
        setSliderData(reordered.map(toTeamDT));
      });
  }, []);

  return (
    <>
      <div className={`tp-team-area ${spacing} pb-120 fix`}>
        <div className="container-fluid">
          {isSmall ? (
            /* Mobile: wrapping grid so founders are always visible on top */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                padding: "0 16px",
              }}
            >
              {mobileData.map((t) => (
                <div key={t.id}>
                  <TeamItem item={t} handleTeamModal={handleTeamModal} />
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: horizontal scroll row */
            <div
              ref={scrollRef}
              className="tp-team-scroll-wrap"
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                paddingBottom: "10px",
                paddingLeft: "40px",
              }}
            >
              {sliderData.map((t) => (
                <div
                  key={t.id}
                  className="tp-team-scroll-card"
                  style={{
                    flex: "0 0 15.5%",
                    minWidth: "200px",
                    scrollSnapAlign: "start",
                  }}
                >
                  <TeamItem item={t} handleTeamModal={handleTeamModal} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* team modal */}
      {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )}
      {/* team modal */}
    </>
  );
};

export default TeamOne;
