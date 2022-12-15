const { StoreServices } = require("../services");

const verTiendas = async (req, res, next) => {
  try {
    const result = await StoreServices.getTiendas();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}

const crearTienda = async (req, res, next) => {
  try {
    const body = req.body;
    // console.log(body)
    const result = await StoreServices.crearTienda(body);
    res.status(201).json(result);

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const verTienda = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await StoreServices.getTienda(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}

const actualizarTienda = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await StoreServices.updateTienda(id, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const eliminarTienda = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await StoreServices.deleteTienda(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const crearContacto = async (req, res, next) => {
  try {
    const body = req.body
    // console.log(body)
    const result = await StoreServices.contacto(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const crearHorarios = async (req, res, next) => {
  try {
    const body = req.body
    const result = await StoreServices.postHorarios(body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const atualizarContacto = async (req, res, next) => {
  try { 
    const { idContacto } = req.params;
    const body = req.body
    const result = await StoreServices.updateContacto(idContacto, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const atualizarHorarios = async (req, res, next) => {
  try {
    const { idHorario } = req.params;
    const body = req.body
    const result = await StoreServices.updateHorarios(idHorario, body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const deleteContacto = async (req, res, next) => {
  try {
    const { idContacto } = req.params;
    const result = await StoreServices.deleteContacto(idContacto);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const deleteHorarios = async (req, res, next) => {
  try {
    const { idHorario } = req.params;
    const result = await StoreServices.deleteHorarios(idHorario);
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
};