import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ClaimItem from "./pages/ClaimItem";
import Home from "./pages/Home";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import Admin from "./pages/Admin";
import ClaimStatus from "./pages/ClaimStatus";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/reportlost" element={<ReportLost />} />

        <Route path="/reportfound" element={<ReportFound />} />

        <Route path="/lostitems" element={<LostItems />} />

        <Route path="/founditems" element={<FoundItems />} />

        <Route path="/claimitem" element={<ClaimItem />} />

        <Route path="/admin" element={<Admin/>}/>

        <Route path="/claim-status" element={<ClaimStatus />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;