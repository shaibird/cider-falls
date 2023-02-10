
// main resources -- guests, areas, services
// how many guests are using which service 
// which service is in what area
// modules? -- database containing info on guests, services, areas. module to determine how many guest are in a specific area. module to determine how many guests are in each lodging opportunity. 
// module to display what services are available 
// module to display each area with a click event to show number of guests 
// module to display total park services and a click event to show where those services can be accessed
//


import { Areas } from "./areas.js"
import { Guests } from "./guests.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="details">
    <section class="blockTop">
        <h2>Park Areas</h2>
            ${Areas()}

    </section>
</article>
    <aside class="aside">
        <h2> Guests </h2>
        ${Guests()}
    </aside>`

    mainContainer.innerHTML =applicationHTML