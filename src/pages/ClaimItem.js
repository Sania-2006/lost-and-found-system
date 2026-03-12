import "../App.css";

function ClaimItem(){

  return(

    <div className="page">

      <div className="form-card">

        <h2>📄 Claim Item</h2>

        <p>Please provide details to claim your item.</p>

        <form className="lost-form">

          <input placeholder="👤 Your Name"/>

          <input placeholder="📧 Email Address"/>

          <input placeholder="📦 Item Name"/>

          <textarea placeholder="Describe the item"></textarea>

          <button>Submit Claim</button>

        </form>

      </div>

    </div>

  )

}

export default ClaimItem;