import { useEffect, useState } from "react";
import "../App.css";

function ClaimStatus(){

  const [claims,setClaims] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{

    fetch("http://localhost:5000/claims")
    .then(res => res.json())
    .then(data => setClaims(data));

  },[]);

  const filteredClaims = claims.filter(claim =>
    claim.name.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div className="items-page">

      <h2 className="page-title">📋 Claim Status</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:"10px",
          marginBottom:"20px",
          border:"1px solid #ccc",
          borderRadius:"6px"
        }}
      />

      <div className="cards-grid">

      {filteredClaims.map((claim,index)=>(
        <div className="item-card" key={index}>

          <h3>{claim.name}</h3>
          <p>Item: {claim.item}</p>
          <p>{claim.description}</p>

          <p className={
            claim.status==="Approved"? "status-approved": 
            claim.status==="Rejected"?"status-rejected":
            "status-pending"
          }>
          Status: {claim.status}
          </p>

        </div>
      ))}

      </div>

    </div>

  );
}

export default ClaimStatus;