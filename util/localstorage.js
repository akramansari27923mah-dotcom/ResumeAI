export const saveInLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
export const saveInSessionStorage = (name, data) => {
  sessionStorage.setItem(name, data);
};
export const removeFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};

export const getFormLocalStorage = (dataName) => {
  const data = JSON.parse(localStorage.getItem(dataName));
  return data;
};
