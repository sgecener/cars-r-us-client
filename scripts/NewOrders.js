



export const OrderList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=wheel&_expand=interior&_expand=technology")
    const orders = await fetchResponse.json()

    

    let ordersHTML = ""
  

    const sectionString = orders.map(
        (order) => { 
            const orderPrice = order.wheel.price + order.paint.price + order.technology.price + order.interior.price

            return `<section class='order' name='submit' value='${order.id}' >
        <div>${order.paint.color} car with ${order.wheel.type}, ${order.technology.package}, and ${order.interior.type} cost ${orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}</div>
        </section>`

        }
    )

    ordersHTML += sectionString.join("")


    return ordersHTML
}