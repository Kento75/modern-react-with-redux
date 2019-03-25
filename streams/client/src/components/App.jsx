import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to="/">Navigate to Page One</Link>;
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
