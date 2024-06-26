var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app = express();
const port = process.env.PORT || 3001;

//middlaware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Middlewares
app.use((request,response,next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'autorizacion, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    //console.log('middleware');
    next();
  });

  //Base Routes
  const votos_campania = require('./routes/votoscampania/votoscampania.routes');


  //Routes
  app.use('/api/votoscampania', votos_campania);
  

app.listen(port, (err) => {

    if (err) throw new Error(err);
  
    console.log(`Servidor corriendo en puerto ${ port }`);
  
  });
  