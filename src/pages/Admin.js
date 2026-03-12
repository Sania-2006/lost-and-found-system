import "../App.css";

function Admin(){

  const reports = [
    {name:"Wallet", location:"Library", status:"Lost"},
    {name:"Phone", location:"Cafeteria", status:"Lost"},
    {name:"Keys", location:"Parking Area", status:"Found"},
    {name:"Laptop Charger", location:"Computer Lab", status:"Found"}
  ]

  return(

    <div className="items-page">

      <h2 className="page-title">🛠 Admin Dashboard</h2>

      <div className="cards-grid">

        <div className="item-card">
          <h3>Total Lost Items</h3>
          <p style={{fontSize:"28px"}}>6</p>
        </div>

        <div className="item-card">
          <h3>Total Found Items</h3>
          <p style={{fontSize:"28px"}}>8</p>
        </div>

        <div className="item-card">
          <h3>Claims Pending</h3>
          <p style={{fontSize:"28px"}}>3</p>
        </div>

      </div>

      <h3 style={{marginTop:"40px"}}>Recent Reports</h3>

      <div className="cards-grid">

        {reports.map((item,index)=>(
          <div key={index} className="item-card">

            <h3>{item.name}</h3>

            <p>📍 {item.location}</p>

            <p>{item.status}</p>

            <button>Mark Resolved</button>

          </div>
        ))}

      </div>

    </div>

  )
}

export default Admin;