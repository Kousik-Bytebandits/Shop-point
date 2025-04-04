import { Routes, Route } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightContainer from "./RightContainer";
import Orders from "./Orders";
import ProductGrid from "./ProductGrid";
const MainContainer = () => {
  return (
    <div className="main-container">
      <LeftPanel />  {/* Left panel remains fixed */}
      <div className="right-panel"> {/* This section updates */}
        <Routes>
          <Route path="/" element={<RightContainer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/productgrid" element={<ProductGrid/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default MainContainer;
