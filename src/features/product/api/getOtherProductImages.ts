export const getOtherProductImages = (imageType: string): string[] => {
  const promptList = ["korra", "asami", "mako", "bolin"];
  const urlList: string[] = [];
  for (const i of promptList) {
    urlList.push(
      `https://avatars.dicebear.com/api/${imageType}/${i}.svg?background=%2300DBDE`
    );
  }
  return urlList;
};
