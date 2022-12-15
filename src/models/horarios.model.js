const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Horarios = db.define(
  "horarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    horarioInicio: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "horario_inicio"
    },
    horarioFinal: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "horario_finale"
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

module.exports = Horarios;

