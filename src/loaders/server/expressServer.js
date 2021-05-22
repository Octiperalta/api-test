const express = require("express");
const morgan = require("morgan");
const config = require("../../config");

class ExpressServer {
  constructor() {
    // Se declarar al instanciar un objeto de esta clase
    this.app = express();
    this.port = config.port;
    this.basePathUser = `${config.api.prefix}/users`;

    // Invoco cada vez que se cree una instancia
    this._middlewares(); // Se aplican los middlewares
    this._routes(); // Se especifican como se manejan las rutas
  }

  _middlewares() {
    // Guion bajo ya que es una funcion "PRIVADA"
    this.app.use(express.json());
    this.app.use(morgan("tiny")); // Imprime infomacion sobre la requests al servidor
  }

  _routes() {
    // Ruta creada para verificar la estabilidad(caida o no) de la aplicacion
    this.app.head("/status", (req, res) => {
      res.status(200).end();
    });

    // Indico que todas las direcciones de 'api/v1/users'(basePathUser) se manejen con las rutas del archivo 'USERS'
    this.app.use(this.basePathUser, require("../../routes/users"));
  }

  async start() {
    this.app.listen(this.port, error => {
      if (error) {
        console.log("Error:", error);
        process.exit(1);
        return;
      }
    });
  }
}

module.exports = ExpressServer;
