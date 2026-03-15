import { useState } from "react";
import "../App.css";

function ReportLost() {

const [submitted,setSubmitted] = useState(false);

const [image,setImage] = useState(null);
const [itemName,setItemName] = useState("");
const [description,setDescription] = useState("");
const [location,setLocation] = useState("");
const [date,setDate] = useState("");
const [category,setCategory]=useState("");
const handleSubmit = async (e) => {

e.preventDefault();

if(!itemName || !description){
  alert("Please fill all fields");
  return;
}

const item = {
  itemName,
  description,
  location,
  date,
  category,
  image
};

await fetch("http://localhost:5000/report-lost",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(item)
});

setSubmitted(true);

};

return (

<div className="page">

  <div className="form-card">

    <h2>📌 Report Lost Item</h2>

    {submitted && (
      <p style={{color:"green"}}>✅ Lost item submitted successfully!</p>
    )}

    <form onSubmit={handleSubmit} className="lost-form">

      <input
        placeholder="📦 Item Name"
        value={itemName}
        onChange={(e)=>setItemName(e.target.value)}
      />

      <textarea
        placeholder="📝 Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      ></textarea>

      <input
        placeholder="📍 Location Lost"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
      />
      <select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
<option value="">Select Category</option>
<option value="Electronics">Electronics</option>
<option value="Documents">Documents</option>
<option value="Accessories">Accessories</option>
<option value="Keys">Keys</option>
<option value="Others">Others</option>
</select>
      {/* IMAGE UPLOAD */}

      <input
        type="file"
        onChange={(e)=>setImage(e.target.files[0])}
      />

      {/* IMAGE PREVIEW */}

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          style={{
            width:"100%",
            marginTop:"10px",
            borderRadius:"8px"
          }}
        />
      )}

      <button type="submit">Submit Report</button>

    </form>

  </div>

</div>

);
}

export default ReportLost;