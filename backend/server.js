import express from "express"

import authRoute from "./routes/auth.route.js"
const app = express()
const port = 3000

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})