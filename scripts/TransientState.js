

const transientState = {
    "paintId": 0,
    "wheelId": 0,
    "technologyId": 0,
    "interiorId": 0
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    
}


export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel

}

export const setTechChoice = (chosenTech) => {
    transientState.techId = chosenTech

}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior

}

export const saveCheckout = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(transientState)

    }
    
    const res = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("saveCheckout")
    document.dispatchEvent(customEvent)

}

