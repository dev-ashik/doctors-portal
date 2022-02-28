const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hzikk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const appointmentsCollection = client.db("doctorsPortal").collection("appointments");

  app.post('/addAppointment', (req, res) =>{
      const appointment = req.body;
      appointmentsCollection.insertOne(appointment)
      .then(result => {
          res.send(result.acknowledged);
      })
  })


  app.post('/addAppointmentsByDate', (req, res) =>{
    const date = req.body;
    console.log(date.date);
    appointmentsCollection.find({date: date.date})
    .toArray((err, document) => {
        res.send(document);
        console.log("document", document);
    })
})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})