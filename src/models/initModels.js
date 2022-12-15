const { Usuario, Mensajes, Horarios, Tienda, DatosDeContacto } = require("./index");

const initModels = () => {

  // U:M

  DatosDeContacto.belongsTo(Tienda, { as: "datosContacto", foreignKey: "tienda_id" })
  Tienda.hasMany(DatosDeContacto, { as: "contacto", foreignKey: "tiendaId" })

  Horarios.belongsTo(Tienda, { as: "tipos de horario", foreignKey: "tienda_id" })
  Tienda.hasMany(Horarios, { as: "horarios", foreignKey: "tienda_id" })

  Mensajes.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id" })
  Usuario.hasMany(Mensajes, { as: "Mensajes", foreignKey: "usuario_id" })
  
  Mensajes.belongsTo(Tienda, { as: "tienda", foreignKey: "tienda_id" })
  Tienda.hasMany(Mensajes, { as: "tienda mensajes", foreignKey: "tienda_id" })
  //U:M
  


};

module.exports = initModels;