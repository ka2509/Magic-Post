import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewOrder from "./pages/ViewOrder/ViewOrder";
import Login from "./pages/login/login";
import Leader from "./pages/manager/Manager";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateOrder from "./component/CreateOrder/CreateOrder";
import "./App.css"
import ManageOrder from "./component/ManageOrder/ManageOrder";
import Admin from "./pages/AdminPage/Admin";
import StaffPage from "./pages/StaffPage/StaffPage";
import OrderDetails from "./component/OrderDetails/OrderDetails";
import OrderState from "./component/OrderState/OrderState";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<ViewOrder />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manager" element={<Admin />} /> {/* * */}
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/dashboard/create-order" element={<CreateOrder />} />
        <Route path="/dashboard/order" element={<ManageOrder />} />
        <Route path="/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/orderState/:orderId" element={<OrderState />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
