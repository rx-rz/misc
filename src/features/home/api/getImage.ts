export const getImage = (imageType: string) => {
  const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/brouhaha.svg?background=%231EA081`;
  return imageUrl;
};
