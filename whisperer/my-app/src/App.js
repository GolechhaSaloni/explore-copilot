// create a component to stitch together all the components from "./components"
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ImportItems from './components/ImportItems';
import ItemTable from './components/ItemTable';
import Item from './components/Item';

function  App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ItemTable} />
        <Route path="/create" component={CreateItem} />
        <Route path="/import" component={ImportItems} />
        <Route path="/item/:id" component={Item} />
      </Switch>
    </Router>
  );
}
export default App;

