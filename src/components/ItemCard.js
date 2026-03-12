import "../App.css";

function ItemCard({name,location,status}){

  return(

    <div className="item-card">

      <div className="item-info">
        <h3>📦 {name}</h3>
        <p>📍 {location}</p>
      </div>

      <div className="item-footer">

        <span 
        className="status"
        style={{
          background: status==="Found" ? "#dcfce7" : "#fee2e2",
          color: status==="Found" ? "#15803d" : "#b91c1c"
        }}
        >
          {status}
        </span>

        <button>View Details</button>

      </div>

    </div>

  )

}

export default ItemCard;