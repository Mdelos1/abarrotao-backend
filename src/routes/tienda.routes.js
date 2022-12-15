const express = require("express");
const router = express.Router();
const { 
  crearTienda, 
  verTiendas, 
  verTienda,
  actualizarTienda, 
  eliminarTienda,
  crearContacto,
  crearHorarios,
  atualizarContacto,
  atualizarHorarios,
  deleteContacto,
  deleteHorarios,
} = require("../controllers");

// Exitos 

router.post("/tienda", crearTienda);

router.get("/tienda", verTiendas);

router.get("/tienda/:id", verTienda);

router.patch("/tienda/:id", actualizarTienda);

router.delete("/tienda/:id", eliminarTienda);


// Info tienda
router.post("/tienda/contacto", crearContacto);

router.post("/tienda/horarios", crearHorarios);


router.patch("/tienda/contacto/:idContacto", atualizarContacto);

router.patch("/tienda/horarios/:idHorario", atualizarHorarios);

router.delete("/tienda/contacto/:idContacto", deleteContacto);

router.delete("/tienda/horarios/:idHorario", deleteHorarios);


module.exports = router;
