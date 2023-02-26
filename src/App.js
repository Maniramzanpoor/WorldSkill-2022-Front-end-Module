import mainLayout from "./layout/mainLayout";
import { Router } from "./Routes/Router";
import { Route } from "react-router-dom";
const app = () => {
  return <mainLayout>{Router}</mainLayout>;
};

export default app;
