import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamsCreate from './streams/StreamCreate';
import StreamsEdit from './streams/StreamEdit';
import StreamsDelete from './streams/StreamDelete';
import StreamsList from './streams/StreamList';
import StreamsShow from './streams/StreamShow';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={StreamsList} />
        <Route path="/streams/new" exact component={StreamsCreate} />
        <Route path="/streams/edit" exact component={StreamsEdit} />
        <Route path="/streams/delete" exact component={StreamsDelete} />
        <Route path="/streams/show" exact component={StreamsShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
