const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Tienda = db.define(
  "tienda",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagenesCorporativas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      field: "imagenes_corporativas"
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Tienda;



