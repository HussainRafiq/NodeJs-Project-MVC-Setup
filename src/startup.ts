import { RouteDefinition } from "./utils/attributes";
import { importObjectsFromFolder} from "./utils/helpers";
import express from "express";

export function configureControllers(app:Object) {
var controllers = importObjectsFromFolder('./Controllers');
controllers.forEach(controller => {
  const instance                       = new controller();
  const prefix = Reflect.getMetadata('prefix', controller);
  const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);
  
  routes.forEach(route => {
    app[route.requestMethod](prefix + route.path, (req: express.Request, res: express.Response) => {
      instance[route.methodName](req, res);
    });
  });
});
}
