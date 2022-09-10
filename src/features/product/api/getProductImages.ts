export const getProductImages = (imageType: string | undefined, name: string | undefined) => {
    const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/${name}.svg?background=%231EA081` 
    return imageUrl
}