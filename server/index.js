const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { response } = require('express');
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hzikk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('doctors'));
app.use(fileUpload());


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const appointmentsCollection = client.db("doctorsPortal").collection("appointments");
  const doctorsCollection = client.db("doctorsPortal").collection("doctors");

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

  app.get('/appointments', (req, res) => {
    appointmentsCollection.find({})
    .toArray((err, document) => {
      res.send(document);
      console.log(document);
    })
  })

  app.post('/addADoctior', (req, res) => {
    const file = req.files.file;
    const doctorInfo = req.body;
    const name = req.body.name;
    const email = req.body.email;
    
    file.mv(`${__dirname}/doctors/${file.name}`, err=> {
      if(err) {
        console.log(err);
        return res.status(500).send({msg: 'Faild to upload Image'});
      }

      const newFile = {img: file.name};
      const newDoctorIfo = {...doctorInfo, ...newFile};
      doctorsCollection.insertOne(newDoctorIfo)
      .then(result => {
        return res.send({name: file.name, path: `/${file.name}`});
      })
    })
  })

  app.get('/doctors', (req, res) => {
    doctorsCollection.find({})
    .toArray((err, document) => {
      res.send(document);
      console.log(document);
    })
  })


  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})