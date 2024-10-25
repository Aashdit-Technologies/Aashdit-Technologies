import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardAll from "./components/dashboardall/DashboardAll"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ForecastLogin from "./components/ForecastLogin";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <DashboardAll/> */}
      <Router>
        <Routes>
          <Route path="/" element={<ForecastLogin />} />
          <Route path="/dashboard" element={<Sidebar />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
