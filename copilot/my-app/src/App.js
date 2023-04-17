// create a component to stitch together all the components from "/src/components"

import React, { useState } from 'react';
import CreateItem from './components/CreateItem';
import ImportItems from './components/ImportItems';
import ItemTable from './components/ItemTable';

function App() {
  const [showImportItems, setShowImportItems] = useState(false);
  return (
   <div className="App">
    <div className="container">
      <CreateItem setShowImportItems={setShowImportItems}/>
      {showImportItems && <ImportItems />}
      </div>
      <ItemTable/>
    </div>
  );
}



export default App;
