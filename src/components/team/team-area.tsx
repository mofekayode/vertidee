"use client";
import React, { useState, useEffect } from "react";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

export default function TeamArea() {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);
  const [teamData, setTeamData] = useState<ITeamDT[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((members) => {
        const mapped: ITeamDT[] = members
          .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
          .map((m: { id: string; image: string; designation: string; name: string; description?: string; location?: string }) => ({
            id: Number(m.id) || m.id,
            image: m.image,
            designation: m.designation,
            name: m.name,
            bio: m.description || "",
            location: m.location,
          }));
        setTeamData(mapped);
      });
  }, []);

  function handleTeamModal(team: ITeamDT) {
    setShowModal(!showModal);
    setTeamItem(team);
  }
  return (
    <>
      <div className="tp-team-area pb-120 fix">
        <div className="container container-1530">
          <div className="row">
            {teamData.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <TeamItem item={item} handleTeamModal={handleTeamModal} />
              </div>
            ))}
          </div>
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
}
