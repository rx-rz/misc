

export const getProductImages = (imageType: string | undefined) => {
    const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/rococo.svg?background=%2300DBDE` 
    return imageUrl
}