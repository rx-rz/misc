const product_cards = document.getElementsByClassName("product_card")
console.log(product_cards)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry)
        }
    })
})

for (let i=0; i <product_cards.length; i++){
    observer.observe(product_cards[i])
    console.log(product_cards[i])
}