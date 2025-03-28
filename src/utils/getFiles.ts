export const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

export const getDataScreenImageUrl = (name: string) => {
  return new URL(`../views/data-screen/assets/${name}`, import.meta.url).href;
};
