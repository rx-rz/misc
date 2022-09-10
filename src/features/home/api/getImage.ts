export const getImage = (imageType: string) => {
  const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/biscuit.svg?background=%23725BFF`;
  return imageUrl;
};
