import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewOrder from "./pages/ViewOrder/ViewOrder";
import Login from "./pages/login/login";
import Manager from "./pages/manager/Manager";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateOrder from "./component/CreateOrder/CreateOrder";
import "./App.css"
import ManageOrder from "./component/ManageOrder/ManageOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<ViewOrder />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-order" element={<CreateOrder />} />
        <Route path="/dashboard/order" element={<ManageOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
