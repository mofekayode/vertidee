"use client";
import React, { useRef, useState, useEffect } from "react";
import { team_data_slider } from "@/data/team-data";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

type IProps = {
  spacing?: string;
};
const TeamOne = ({ spacing = "pt-20" }: IProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);
  const [isSmall, setIsSmall] = useState(false);
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

  // Small screen: only founders (CEO, ED)
  // Big screen: Bayo first, founders center, Mofe last
  const mobileData = team_data.slice(0, 2); // CEO and ED only

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
              {team_data_slider.map((t) => (
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
