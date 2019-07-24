import { renderRoutes } from "react-router-config";
import { snakeRoutes } from "@features/snake";

const routes = [...snakeRoutes];

export const rootRoutes = () => renderRoutes(routes);
