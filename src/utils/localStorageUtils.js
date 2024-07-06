const set = (key, value, expiry = 24 * 60 * 60, setExpire = true) => {
  if (!(window && window.localStorage)) return;
  const finalObj = {
    value,
    createdAt: new Date().getTime(),
  };

  if (setExpire) {
    finalObj.expiry = expiry * 1000;
  }

  window.localStorage.setItem(key, JSON.stringify(finalObj));
};

const deleteItem = (key) => {
  if (!(window && window.localStorage)) return null;
  return window.localStorage.removeItem(key);
};

const get = (key, checkExpire = true) => {
  if (!(window && window.localStorage)) return null;
  const stringifiedObj = window.localStorage.getItem(key);
  if (!stringifiedObj) return null;
  const finalObj = JSON.parse(stringifiedObj);
  if (!checkExpire) {
    return finalObj.value;
  }
  if (finalObj.createdAt + finalObj.expiry > new Date().getTime()) {
    return finalObj.value;
  }
  deleteItem(key);
  return null;
};

export const localStorage = {
  set,
  get,
  deleteItem,
};
