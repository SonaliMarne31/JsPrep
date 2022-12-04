import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const port = 5000
let data = ''

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

async function getCharacters () {
    let response = await fetch(`https://www.breakingbadapi.com/api/characters`)
    let rData = await response.json()
    data = rData
};

app.get('/api', (req, res) => {
    getCharacters();
    res.json({data})
})

app.post('/api', (req, res) => {
    res.json({data})
})

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})

