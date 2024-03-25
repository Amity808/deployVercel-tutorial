const express = require('express');


const app = express();

app.use(express.json())


const port = 3000

app.set('view engine', 'ejs')
app.set('port', port)



app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/vercel', (req, res) => {
    res.send("yes we are on vercel")
})

app.listen(3000, function() {
    console.log("server started on port 3000")
})
