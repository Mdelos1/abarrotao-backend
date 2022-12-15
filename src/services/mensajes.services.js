const { Usuario, Mensajes, Tienda } = require("../models");

class MensajesServices {

  static async crearRegistro(body) {
    try {
      const result = await Usuario.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createMensaje(id, body) {
    try {
      const userId = Number(id);
      const { mensaje, tiendaId } = body;
      const result = await Mensajes.create({
        mensaje,
        tiendaId,
        usuarioId: userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getMensaje(id) {
    try {
      const usuario = await Usuario.findOne({where: { id }})
      const result = await Mensajes.findAll({
        where: {usuarioId: usuario.id},
        attributes: {
          exclude: ["tiendaId", "tienda_id", "usuarioId", "usuario_id"],
        },
        include: [
          {
            model: Usuario,
            as: "usuario",
            attributes: ["nombre", "email"]
          },
          {
            model: Tienda,
            as: "tienda",
            attributes: ["nombre", "logo"],
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = MensajesServices;
