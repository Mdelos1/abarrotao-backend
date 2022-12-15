const express = require("express");
const router = express.Router();
const { 
  registro,
  crearMensaje,
  verDatosDelUsuario,
} = require("../controllers");

// Exitos 

router.post("/usuario", registro);

router.post("/usuario/:id/mensajes", crearMensaje);

router.get("/usuario/:id", verDatosDelUsuario);


module.exports = router;
