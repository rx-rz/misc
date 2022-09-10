export const getImage = (imageType: string) => {
  const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/biscuit.svg?background=%23f6828c`;
  return imageUrl;
};
