const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const DatosDeContacto = db.define(
  "datosDeContacto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    tiendaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tienda_id",
    }
  }, {
    timestamps: false,
  }
);

module.exports = DatosDeContacto;

