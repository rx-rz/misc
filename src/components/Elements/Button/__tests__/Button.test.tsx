import {  render, screen } from "@testing-library/react"
import { Button } from "../Button"
  
test('all button properties should display correctly', async () => {
    const children = <p>Test</p>
    const handleClick = jest.fn()
    render(<Button children={children} handleClick={handleClick} className="px-2" text="Text Content"/>)
    const button = screen.getByText(/Text content/i)
    expect(button).toHaveClass("px-2")
    expect(button).toHaveTextContent(/Test/)
    expect(button).toHaveTextContent(/text content/i)
})

