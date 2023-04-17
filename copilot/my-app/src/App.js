// create a component to stitch together all the components from "/src/components"

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ImportItems from './components/ImportItems';
import ItemTable from './components/ItemTable';
import Item from './components/Item';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/items/:id">
          <Item />
        </Route>
        <Route path="/items">
          <ItemTable />
        </Route>
        <Route path="/import">
          <ImportItems />
        </Route>
        <Route path="/create">
          <CreateItem />
        </Route>
        <Route path="/">
          <ItemTable />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
