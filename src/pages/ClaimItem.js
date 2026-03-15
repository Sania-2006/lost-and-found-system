import { useState } from "react";
import "../App.css";

function ClaimItem(){

  const [submitted,setSubmitted] = useState(false);

  const [name,setName] = useState("");
  const [item,setItem] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const claim = {
      name,
      item,
      description
    };

    await fetch("http://localhost:5000/claim-item",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(claim)
    });

    setSubmitted(true);

  };

  return(

    <div className="page">

      <div className="form-card">

        <h2>📝 Claim Item</h2>

        {submitted && (
          <p style={{color:"green"}}>✅ Claim submitted successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="lost-form">

          <input
            placeholder="👤 Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            placeholder="📦 Item Name"
            value={item}
            onChange={(e)=>setItem(e.target.value)}
          />

          <textarea
            placeholder="📝 Describe the item"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <button type="submit">Submit Claim</button>

        </form>

      </div>

    </div>

  )

}

export default ClaimItem;