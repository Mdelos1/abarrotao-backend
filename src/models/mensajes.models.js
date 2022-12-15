const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Mensajes = db.define(
  "mensajes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tiendaId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      field: "tienda_id"
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "usuario_id",
    }
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

module.exports = Mensajes;