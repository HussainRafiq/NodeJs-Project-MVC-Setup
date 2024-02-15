import express, { json } from "express";
import { Configuration } from "./utils/configuration";
import { configureControllers } from "./startup";
import swaggerUi from "swagger-ui-express";
import AppDBSource from "./data-source";
import { Product } from "./entities/product.entity";

const swaggerOutput=require("./swagger_output.json");
var configuration = new Configuration();

const app = express();

app.use(json());
configureControllers(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

AppDBSource.initialize()
    .then(async () => {
      console.log("DB Connected");     
  })
  .catch((error) => console.log(error))



var appSetting=configuration.GetSection("AppSetting")?.Value;
app.listen(appSetting["Port"], () => console.log(`listening on ${appSetting["Port"]}`));
