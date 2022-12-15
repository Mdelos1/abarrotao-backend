const { MensajesServices } = require("../services");

const registro = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await MensajesServices.crearRegistro(body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}

const crearMensaje = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await MensajesServices.createMensaje(id, body);
    res.status(201).json(result);

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const verDatosDelUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await MensajesServices.getMensaje(id);
    res.json(result);

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};


module.exports = {
  registro,
  crearMensaje,
  verDatosDelUsuario,
};