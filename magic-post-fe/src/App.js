import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewOrder from "./pages/ViewOrder/ViewOrder";
import Login from "./pages/login/login";
import Manager from "./pages/manager/Manager";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<ViewOrder />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
