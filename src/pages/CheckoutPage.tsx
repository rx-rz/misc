import React from 'react'
import {PaypalCheckOutButton} from 'src/components/Checkout/PaypalCheckOutButton'
import Checkout from 'src/features/checkout/Checkout'

export default function CheckoutPage() {
  return (
    <div>
        <Checkout/>
        <PaypalCheckOutButton/>
    </div>
  )
}
