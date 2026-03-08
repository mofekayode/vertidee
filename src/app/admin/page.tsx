"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import portfolio_data from "@/data/portfolio-data";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  order: number;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  img: string;
  order: number;
}

const ADMIN_PASSWORD = "vertidee-admin-2026";

const PORTFOLIO_CATEGORIES = [
  "Experiential Marketing",
  "Outdoor",
  "Events",
  "Training",
  "Creative",
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState(ADMIN_PASSWORD);
  const [activeTab, setActiveTab] = useState<"team" | "portfolio">("team");
  const [message, setMessage] = useState("");

  // Team state
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [teamUploading, setTeamUploading] = useState(false);
  const [teamFormData, setTeamFormData] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
    order: 0,
  });

  // Portfolio state
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioItem | null>(null);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);
  const [portfolioUploading, setPortfolioUploading] = useState(false);
  const [portfolioFormData, setPortfolioFormData] = useState({
    title: "",
    category: PORTFOLIO_CATEGORIES[0],
    img: "",
    order: 0,
  });

  const nextTeamOrder = members.length > 0 ? Math.max(...members.map(m => m.order)) + 1 : 1;
  const nextPortfolioOrder = portfolioItems.length > 0 ? Math.max(...portfolioItems.map(p => p.order)) + 1 : 1;

  const fetchMembers = useCallback(async () => {
    const res = await fetch("/api/team");
    const data = await res.json();
    setMembers(data.sort((a: TeamMember, b: TeamMember) => a.order - b.order));
  }, []);

  const fetchPortfolio = useCallback(async () => {
    const res = await fetch("/api/portfolio");
    const data = await res.json();
    setPortfolioItems(data.sort((a: PortfolioItem, b: PortfolioItem) => a.order - b.order));
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMembers();
      fetchPortfolio();
    }
  }, [isAuthenticated, fetchMembers, fetchPortfolio]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthToken(password);
      setMessage("");
    } else {
      setMessage("Invalid password");
    }
  }

  // --- Team handlers ---
  function resetTeamForm() {
    setTeamFormData({ name: "", designation: "", description: "", image: "", order: nextTeamOrder });
    setEditingMember(null);
    setShowTeamForm(false);
  }

  function handleEditTeam(member: TeamMember) {
    setEditingMember(member);
    setTeamFormData({
      name: member.name,
      designation: member.designation,
      description: member.description,
      image: member.image,
      order: member.order,
    });
    setShowTeamForm(true);
  }

  async function handleTeamImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setTeamUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "team");
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${authToken}` },
      body: fd,
    });
    if (res.ok) {
      const data = await res.json();
      setTeamFormData((prev) => ({ ...prev, image: data.url }));
    } else {
      setMessage("Upload failed");
    }
    setTeamUploading(false);
  }

  async function handleTeamSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editingMember ? `/api/team/${editingMember.id}` : "/api/team";
    const method = editingMember ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(teamFormData),
    });
    if (res.ok) {
      setMessage(editingMember ? "Team member updated!" : "Team member added!");
      resetTeamForm();
      fetchMembers();
    } else {
      const err = await res.json();
      setMessage(err.error || "Something went wrong");
    }
  }

  async function handleDeleteTeam(id: string) {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    const res = await fetch(`/api/team/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (res.ok) {
      setMessage("Team member removed");
      fetchMembers();
    }
  }

  // --- Portfolio handlers ---
  function resetPortfolioForm() {
    setPortfolioFormData({ title: "", category: PORTFOLIO_CATEGORIES[0], img: "", order: nextPortfolioOrder });
    setEditingPortfolio(null);
    setShowPortfolioForm(false);
  }

  function handleEditPortfolio(item: PortfolioItem) {
    setEditingPortfolio(item);
    setPortfolioFormData({
      title: item.title,
      category: item.category,
      img: item.img,
      order: item.order,
    });
    setShowPortfolioForm(true);
  }

  async function handlePortfolioImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPortfolioUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "portfolio");
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${authToken}` },
      body: fd,
    });
    if (res.ok) {
      const data = await res.json();
      setPortfolioFormData((prev) => ({ ...prev, img: data.url }));
    } else {
      setMessage("Upload failed");
    }
    setPortfolioUploading(false);
  }

  async function handlePortfolioSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editingPortfolio ? `/api/portfolio/${editingPortfolio.id}` : "/api/portfolio";
    const method = editingPortfolio ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(portfolioFormData),
    });
    if (res.ok) {
      setMessage(editingPortfolio ? "Portfolio item updated!" : "Portfolio item added!");
      resetPortfolioForm();
      fetchPortfolio();
    } else {
      const err = await res.json();
      setMessage(err.error || "Something went wrong");
    }
  }

  async function handleDeletePortfolio(id: string) {
    if (!confirm("Are you sure you want to remove this portfolio item?")) return;
    const res = await fetch(`/api/portfolio/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (res.ok) {
      setMessage("Portfolio item removed");
      fetchPortfolio();
    }
  }

  async function handleSeedPortfolio() {
    if (!confirm("This will replace all portfolio items with the default data. Continue?")) return;
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        action: "seed",
        items: portfolio_data,
      }),
    });
    if (res.ok) {
      setMessage("Portfolio seeded from defaults!");
      fetchPortfolio();
    } else {
      setMessage("Seed failed");
    }
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h1 style={styles.loginTitle}>Vert Idee Admin</h1>
          <p style={styles.loginSubtitle}>Content Management</p>
          <form onSubmit={handleLogin} style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, flex: 1, marginBottom: 0 }}
            />
            <button type="submit" style={{ ...styles.primaryBtn, whiteSpace: "nowrap" }}>
              Sign In
            </button>
          </form>
          {message && <p style={styles.error}>{message}</p>}
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontSize: "20px", lineHeight: 1 }} title="Back to Home">&larr;</a>
            <h1 style={styles.headerTitle}>Vert Idee Admin</h1>
          </div>
          <button onClick={() => { setIsAuthenticated(false); setPassword(""); }} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      {/* Tab bar */}
      <div style={styles.tabBar}>
        <div style={styles.tabBarInner}>
          <button
            onClick={() => setActiveTab("team")}
            style={activeTab === "team" ? styles.tabActive : styles.tab}
          >
            Team
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            style={activeTab === "portfolio" ? styles.tabActive : styles.tab}
          >
            Portfolio
          </button>
        </div>
      </div>

      <main style={styles.main}>
        {message && (
          <div style={styles.messageBar}>
            {message}
            <button onClick={() => setMessage("")} style={styles.closeMsg}>&times;</button>
          </div>
        )}

        {/* ======================== TEAM TAB ======================== */}
        {activeTab === "team" && (
          <>
            <div style={styles.topBar}>
              <h2 style={styles.sectionTitle}>Team Members ({members.length})</h2>
              <button
                onClick={() => { resetTeamForm(); setTeamFormData(prev => ({ ...prev, order: nextTeamOrder })); setShowTeamForm(true); }}
                style={styles.primaryBtn}
              >
                + Add Team Member
              </button>
            </div>

            {showTeamForm && (
              <div style={styles.formCard}>
                <h3 style={styles.formTitle}>
                  {editingMember ? "Edit Team Member" : "Add New Team Member"}
                </h3>
                <form onSubmit={handleTeamSubmit}>
                  <div style={styles.formGrid}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Name *</label>
                      <input
                        type="text"
                        value={teamFormData.name}
                        onChange={(e) => setTeamFormData({ ...teamFormData, name: e.target.value })}
                        required
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Designation / Role *</label>
                      <input
                        type="text"
                        value={teamFormData.designation}
                        onChange={(e) => setTeamFormData({ ...teamFormData, designation: e.target.value })}
                        required
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Display Order</label>
                      <input
                        type="number"
                        value={teamFormData.order}
                        onChange={(e) => setTeamFormData({ ...teamFormData, order: parseInt(e.target.value) || nextTeamOrder })}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Photo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleTeamImageUpload}
                        style={styles.input}
                      />
                      {teamUploading && <span style={{ fontSize: "13px", color: "#666" }}>Uploading...</span>}
                      {teamFormData.image && (
                        <div style={{ marginTop: "8px" }}>
                          <Image
                            src={teamFormData.image}
                            alt="Preview"
                            width={80}
                            height={80}
                            style={{ borderRadius: "8px", objectFit: "cover" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Description / Bio</label>
                    <textarea
                      value={teamFormData.description}
                      onChange={(e) => setTeamFormData({ ...teamFormData, description: e.target.value })}
                      rows={3}
                      style={{ ...styles.input, resize: "vertical" as const }}
                    />
                  </div>
                  <div style={styles.formActions}>
                    <button type="submit" style={styles.primaryBtn}>
                      {editingMember ? "Update" : "Add"} Team Member
                    </button>
                    <button type="button" onClick={resetTeamForm} style={styles.secondaryBtn}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div style={styles.grid}>
              {members.map((member) => (
                <div key={member.id} style={styles.card}>
                  <div style={styles.cardImage}>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                      />
                    ) : (
                      <div style={styles.placeholder}>No Photo</div>
                    )}
                  </div>
                  <div style={styles.cardBody}>
                    <h4 style={styles.cardName}>{member.name}</h4>
                    <p style={styles.cardRole}>{member.designation}</p>
                    {member.description && (
                      <p style={styles.cardDesc}>{member.description}</p>
                    )}
                    <p style={styles.cardOrder}>Order: {member.order}</p>
                    <div style={styles.cardActions}>
                      <button onClick={() => handleEditTeam(member)} style={styles.editBtn}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteTeam(member.id)} style={styles.deleteBtn}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ======================== PORTFOLIO TAB ======================== */}
        {activeTab === "portfolio" && (
          <>
            <div style={styles.topBar}>
              <h2 style={styles.sectionTitle}>Portfolio Items ({portfolioItems.length})</h2>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={handleSeedPortfolio} style={styles.secondaryBtn}>
                  Sync from Defaults
                </button>
                <button
                  onClick={() => { resetPortfolioForm(); setPortfolioFormData(prev => ({ ...prev, order: nextPortfolioOrder })); setShowPortfolioForm(true); }}
                  style={styles.primaryBtn}
                >
                  + Add Portfolio Item
                </button>
              </div>
            </div>

            {showPortfolioForm && (
              <div style={styles.formCard}>
                <h3 style={styles.formTitle}>
                  {editingPortfolio ? "Edit Portfolio Item" : "Add New Portfolio Item"}
                </h3>
                <form onSubmit={handlePortfolioSubmit}>
                  <div style={styles.formGrid}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Title *</label>
                      <input
                        type="text"
                        value={portfolioFormData.title}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, title: e.target.value })}
                        required
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Category *</label>
                      <select
                        value={portfolioFormData.category}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, category: e.target.value })}
                        style={styles.input}
                      >
                        {PORTFOLIO_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Display Order</label>
                      <input
                        type="number"
                        value={portfolioFormData.order}
                        onChange={(e) => setPortfolioFormData({ ...portfolioFormData, order: parseInt(e.target.value) || nextPortfolioOrder })}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePortfolioImageUpload}
                        style={styles.input}
                      />
                      {portfolioUploading && <span style={{ fontSize: "13px", color: "#666" }}>Uploading...</span>}
                      {portfolioFormData.img && (
                        <div style={{ marginTop: "8px" }}>
                          <Image
                            src={portfolioFormData.img}
                            alt="Preview"
                            width={80}
                            height={80}
                            style={{ borderRadius: "8px", objectFit: "cover" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={styles.formActions}>
                    <button type="submit" style={styles.primaryBtn}>
                      {editingPortfolio ? "Update" : "Add"} Portfolio Item
                    </button>
                    <button type="button" onClick={resetPortfolioForm} style={styles.secondaryBtn}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div style={styles.grid}>
              {portfolioItems.map((item) => (
                <div key={item.id} style={styles.card}>
                  <div style={styles.cardImage}>
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                      />
                    ) : (
                      <div style={styles.placeholder}>No Image</div>
                    )}
                  </div>
                  <div style={styles.cardBody}>
                    <h4 style={styles.cardName}>{item.title}</h4>
                    <p style={styles.cardRole}>{item.category}</p>
                    <p style={styles.cardOrder}>Order: {item.order}</p>
                    <div style={styles.cardActions}>
                      <button onClick={() => handleEditPortfolio(item)} style={styles.editBtn}>
                        Edit
                      </button>
                      <button onClick={() => handleDeletePortfolio(item.id)} style={styles.deleteBtn}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  loginBox: {
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    padding: "56px 48px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center" as const,
  },
  loginTitle: {
    fontSize: "32px",
    fontWeight: 800,
    marginBottom: "4px",
    letterSpacing: "-0.5px",
  },
  loginSubtitle: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "36px",
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
  },
  container: {
    minHeight: "100vh",
    background: "#f5f5f5",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  header: {
    background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
    color: "#fff",
    padding: "20px 0",
  },
  headerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#ffffff",
  },
  logoutBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
  },
  tabBar: {
    background: "#fff",
    borderBottom: "1px solid #e8e8e8",
  },
  tabBarInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    gap: "0",
  },
  tab: {
    padding: "16px 24px",
    background: "none",
    border: "none",
    borderBottom: "3px solid transparent",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    color: "#888",
    transition: "all 0.2s ease",
  },
  tabActive: {
    padding: "16px 24px",
    background: "none",
    border: "none",
    borderBottom: "3px solid #1a1a2e",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    color: "#1a1a2e",
    transition: "all 0.2s ease",
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 24px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 700,
  },
  messageBar: {
    background: "#e8f5e9",
    color: "#2e7d32",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeMsg: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#2e7d32",
  },
  formCard: {
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    marginBottom: "32px",
  },
  formTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "24px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "6px",
    color: "#333",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    border: "2px solid #e8e8e8",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease",
  },
  formActions: {
    display: "flex",
    gap: "12px",
    marginTop: "8px",
  },
  primaryBtn: {
    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  secondaryBtn: {
    background: "#f5f5f5",
    color: "#333",
    border: "1px solid #ddd",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  cardImage: {},
  placeholder: {
    height: "200px",
    background: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#999",
    fontSize: "14px",
  },
  cardBody: {
    padding: "20px",
  },
  cardName: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "4px",
  },
  cardRole: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: "1.5",
    marginBottom: "8px",
  },
  cardOrder: {
    fontSize: "12px",
    color: "#aaa",
    marginBottom: "12px",
  },
  cardActions: {
    display: "flex",
    gap: "8px",
  },
  editBtn: {
    background: "#f0f0f0",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
  },
  deleteBtn: {
    background: "#fff0f0",
    color: "#e53935",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
  },
  error: {
    color: "#e53935",
    fontSize: "14px",
    marginTop: "12px",
  },
};
