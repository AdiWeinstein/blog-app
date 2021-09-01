
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFoundPage from './NotFoundPage';

function App() {
  const title = 'welcome'
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path = '/' exact>
              <Home />
            </Route>
            <Route path = '/create' exact>
              <Create />
            </Route>
            <Route path = '/blogs/:id' exact>
              <BlogDetails />
            </Route>
            <Route path = '*' exact>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
