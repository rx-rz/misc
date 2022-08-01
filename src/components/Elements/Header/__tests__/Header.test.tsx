import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

test("header element should render children elements correctly", () => {
    const children = <p>Test</p>
    render(<Header children={children}/>)
    const header = screen.getByTestId("header")
    expect(header).toHaveTextContent("Test")
})