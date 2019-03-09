const express = require('express')
const bodyParser = require('body-parser');
const methodOverride=require("method-override")
const path = require('path')
const app = express()
const port = 3000

/* import routes */
const bukuRouter = require("./routes/bukuRouter")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({
    limit: '8mb',
}));

app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routing
app.use("/", bukuRouter)
app.get("/add", bukuRouter)
app.post("/processAdd", bukuRouter)
app.get("/modify", bukuRouter)
app.put("/processModify/:id", bukuRouter)
app.delete("/processDelete/:id", bukuRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))