import { useState } from "react";
import "../App.css";

function ReportFound(){

  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmitted(true);
  }

  return(

    <div className="page">

      <div className="form-card">

        <h2>📦 Report Found Item</h2>

        {submitted && (
          <p style={{color:"green"}}>✅ Found item submitted successfully!</p>
        )}

        <form className="lost-form" onSubmit={handleSubmit}>

          <input placeholder="📦 Item Name"/>

          <textarea placeholder="📝 Description"></textarea>

          <input placeholder="📍 Location Found"/>

          <input type="date"/>

          <input type="file"/>

          <button type="submit">Submit Report</button>

        </form>

      </div>

    </div>

  )
}

export default ReportFound;