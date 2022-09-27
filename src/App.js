// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* <Button variant="primary">Primary</Button>
      <br />
      <br /> */}
      <Header title="My Todos List" searchBar={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
