export const getProductImagesForProductDisplay = (imageType: string | undefined, name: string | undefined) => {
    const imageUrl: string = `https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`;
    return imageUrl
}