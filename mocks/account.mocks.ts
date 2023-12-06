export const mutation = `
mutation {
    AddAccount(user:{name: "Godoy",email:"godoyliam.dev@gmail.com"}) {
      _id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

export const query = [
  `
  query {
    Accounts(params:{page: 1, pageSize: 10, search: "Godoy"}) {
          _id
          name
          email
          createdAt
          updatedAt
        }
      }
`,
  `
   query {
     Accounts(params:{page: 1, pageSize: 10, search: ""}) {
         _id
         name
         email
         createdAt
         updatedAt
    }
  }
`,
  `
   query {
      Accounts(params:{ search: "Godoy"}) {
         _id
         name
         email
         createdAt
         updatedAt
    }
  }
`,
];
