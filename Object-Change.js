const b = [
    {id: 1, staus: "good"},
    {id: 2, staus: "good"},
    {id: 3, staus: "good"},
    {id: 4, staus: "good"},
    {id: 5, staus: "good"},
    {id: 6, staus: "good"},
    {id: 7, staus: "good"},
    {id: 8, staus: "good"},
    {id: 9, staus: "good"},
    {id: 10, staus: "good"},
]


Object.entries(b).map((ele) => {
    for (const iterator of ele) {
        if (iterator.id % 2 === 0 && iterator.staus === "good") {
            console.log(iterator.id,iterator.staus = "bad");
        }
    }
})
