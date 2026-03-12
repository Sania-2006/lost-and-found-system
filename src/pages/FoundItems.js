import ItemCard from "../components/ItemCard";
import "../App.css";

function FoundItems(){

  const items = [
    {name:"Keys", location:"Parking Area"},
    {name:"ID Card", location:"Cafeteria"},
    {name:"Watch", location:"Library"},
    {name:"Water Bottle", location:"Sports Ground"},
    {name:"Laptop Charger", location:"Computer Lab"},
    {name:"Earphones", location:"Bus Stop"},
    {name:"Notebook", location:"Classroom 204"},
    {name:"Umbrella", location:"Main Gate"}
  ];

  return(

    <div className="items-page">

      <h2 className="page-title">✅ Found Items</h2>

      <div className="cards-grid">

        {items.map((item,index)=>(
          <ItemCard
            key={index}
            name={item.name}
            location={item.location}
            status="Found"
          />
        ))}

      </div>

    </div>

  )

}

export default FoundItems;