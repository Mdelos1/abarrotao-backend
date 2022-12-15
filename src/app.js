const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
const initModels = require("./models/initModels");
const { tiendaRoutes, menasajesRoutes } = require("./routes");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels()

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  
app.get('/', (req, res) => {
  res.status(200).json('Respuesta exitosa')
});

app.use("/api/v1", tiendaRoutes);
app.use("/api/v1", menasajesRoutes);
  
app.use(handleError);
module.exports = app;