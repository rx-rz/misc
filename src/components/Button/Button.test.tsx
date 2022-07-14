import { render, screen } from '@testing-library/react';
import React from 'react'
import Button from './Button';

test('button contains a text and a class name', () => {
    let className: string = "py-2"
    let text: string = "button element"
    let handleClick = () => console.log("lol")
    render(<Button className={className} text={text} handleClick={handleClick}/>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveTextContent(text)
    expect(buttonElement).toHaveClass("py-2")
})

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
