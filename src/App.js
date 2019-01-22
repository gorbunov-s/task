import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainMenu from './components/MainMenu.js';
import SideMenu from './components/SideMenu.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <header>
            <MainMenu />
          </header>
          <Switch>
						<Route exact path="/" component={Home} />
						<Route path="/items" component={Items} />
						<Route render={({ match }) => ( match && <Redirect to="/" /> )} />
					</Switch>
        </div>

        <footer className="App-footer">
          <p className="footerDescription">
            Built using scalajs/scalajs-react/scalacss
          </p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="HomePage_Style-0001">ScalaJS-React Template</div>;
}

function Items(props) {
  return (
    <div className="ItemsPage_Style-0001">
      <div className="ItemsPage_Style-0002">
        <SideMenu />
      </div>

      <div className="ItemsPage_Style-0003">
        <Route path={`${props.match.path}/:itemId`} component={Item} />
      </div>
    </div>
  );
}

function Item({ match }) {
  if (match.params.itemId === 'info') {
    return <div>Items Root Page</div>;
  }

  return <div>This is {match.params.itemId} Page</div>;
}

export default App;
