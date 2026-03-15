import { useState } from "react";
import "../App.css";

function ReportFound() {

  const [submitted,setSubmitted] = useState(false);

  const [itemName,setItemName] = useState("");
  const [description,setDescription] = useState("");
  const [location,setLocation] = useState("");
  const [date,setDate] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!itemName ||  !description){
      alert("please fill all fields");
      return;
    }

    const item = {
      itemName,
      description,
      location,
      date
    };

    await fetch("http://localhost:5000/report-found",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(item)
    });

    setSubmitted(true);
  };

  return (
    <div className="page">
      <div className="form-card">

        <h2>📦 Report Found Item</h2>

        {submitted && (
          <p style={{color:"green"}}>✅ Found item submitted successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="lost-form">

          <input
            placeholder="📦 Item Name"
            value={itemName}
            onChange={(e)=>setItemName(e.target.value)}
          />

          <textarea
            placeholder="📝 Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <input
            placeholder="📍 Location Found"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />

          <button type="submit">Submit Report</button>

        </form>

      </div>
    </div>
  );
}

export default ReportFound;