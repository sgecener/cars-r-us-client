import { setPaintChoice } from "./TransientState.js"






const handlePaintChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "paint") {
        setPaintChoice(parseInt(event.target.value))
    }
    
}


export const PaintOptions = async () => {

        document.addEventListener('change', handlePaintChoice)

    const response = await fetch("http://localhost:8088/paints")
    const paintJob = await response.json()

    let html = "<select name='paint'>"

    html += "<option value='0'>Pick a paint...</option>"
    
    const paintOp = paintJob.map(
        (paint) => {
          
            return `<option value="${paint.id}">${paint.color}</option>`

        }
    )
    
    html += paintOp.join("") 
    html += '</select>'

    return html


}