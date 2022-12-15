const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
  
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el PORT: http://localhost:${PORT}`);
});