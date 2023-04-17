import { useState } from 'react'
import { useEffect } from 'react'
// create a component called ItemTable that uses itemService.js to fetch data and parses and validates it using parseItem.js and validateItem.js.
// use the created json to render a DataTable component
function ItemTable() {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    itemService.getItems().then((data) => {
      setItems(data.map(parseItem).filter(validateItem));
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataTable items={items} />
      )}
    </div>
  );
}
export default ItemTable;
