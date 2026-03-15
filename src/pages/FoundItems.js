import { useEffect, useState } from "react";
import "../App.css";

function FoundItems() {

  const [items,setItems] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:5000/found-items")
    .then(res => res.json())
    .then(data => setItems(data));

  },[]);

  return (

    <div className="items-page">

      <h2 className="page-title">📦 Found Items</h2>

      <div className="cards-grid">

        {items.map((item,index)=>(
          <div className="item-card" key={index}>

            <div className="item-info">
              <h3>{item.itemName}</h3>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </div>

            <div className="item-footer">
              <span className="status">Found</span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FoundItems;