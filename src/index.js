const express = require('express')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('nothing is working right now')
// })

app.use(express.json())

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})