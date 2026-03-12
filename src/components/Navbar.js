import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">

      <Link to="/">🏠 Home</Link>

      <Link to="/reportlost">📌 Report Lost</Link>

      <Link to="/reportfound">📦 Report Found</Link>

      <Link to="/lostitems">🔍 Lost Items</Link>

      <Link to="/founditems">✅ Found Items</Link>

      <Link to="/claimitem">📝 Claim Item</Link>

      <Link to="/admin">🛠 Admin</Link>

    </div>
  );
}

export default Navbar;