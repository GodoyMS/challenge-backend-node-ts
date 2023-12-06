export const mutation = `
mutation {
    AddProducts(
      accountId: "656f62e292c92272e7071d02"
      products: [
        { name: "Product 11",sku:"SKU1"},
        { name: "Product 12", sku:"SKU2"},
        { name: "Product 13", sku:"SKU3"}
      ]
    ) {
      products {
        _id
        name
        account
        sku
        createdAt
        updatedAt
      }
    }
  }
`;

export const query = [
  `
  query {
    Products(params:{page: 1, pageSize: 10, search: "SKU1"}) {
      _id
      name
      sku
      account{
        name
        email
        updatedAt
        createdAt
        _id
      }    
     
    
      createdAt
      updatedAt
    }
  }
`,
  `
  query {
    Products(params:{page: 1, pageSize: 10, search: ""}) {
      _id
      name
      sku
      account{
        name
        email
        updatedAt
        createdAt
        _id
      }    
     
    
      createdAt
      updatedAt
    }
  }
`,
  `
  query {
    Products(params:{search: ""}) {
      _id
      name
      sku
      account{
        name
        email
        updatedAt
        createdAt
        _id
      }    
     
    
      createdAt
      updatedAt
    }
  }
`,
];
