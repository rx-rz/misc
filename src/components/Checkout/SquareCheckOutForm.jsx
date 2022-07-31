import { ApplePay, CreditCard, GooglePay, PaymentForm } from 'react-square-web-payments-sdk';

const SquareCheckOutForm = ({totalPrice}) => (
  <PaymentForm
    /**
     * Identifies the calling form with a verified application ID generated from
     * the Square Application Dashboard.
     */
    applicationId="sandbox-sq0idb-_sLw28PHDGXO6jpqFI5fiw"
    locationId='LRMWY5V6QXGTH'
    /**
     * Invoked when payment form receives the result of a tokenize generation
     * request. The result will be a valid credit card or wallet token, or an error.
     */
    cardTokenizeResponseReceived={(token, buyer) => {
      console.info({ token, buyer });
    }}
    createPaymentRequest={() => ({
        countryCode: "NG",
        total: {amount: `${totalPrice}`, label: 'Total', pending: false},
        currencyCode: "NGN",
    })}
    /**
     * This function enable the Strong Customer Authentication (SCA) flow
     *
     * We strongly recommend use this function to verify the buyer and reduce
     * the chance of fraudulent transactions.
     */
    createVerificationDetails={() => ({
      amount: `${totalPrice}`,
      billingContact: {
        addressLines: ['123 Main Street', 'Apartment 1'],
        familyName: 'Adeleye',
        givenName: 'Temiloluwa',
        countryCode: 'NG',
        city: 'Abeokuta',
      },
      currencyCode: 'NGN',
      intent: 'CHARGE',
    })}
    /**
     * Identifies the location of the merchant that is taking the payment.
     * Obtained from the Square Application Dashboard - Locations tab.
     */

  >
    <CreditCard />
    <ApplePay/>
    <GooglePay/>
  </PaymentForm>
);

export default SquareCheckOutForm;