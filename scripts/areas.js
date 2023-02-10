// display areas in the park, when clicked pop uo showing which services are in that area

import { getAreas, getServInDest  } from "./database.js";

const areas = getAreas()
const occupants = getServInDest()

export const Areas = () => {
    let html = "<ul>"

    for (const area of areas) {
        html +=`<ul id="area--${area.id}">${area.name}</ul>`
    }

    html += "</ul>"

    return html
 }

 //function responsible for matching guests to area 

const findGuest = ()
//// matching the guests with the area that they are in
 const areaHosting = () => {
    let guestsInArea = 0

    for (const occupance of occupants)
 }
 document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("area")) {
            const [, areaID] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId))

                    const guestsPresent = areaHosting()

                    window.alert (`${$area.name} currently hosting ${}`)
            }

        }
    }
 )