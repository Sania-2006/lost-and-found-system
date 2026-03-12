import ItemCard from "../components/ItemCard";
import "../App.css";

function LostItems(){

  const items = [
    {name:"Wallet",location:"Library"},
    {name:"Calculator",location:"Engineering Lab"},
    {name:"Phone",location:"Cafeteria"},
    {name:"Backpack",location:"Auditorium"},
    {name:"ID Card",location:"Main Gate"},
    {name:"Watch",location:"Sports Complex"}
  ];

  return(

    <div className="items-page">

      <h2 className="page-title">🔎 Lost Items</h2>

      <div className="cards-grid">

        {items.map((item,index)=>(
          <ItemCard
            key={index}
            name={item.name}
            location={item.location}
            status="Lost"
          />
        ))}

      </div>

    </div>

  )
}

export default LostItems;