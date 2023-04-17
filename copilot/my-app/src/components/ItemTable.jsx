// create a component called ItemTable that uses itemService.js to fetch data and parses and validates it using parseItem.js and validateItem.js.
// use the created json to render a DataTable component

import { getAllItems } from './services/itemService';

export default function ItemTable() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await getAllItems();
            setItems(data);
        })();
    }, []);
    const attributesName = Object.keys(items[0]);
    return (
        <div>
            <DataTable data={items} attributesName={attributesName} />
        </div>
    );
}