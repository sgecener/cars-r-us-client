import { setInteriorChoice } from "./TransientState.js"





const handleInteriorChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "interior") {

        setInteriorChoice(parseInt(event.target.value))
    }
    
}


export const InteriorOptions = async () => {

        document.addEventListener('change', handleInteriorChoice)

    const response = await fetch("http://localhost:8088/interiors")
    const carInterior = await response.json()

    let html = "<select name='interior'>"

    html += "<option value='0'>Pick an interior...</option>"
    
    const interiorOp = carInterior.map(
        (interior) => {
          
            return `<option value="${interior.id}">${interior.type}</option>`

        }
    )
    
    html += interiorOp.join("") 
    html += '</select>'

    return html


}