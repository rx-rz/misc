export const getImage = (imageType: string) => {
  const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/biscuit.svg?background=%231EA081`;
  return imageUrl;
};
