// create a client that can be used to make requests to the API "http://localhost:5000/"
function  createClient() {
  return new ApolloClient({
    uri: "http://localhost:5000/",
    cache: new InMemoryCache(),
  });
}

// a method to get all items
function  getAll() {
    const client = createClient();
  return client.query({
    query: gql`
      query {
        items {
          id
          name
          price
        }
      }
    `,
  });
}

// a method to get a single item
function  get(id) {
    const client = createClient();
  return client.query({
    query: gql`
      query {
        item(id: "${id}") {
          id
          name
          price
        }
      }
    `,
  });
}

// a method to create a new item
function  create(item) {
    const client = createClient();
  return client.mutate({
    mutation: gql`
      mutation {
        createItem(item: { name: "${item.name}", price: ${item.price} }) {
          id
          name
          price
        }
      }
    `,
  });
}

// a method to batch create items
function  batchCreate(items) {
    const client = createClient();
  return client.mutate({
    mutation: gql`
      mutation {
        batchCreateItems(items: ${JSON.stringify(items)}) {
          id
          name
          price
        }
      }
    `,
  });
}
