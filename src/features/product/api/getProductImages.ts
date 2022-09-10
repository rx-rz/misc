export const getProductImages = (imageType: string | undefined, name: string | undefined) => {
    const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/${name}.svg?background=%23f6828c` 
    return imageUrl
}