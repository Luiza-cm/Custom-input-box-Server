const express = require('express')
const app = express()
const cors = require('cors')
const port = 3030

app.use(cors())
app.use(express.json());

const data = [
    {id: 1, text: 'Maria Rita', value: 1},
    {id: 2, text: 'Joao Costa', value: 2},
    {id: 3, text: 'Felipe Estumano', value: 3},
    {id: 4, text: 'Joana Farias', value: 4},
    {id: 5, text: 'Jorge Venancio', value: 5},
    {id: 6, text: 'Olivia Rhye', value: 5},
    {id: 7, text: 'Phoenix Baker', value: 5},
    {id: 8, text: 'Lana Steiner', value: 5},
    {id: 9, text: 'Demi Wilkinson', value: 5},
    {id: 10, text: 'Candice Wu', value: 5},
    {id: 11, text: 'Natali Craig', value: 5},
    {id: 12, text: 'Drew Cano', value: 5},
  ]

app.get('/', (req, res) => {
  res.json(data)
})

app.get('/search', (req, res) => {
  const {search_field} = req.query
  const responseData = data.filter((item)=>{
    return item.text.toLowerCase().search(search_field.toLowerCase())!=-1
  })
  res.json(responseData)
})

app.post('/new', (req, res) => {
  const { text } = req.body
  data.push({
    id: data.length+1,
    text,
    value: data.length+1
  })
  res.json(data)
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})