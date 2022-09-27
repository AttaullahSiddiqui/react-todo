// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import {About} from "./pages/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Todos />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
