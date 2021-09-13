import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="cont-header">
          <Link to="/">
            <h1>Search Jobs</h1>
          </Link>
        </div>
        <div className="divider">
          <div className="nav-container">
            <Link className="category-link" to="/category/softwareDevelopment">Software Development</Link>
            <Link className="category-link" to="/category/customerService">Customer Service</Link>
            <Link className="category-link" to="/category/design">Design</Link>
            <Link className="category-link" to="/category/marketing">Marketing</Link>
            <Link className="category-link" to="/category/sales">Sales</Link>
            <Link className="category-link" to="/category/business">Business</Link>
            <Link className="category-link" to="/category/financeLegal">Finance / Legal</Link>
            <Link className="category-link" to="/category/humanResources">Human Resources</Link>
            <Link className="category-link" to="/category/writing">Writing</Link>
            <Link className="category-link" to="/category/teaching">Teaching</Link>
            <Link className="category-link" to="/category/medicalHealth">Medical / Health</Link>
          </div>
        </div>
        <Route path="/" exact render={() => <Homepage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
