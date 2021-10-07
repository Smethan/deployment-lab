import express from 'express'
import path from 'path'
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname

const app = express();

app.get('/', (req,res) => {
    res.sendFile(new URL('../index.html', import.meta.url).pathname)
})

app.get('/css', (req,res) => {
    res.sendFile(new URL('../index.css', import.meta.url).pathname)
})

const port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log("Server running!")
})