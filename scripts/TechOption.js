import { setTechChoice } from "./TransientState.js"



const handleTechChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "tech") {
        setTechChoice(parseInt(event.target.value))
    }
    
}


export const TechOptions = async () => {

        document.addEventListener('change', handleTechChoice)

    const response = await fetch("http://localhost:8088/technologies")
    const techs = await response.json()

    let html = "<select name='tech'>"

    html += "<option value='0'>Pick a technology...</option>"
    
    const techOp = techs.map(
        (tech) => {
          
            return `<option value="${tech.id}">${tech.package}</option>`

        }
    )
    
    html += techOp.join("") 
    html += '</select>'

    return html


}