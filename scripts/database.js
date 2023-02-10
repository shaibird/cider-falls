const database = {
    guests: [{
        id: 1,
        name: "Scout Masters",
        currentLocation: 2,
    }, {
        id: 2,
        name: "Forrest Green",
        currentLocation: 4,
    }, {
        id: 3,
        name: "Byrd Soaring",
        currentLocation: 5,
    }],

    areas: [{
        id: 1,
        name: "Chamfort River",
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trails",
    }, {
        id: 3,
        name: "Lodge",
    }, {
        id: 4,
        name: "Gander River Nature Preserve",
    }, {
        id: 5,
        name: "Campgrounds",
    }, {
        id: 6,
        name: "Pine Bluffs Trails",
    },
    ],
    services: [{
        id: 1,
        type: "Lodging",

    },
    {
        id: 2,
        type: "Hiking",
    },
    {
        id: 3,
        type: "Rafting",
    },
    {
        id: 4,
        type: "Canoeing",
    },
    {
        id: 5,
        type: "Fishing",

    },
    {
        id: 6,
        type: "Picnicking",
    }
        , {
        id: 7,
        type: "Information",
    },
    {
        id: 8,
        type: "Rock Climbing",
    },
    {
        id: 9,
        type: "Zip Lines",
    },
    {
        id: 11,
        type: "Food Vendors",
    },
    {
        id: 10,
        type: "Parking",
    }],
    ServInDest: [
        {
        id: 1,
        serId: 3,
        desId: 1
        },
        {
        id: 2,
        serId: 4,
        desId: 1
        }, 
        {
        id: 3,
        serId: 5,
        desId: 1
        },
        {
        id: 4,
        serId: 8,
        desId: 2
        },
        {
        id: 5,
        serId: 6,
        desId: 2
        },
        {
        id: 6,
        serId: 2,
        desId: 2
        },
        {
        id: 7,
        serId: 6,
        desId: 3
        },
        {
        id: 8,
        serId: 7,
        desId: 3
            },
        {
        id: 9,
        serId: 10,
        desId: 3
        },
        {
        id: 10,
        serId: 2,
        desId: 4
        },
        {
        id: 11,
        serId:5,
        desId: 4
        },
        {
        id: 12,
        serId: 7,
        desId: 5
        },
        {
        id: 13,
        serId: 1,
        desId: 5
        },
        {
        id: 14,
        serId: 10,
        desId: 5
        },
        {
        id: 15,
        serId: 2,
        desId: 6
        },
        {
        id: 15,
        serId: 2,
        desId: 6
        },
        {
        id: 15,
        serId: 9,
        desId: 6
        },
    ]

}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServInDest = () => {
    return database.ServInDest.map(serviceindest => ({...serviceindest}))
}