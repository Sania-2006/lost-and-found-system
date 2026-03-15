import { useEffect, useState } from "react";
import "../App.css";

function Admin(){

const [data,setData] = useState({
lostItems: [],
foundItems: [],
claims: []
});

useEffect(()=>{

fetch("http://localhost:5000/admin-data")
.then(res => res.json())
.then(data => setData(data));

},[]);

/* UPDATE CLAIM STATUS */

const updateClaim = async (index,status)=>{

await fetch("http://localhost:5000/update-claim",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({index,status})
});

window.location.reload();

};

/* DELETE / RESOLVE LOST ITEM */

const deleteItem = async (index)=>{

  const confirmAction = window.confirm(
    "Are you sure this item has been returned?"
  );

  if(!confirmAction) return;

  await fetch("http://localhost:5000/delete-item",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({index})
  });

  window.location.reload();

};

return(

<div className="items-page">  
  <h2 className="page-title">🛠 Admin Dashboard</h2>

<div className="stats-grid">

  <div className="stat-card">
    <h4>Lost Items</h4>
    <p>{data.lostItems.length}</p>
  </div>

  <div className="stat-card">
    <h4>Found Items</h4>
    <p>{data.foundItems.length}</p>
  </div>

  <div className="stat-card">
    <h4>Claims</h4>
    <p>{data.claims.length}</p>
  </div>

</div>

  <h3 className="section-title">Lost Items</h3>  <div className="admin-grid">
  {data.lostItems.map((item,index)=>(
    <div className="item-card" key={index}>
      <h4>{item.itemName}</h4>
      <p>{item.description}</p>
      <p>{item.location}</p>  
      {data.claims.some(
  claim => claim.item === item.itemName && claim.status === "Approved"
) && (
  <button onClick={()=>deleteItem(index)}>
    Resolve
  </button>
)}

</div>

))}

  </div>{/* FOUND ITEMS */}

  <h3 className="section-title">Found Items</h3>  <div className="admin-grid">
  {data.foundItems.map((item,index)=>(
    <div className="item-card" key={index}>
      <h4>{item.itemName}</h4>
      <p>{item.description}</p>
      <p>{item.location}</p>
    </div>
  ))}
  </div>{/* CLAIMS */}

  <h3 className="section-title">Claims</h3>  <div className="admin-grid">
  {data.claims.map((claim,index)=>(
    <div className="item-card" key={index}>  <h4>{claim.name}</h4>
  <p>Item: {claim.item}</p>
  <p>{claim.description}</p>

  <p className={claim.status==="Approved" ? "status-approved":"status-rejected"}>
  Status: {claim.status}
  </p>

  <div className="admin-buttons">

    <button
    className="approve-btn"
    onClick={()=>updateClaim(index,"Approved")}
    >
    Approve
    </button>

    <button
    className="reject-btn"
    onClick={()=>updateClaim(index,"Rejected")}
    >
    Reject
    </button>

  </div>

</div>

))}

  </div></div>);

}

export default Admin;