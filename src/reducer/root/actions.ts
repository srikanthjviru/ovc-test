export const ROOT = '@root';
export const SET_USERS = '@root/SET_USERS';

export const fetchUsers = () => async (dispatch: any, getState: any) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  await dispatch({ type: SET_USERS, users });
}
