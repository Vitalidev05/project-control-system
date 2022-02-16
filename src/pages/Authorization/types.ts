export type Props = {
  isAuth: boolean;
};

export enum URLS {
  getUserData = 'localhost:8080/users',
  postUser = 'localhost:8080/users',
  updateUser = 'localhost:8080/users',
  deleteUser = 'localhost:8080/users'
}
