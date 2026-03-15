const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* DATA STORAGE */

let lostItems = [];
let foundItems = [];
let claims = [];

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* REPORT LOST ITEM */

app.post("/report-lost", (req, res) => {

  const item = req.body;

  lostItems.push(item);

  res.json({ message: "Lost item reported", data: item });

});

/* GET LOST ITEMS */

app.get("/lost-items", (req, res) => {

  res.json(lostItems);

});

/* REPORT FOUND ITEM */

app.post("/report-found", (req, res) => {

  const item = req.body;

  foundItems.push(item);

  res.json({ message: "Found item reported", data: item });

});

/* GET FOUND ITEMS */

app.get("/found-items", (req, res) => {

  res.json(foundItems);

});
app.post("/delete-item",(req,res)=>{

const {index} = req.body;

lostItems.splice(index,1);

res.json({message:"Item resolved"});

});
/* CLAIM ITEM */

app.post("/claim-item", (req, res) => {

  const claim = {
    ...req.body,
    status: "Pending"
  };

  claims.push(claim);

  res.json({ message: "Claim submitted", data: claim });

});



app.post("/update-claim", (req, res) => {

  const { index, status } = req.body;

  if (claims[index]) {
    claims[index].status = status;
  }

  res.json({ message: "Claim updated" });

});

/* GET CLAIMS */

app.get("/claims", (req, res) => {

  res.json(claims);

});

/* SERVER */
/* ADMIN DASHBOARD DATA */

app.get("/admin-data", (req, res) => {

  res.json({
    lostItems,
    foundItems,
    claims
  });

});





app.listen(5000, () => {
  console.log("Server running on port 5000");
});