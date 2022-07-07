export const hi = "lol"

// const imageUrl: string = `https://avatars.dicebear.com/api/${imageType}/rococo.svg?background=%2300DBDE` 
const listItems = ['rococo', 'boa', 'tunja', ]

export const getListUrls = (imageType: string | undefined) => {
    const listUrls: string[] = []
    for (const i of listItems){
        listUrls.push(`https://avatars.dicebear.com/api/${imageType}/${i}.svg?background=%2300DBDE` )
    }
    return listUrls
}



