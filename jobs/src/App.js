import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Container} from "react-bootstrap"
import Search from "./components/Search";
import Category from "./components/Category";

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
            <Link className="category-link" to="/category/business">Business</Link>
            <Link className="category-link" to="/category/customer%20Service">Customer Service</Link>
            <Link className="category-link" to="/category/data">Data</Link>
            <Link className="category-link" to="/category/design">Design</Link>
            <Link className="category-link" to="/category/Software%20Development">Software Development</Link>
            <Link className="category-link" to="/category/marketing">Marketing</Link>
            <Link className="category-link" to="/category/sales">Sales</Link>
            <Link className="category-link" to="/category/Finance%20/%20Legal">Finance / Legal</Link>
            <Link className="category-link" to="/category/human%20Resources">Human Resources</Link>
            <Link className="category-link" to="/category/writing">Writing</Link>
            <Link className="category-link" to="/category/teaching">Teaching</Link>
            <Link className="category-link" to="/category/all%20others">All others</Link>
          </div>
        </div>
        <Route path="/" exact render={(routerProps) => <Homepage {...routerProps}/>} />
        <Route path="/search" exact render={(routerProps) => <Search {...routerProps}/>} />
        <Route path="/category/:name" render={(routerProps) => <Category {...routerProps}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
