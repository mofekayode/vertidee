"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  order: number;
}

const ADMIN_PASSWORD = "vertidee-admin-2026";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
    order: 999,
  });

  const fetchMembers = useCallback(async () => {
    const res = await fetch("/api/team");
    const data = await res.json();
    setMembers(data.sort((a: TeamMember, b: TeamMember) => a.order - b.order));
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMembers();
    }
  }, [isAuthenticated, fetchMembers]);

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

  function resetForm() {
    setFormData({ name: "", designation: "", description: "", image: "", order: 999 });
    setEditingMember(null);
    setShowForm(false);
  }

  function handleEdit(member: TeamMember) {
    setEditingMember(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      description: member.description,
      image: member.image,
      order: member.order,
    });
    setShowForm(true);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${authToken}` },
      body: fd,
    });

    if (res.ok) {
      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.url }));
    } else {
      setMessage("Upload failed");
    }
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url = editingMember ? `/api/team/${editingMember.id}` : "/api/team";
    const method = editingMember ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage(editingMember ? "Team member updated!" : "Team member added!");
      resetForm();
      fetchMembers();
    } else {
      const err = await res.json();
      setMessage(err.error || "Something went wrong");
    }
  }

  async function handleDelete(id: string) {
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

  // Login screen
  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h1 style={styles.loginTitle}>Vert Idee Admin</h1>
          <p style={styles.loginSubtitle}>Team Management</p>
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
          <h1 style={styles.headerTitle}>Vert Idee Admin</h1>
          <button onClick={() => { setIsAuthenticated(false); setPassword(""); }} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.topBar}>
          <h2 style={styles.sectionTitle}>Team Members ({members.length})</h2>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            style={styles.primaryBtn}
          >
            + Add Team Member
          </button>
        </div>

        {message && (
          <div style={styles.messageBar}>
            {message}
            <button onClick={() => setMessage("")} style={styles.closeMsg}>&times;</button>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>
              {editingMember ? "Edit Team Member" : "Add New Team Member"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Designation / Role *</label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 999 })}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={styles.input}
                  />
                  {uploading && <span style={{ fontSize: "13px", color: "#666" }}>Uploading...</span>}
                  {formData.image && (
                    <div style={{ marginTop: "8px" }}>
                      <Image
                        src={formData.image}
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
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  style={{ ...styles.input, resize: "vertical" as const }}
                />
              </div>
              <div style={styles.formActions}>
                <button type="submit" style={styles.primaryBtn}>
                  {editingMember ? "Update" : "Add"} Team Member
                </button>
                <button type="button" onClick={resetForm} style={styles.secondaryBtn}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Team Members List */}
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
                  <button onClick={() => handleEdit(member)} style={styles.editBtn}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(member.id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
