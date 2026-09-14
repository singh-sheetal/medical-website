"use client";

export function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <button
      onClick={handleLogout}
      className="btn btn-primary btn-sm"
      style={{ letterSpacing: "0.01em" }}
    >
      Sign out
    </button>
  );
}
