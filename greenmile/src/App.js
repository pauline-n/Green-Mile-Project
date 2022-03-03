import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import LoginComponent from './Components/LoginComponent';
import ClerksList from './Components/ClerksList';
import AddClerk from './Components/AddClerk';
import SuppliersList from './Components/SuppliersList';
import SalesDashboard from './Components/SalesDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">SalesDashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/suppliers">Suppliers</Link>
              </li>
              <li>
                <Link to="/clerks">Clerks</Link>
              </li>
              <li>
                <Link to="/addclerk">Add Clerk Form</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <LoginComponent />
            </Route>
            <Route path="/clerks">
              <ClerksList />
            </Route>
            <Route path="/addclerk">
              <AddClerk />
            </Route>
            <Route path="/suppliers">
              <SuppliersList />
            </Route>
            <Route path="/"exact>
              <SalesDashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
