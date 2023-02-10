// display guests in the park on the right side of the page. When guest clicked, display where the guest is in the park

import { getGuests } from "./database.js";

const guests = getGuests()

export const Guests = () => {
    let html ="<ul>"
    
    for (const guest of guests ) {
        html += `<ul id="guest--${guest.id}">${guest.name}</ul>`
    }
    
    html += "</ul>"

    return html
}