export const getProductImagesForProductDisplay = (imageType: string | undefined, name: string | undefined) => {
    const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/${name}.svg?background=%2300DBDE` 
    return imageUrl
}