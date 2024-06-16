import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import useUserRoutes from "./components/routes/UserRoutes";
import useAdminRoutes from "./components/routes/AdminRoutes";
import NotFound from "./components/layout/NotFound";

function App() {
  const userRoutes=useUserRoutes();
  const adminRoutes=useAdminRoutes();
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center"></Toaster>
        <Header></Header>
        <div className="container">
          <Routes>
            {userRoutes}
            {adminRoutes}
            <Route exact path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
