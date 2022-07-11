const LS_KEY = 'saveContacts';

const addToLoacalStorage = contacts => {
  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
};

const getFromLocalStoreage = () => {
  const contacts = localStorage.getItem(LS_KEY);

  if (contacts) {
    return JSON.parse(contacts);
  } else {
    return [];
  }
};

const removeFromLocalStorage = contacts => {
  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
};

export { addToLoacalStorage, getFromLocalStoreage, removeFromLocalStorage };
