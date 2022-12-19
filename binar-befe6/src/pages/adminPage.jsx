import React from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/")}>hay</div>;
}

export default AdminPage;
