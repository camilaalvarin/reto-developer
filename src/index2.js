// const express = require('express')
// const app = express()

// app.use(express.json())

let notes = [
    {
        "id": 1,
        "name": "Camila"

    },
    {
        "id": 2,
        "name": "Deiv"
    },
    {
        "id": 3,
        "name": "Anto rat"
    },
    {
        "id": 56454566,
        "name": "Pat rat"
    },
]

// ---GET
app.get('/', (req, res) => {
    res.send('<h1>Hola Camila!</h1>')
})

app.get('/family', (req, res) => {
    res.json(notes)
})

app.get('/family/:id', (req, res) => {
    const id = req.params.id

    const note = notes.find(x => x.id == id)
    res.status(200).json(note)
})

// --- POST
app.post('/family/notes', (req, res) => {
    const note = req.body;
    console.log(note)

    res.json(note)

})

// ---DELETE
app.delete('/family/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const note = notes.filter(x => x.id != id)
    res.status(200).json(note)
})

const PORT = 3000
app.listen(PORT)