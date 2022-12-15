const { Tienda, DatosDeContacto, Horarios } = require("../models");
// const transporter = require("../utils/mailter"); 
// const orderTemplate = require("../templates/newOrder");

class StoreServices {

  static async getTiendas() {
    try {
      const result  = await Tienda.findAll({
        include: [
          {
            model: DatosDeContacto,
            as: "contacto",
            attributes: {
              exclude: ["id", "tiendaId", "tienda_id"]
            }
          },
          {
            model: Horarios,
            as: "horarios",
            attributes: {
              exclude: ["id", "tiendaId", "tienda_id"]
            }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getTienda(id) {
    try {
      const result  = await Tienda.findOne({
        where: { id },
        include: [
          {
            model: DatosDeContacto,
            as: "contacto",
            attributes: {
              exclude: ["id", "tiendaId", "tienda_id"]
            }
          },
          {
            model: Horarios,
            as: "horarios",
            attributes: {
              exclude: ["id", "tiendaId", "tienda_id"]
            }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async crearTienda(body) {
    try {
      // console.log(body)
      const result = await Tienda.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async contacto(body) {
    try {
      const result = await DatosDeContacto.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async postHorarios(body) {
    try {
      const result = await Horarios.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateTienda(id, body) {
    try {
      const tienda = await Tienda.findOne({
        where: { id },
      })
      const result = await tienda.update(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteTienda(id) {
    try {
      const tienda = await Tienda.findOne({
        where: { id },
      });
      const deleteContacto = DatosDeContacto.destroy({
        where: {tienda_id: id},
      });
      const deleteHorarios = Horarios.destroy({
        where: {tienda_id: id},
      });
      const deleteTienda = tienda.destroy();
      // return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateContacto(id, body) {
    try {
      const contactos = await DatosDeContacto.findOne({
        where: { id },
      });
      const result = await contactos.update(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateHorarios(id, body) {
    try {
      const horario = await Horarios.findOne({
        where: { id },
      });
      const result = await horario.update(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteContacto(id) {
    try {
      const contacto = await DatosDeContacto.findOne({
        where: { id },
      })
      const result = await contacto.destroy();
    } catch (error) {
      throw error;
    }
  }
  static async deleteHorarios(id) {
    try {
      const horario = await Horarios.findOne({
        where: { id },
      })
      const result = await horario.destroy();
    } catch (error) {
      throw error;
    }
  }

}

module.exports = StoreServices;
