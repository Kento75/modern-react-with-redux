import React from 'react';
import {Router, Route} from 'react-router-dom';

import history from '../history';

import Header from './Header';

import StreamsCreate from './streams/StreamCreate';
import StreamsEdit from './streams/StreamEdit';
import StreamsDelete from './streams/StreamDelete';
import StreamsList from './streams/StreamList';
import StreamsShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamsList} />
          <Route path="/streams/new" exact component={StreamsCreate} />
          <Route path="/streams/edit/:id" exact component={StreamsEdit} />
          <Route path="/streams/delete/:id" exact component={StreamsDelete} />
          <Route path="/streams/show" exact component={StreamsShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
