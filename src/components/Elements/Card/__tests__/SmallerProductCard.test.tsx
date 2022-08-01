import {  render, screen } from "@testing-library/react"
import { SmallerProductCard } from "../SmallerProductCard/SmallerProductCard"
  
test('all button properties should display correctly', async () => {
    
    const price =200
    const name = "micah"
    render(<SmallerProductCard imageUrl="" name={name} price={price}/>)
    const button = screen.getByRole("article")
    expect(button).toHaveTextContent(`${price}`)
    expect(button).toHaveTextContent(`${name}`)
})