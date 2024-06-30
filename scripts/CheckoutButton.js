import { saveCheckout } from "./TransientState.js"


const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submitOrder") {

        saveCheckout()
    }
}


export const CheckoutButton = () => {

    document.addEventListener("click", handleOrderSubmission)

    let html = "<div><button id='submitOrder'>Checkout</button></div>"
    
    return html
    
}