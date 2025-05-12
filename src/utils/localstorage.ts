export const setLocalStorage = (name: string, items: any): void => {
  localStorage.setItem(name, JSON.stringify(items));
};

export const getLocalStorage = (name: string): any[] => {
  const data = localStorage.getItem(name);

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [];
  }
};
