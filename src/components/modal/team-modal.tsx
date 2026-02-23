import { ITeamDT } from "@/types/team-d-t";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Link from "next/link";

// prop type
type IProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  teamItem: ITeamDT;
};

export default function TeamModal({showModal,setShowModal,teamItem}: IProps) {
  const handleClose = () => setShowModal(false);
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg"
    >
      <Modal.Header closeButton>
        <button type="button" className="btn-close"></button>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div style={{ overflow: "hidden", borderRadius: "12px" }}>
                <Image
                  src={teamItem.image}
                  alt={teamItem.name}
                  width={500}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div style={{ padding: "20px 0" }}>
                <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", color: "#888", display: "block", marginBottom: "8px" }}>
                  {teamItem.designation}
                </span>
                <h4 style={{ fontSize: "36px", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                  {teamItem.name}
                </h4>
                {teamItem.bio && (
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#555", marginBottom: "24px" }}>
                    {teamItem.bio}
                  </p>
                )}
                <div style={{ marginBottom: "30px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontWeight: 600 }}>Company:</span>
                      <span>Vert Idee</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontWeight: 600 }}>Location:</span>
                      <span>{teamItem.location || "Lagos, Nigeria"}</span>
                    </div>
                  </div>
                </div>
                <div className="tm-details-social">
                  <span className="tm-details-social-title" style={{ fontWeight: 600, marginBottom: "10px", display: "block" }}>Follow Vert Idee:</span>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Link href="https://instagram.com/vertidee" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="https://facebook.com/vertidee" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="https://twitter.com/vertidee" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="https://linkedin.com/company/vertidee" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
