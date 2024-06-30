
import { CheckoutButton } from "./CheckoutButton.js"
import { InteriorOptions } from "./InteriorOption.js"
import { OrderList } from "./NewOrders.js"
import { PaintOptions } from "./PaintOption.js"
import { TechOptions } from "./TechOption.js"
import { WheelOptions } from "./WheelOption.js"






const container = document.querySelector('#container')

const render = async () => {

    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const techOptionsHTML = await TechOptions()
    const wheelOptionsHTML = await WheelOptions()
    const buttonHTML = CheckoutButton()
    const checkoutHTML = await OrderList()
    

    const composedHTML = `
        
        <h1>Cars-R-Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__int options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__tech options">
                <h2>Technology</h2>
                ${techOptionsHTML}
            </section>
            
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="checkout">
            ${checkoutHTML}

        </article>
    `

    container.innerHTML = composedHTML

}

document.addEventListener('saveCheckout', render)

render();