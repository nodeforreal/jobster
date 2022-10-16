export const addUserToLocalStorage = (value) => {
  localStorage.setItem('user', JSON.stringify(value));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = (key = "user") => {
  if (!localStorage.getItem(key)) {
    localStorage.removeItem(key);
    return null;
  }
  return JSON.parse(localStorage.getItem(key));
};
