const express = require('express')
const app = express()
const port = 8080

app.get('/tin-tuc', (req, res) => {
    res.send('Tin tuc hom nay')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})