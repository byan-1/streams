import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/new" exact={true} component={StreamCreate} />
          <Route path="/streams/edit/:id" exact={true} component={StreamEdit} />
          <Route path="/streams/delete/:id" exact={true} component={StreamDelete} />
          <Route path="/streams/:id" exact={true} component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
