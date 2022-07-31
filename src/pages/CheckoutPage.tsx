import SquareCheckOutForm from 'src/components/Checkout/SquareCheckOutForm'
import { useStateContext } from 'src/context/countContext'
import Checkout from 'src/features/checkout/Checkout'

export default function CheckoutPage() {
  const {totalPrice} = useStateContext()!
  return (
    <div>
        <Checkout/>
        <SquareCheckOutForm totalPrice={totalPrice}/>
    </div>
  )
}
