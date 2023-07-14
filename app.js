const express = require('express');
const cors = require('cors')

const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({origin: "http://localhost:5500"}))


app.use('/api/products', require('./routers/product.route'))

// testing api
app.get("/", async(req,res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
})

const port = process.env.port | 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})