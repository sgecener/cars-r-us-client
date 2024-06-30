import { setWheelChoice } from "./TransientState.js"



const handleWheelChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "wheel") {

        setWheelChoice(parseInt(event.target.value))
    
    }
}


export const WheelOptions = async () => {

        document.addEventListener('change', handleWheelChoice)

    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let html = "<select name='wheel'>"

    html += "<option value='0'>Pick a wheel...</option>"
    
    const wheelOp = wheels.map(
        (wheel) => {
          
            return `<option value="${wheel.id}">${wheel.type}</option>`

        }
    )
    
    html += wheelOp.join("") 
    html += '</select>'

    return html


}