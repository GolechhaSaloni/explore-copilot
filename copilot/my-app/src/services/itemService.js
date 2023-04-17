import axios from 'axios';

// create a client that can be used to make requests to the API "http://localhost:5000/"
function createClient() {
  return axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
  });
}


// a method to get all items
function getAllItems() {
    const client = createClient();
    return client.get('/api/items');
}

// a method to get a single item
function getItem(id) {
    const client = createClient();
    return client.get(`/api/items/${id}`);
}

// a method to create a new item
function createItem(item) {
    const client = createClient();
    return client.post('/api/items', item);
}

// a method to batch create items
function batchCreateItems(items) {
    const client = createClient();
    return client.post('/api/items/batch', items);
}

// export the methods
export { getAllItems, getItem, createItem, batchCreateItems };