import {render as rtlRender} from '@testing-library/react'
import {StateContextProvider} from 'src/context/countContext'

function render(ui, {quantity = 0, ...options} = {}) {
  const Wrapper = ({children}) => (
    <StateContextProvider initialQuantity={quantity}>{children}</StateContextProvider>
  )
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render}
