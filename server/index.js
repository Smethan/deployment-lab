import express from 'express'
import path from 'path'
import { URL, fileURLToPath, pathToFileURL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname
const __filename = fileURLToPath(import.meta.url);

const app = express();

app.get('/', (req,res) => {
    res.sendFile(new URL('../index.html', import.meta.url).pathname)
})

app.use('/css', express.static(path.join(__dirname, '../index.css')))

const port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log("Server running!")
})