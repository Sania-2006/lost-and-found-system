import { useEffect, useState } from "react";
import "../App.css";

function LostItems() {

  const [items, setItems] = useState([]);
  const [search,setSearch] = useState("");
  const [categoryFilter,setCategoryFilter] = useState("All");

  useEffect(() => {

    fetch("http://localhost:5000/lost-items")
      .then(res => res.json())
      .then(data => setItems(data));

  }, []);

  /* FILTER ITEMS */

  const filteredItems = items.filter(item => {

    const matchCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    const matchSearch =
      item.itemName.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;

  });

  return (

    <div className="items-page">

      <h2 className="page-title">🔍 Lost Items</h2>

      {/* CATEGORY FILTER */}

      <div style={{
        display:"flex",
        gap:"10px",
        justifyContent:"center",
        flexWrap:"wrap",
        marginBottom:"20px"
      }}>

        <button onClick={()=>setCategoryFilter("All")}>All</button>
        <button onClick={()=>setCategoryFilter("Electronics")}>Electronics</button>
        <button onClick={()=>setCategoryFilter("Documents")}>Documents</button>
        <button onClick={()=>setCategoryFilter("Accessories")}>Accessories</button>
        <button onClick={()=>setCategoryFilter("Keys")}>Keys</button>

      </div>

      {/* SEARCH BAR */}

      <div style={{textAlign:"center",marginBottom:"30px"}}>

        <input
          type="text"
          placeholder="Search lost items..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{
            padding:"10px",
            width:"300px",
            borderRadius:"6px",
            border:"1px solid #ccc"
          }}
        />

      </div>

      {/* ITEMS GRID */}

      <div className="cards-grid">

        {filteredItems.length === 0 ? (

          <p style={{gridColumn:"1/-1",textAlign:"center"}}>
            No lost items found.
          </p>

        ) : (

          filteredItems.map((item, index) => (

            <div className="item-card" key={index}>

              <div className="item-info">
                <h3>📦 {item.itemName}</h3>
                <p>📂 {item.category}</p>
                <p>📍 {item.location}</p>
                <p>{item.description}</p>
              </div>

              <div className="item-footer">
                <span className="status">Lost</span>
              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default LostItems;