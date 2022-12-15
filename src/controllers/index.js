const { 
  verTienda, 
  verTiendas, 
  crearTienda, 
  eliminarTienda, 
  actualizarTienda,
  crearContacto,
  crearHorarios,
  atualizarContacto,
  atualizarHorarios,
  deleteContacto,
  deleteHorarios,
} = require("./tienda.contronllers");

const {   
  registro,
  crearMensaje, 
  verDatosDelUsuario,
} = require("./mensajes.controllers");


module.exports = {
  verTienda,
  verTiendas,
  crearTienda,
  actualizarTienda,
  eliminarTienda,
  crearContacto,
  crearHorarios,
  atualizarContacto,
  atualizarHorarios,
  deleteContacto,
  deleteHorarios,
  registro,
  crearMensaje,
  verDatosDelUsuario,
}