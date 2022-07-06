type ImageProps = {
    imageType: string
}

export const getImage = ({imageType}: ImageProps) => {
    const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/${imageType}.svg?background=%23FF3CAC` 
    return imageUrl
}