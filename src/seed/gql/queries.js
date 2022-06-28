/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const PROCESS = `
{
  process {
    id
    n
    k
    result
    user {
      id
    }
  }
}
`;

export const SET_PROCESS = `
mutation Set(
  $id: Int!,
  $n: Int,
  $k: Int,
  $result: Int,
  $user: Int,
)
{
  setProcess(
    id: $id,
    user: $user,
    n: $n,
    k: $k,
    result: $result,
  ) {
    process {
      id
      n
      k
      result
      user {
        id
      }
    }
  }
}
`;

export const SAVE_PROCESS = `
mutation Save(
  $n: Int!,
  $k: Int!,
  $result: Int!,
  $user: Int!,
)
{
  saveProcess(
    user: $user,
    n: $n,
    k: $k,
    result: $result,
  ) {
    process {
      id
    }
  }
}
`;

export const DELETE_PROCESS = `
mutation Delete($id: Int!)
{
  deleteProcess(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;