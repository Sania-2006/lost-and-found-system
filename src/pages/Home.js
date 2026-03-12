import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>🎒 Campus Lost & Found System</h1>

        <p>
          Helping students recover lost belongings quickly across campus.
        </p>

        <div className="hero-buttons">

          <Link to="/reportlost">
            <button>📌 Report Lost Item</button>
          </Link>

          <Link to="/reportfound">
            <button>📦 Report Found Item</button>
          </Link>

        </div>

      </div>

      <div className="features">

        <div className="feature-card">
          <h3>📌 Report Lost Items</h3>
          <p>Students can quickly report lost belongings anywhere on campus.</p>
        </div>

        <div className="feature-card">
          <h3>📦 Report Found Items</h3>
          <p>Anyone who finds an item can submit details to help return it.</p>
        </div>

        <div className="feature-card">
          <h3>📝 Claim Your Item</h3>
          <p>Owners can submit claims to recover their belongings.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;