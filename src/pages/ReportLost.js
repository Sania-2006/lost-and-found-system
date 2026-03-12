import { useState } from "react";
import "../App.css";

function ReportLost() {

  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">

      <div className="form-card">

        <h2>📌 Report Lost Item</h2>

        {submitted && (
          <p style={{color:"green"}}>✅ Lost item submitted successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="lost-form">

        <input placeholder="📦 Item Name"/>

        <textarea placeholder="📝 Description"></textarea>

        <input placeholder="📍 Location Lost"/>

        <input type="date"/>

        <input type="file"/>

        <button type="submit">Submit Report</button>

        </form>

      </div>

    </div>
  );
}

export default ReportLost;