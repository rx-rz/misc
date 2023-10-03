export const getImage = (seed: string) => {
  const imageUrl: string = `https://api.dicebear.com/7.x/lorelei/svg?seed=${seed}`;
  return imageUrl;
};
