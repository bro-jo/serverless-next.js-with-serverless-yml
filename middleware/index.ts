import nextConnect from "next-connect";
import {initLogger} from "./logger";

const middleware = nextConnect();

middleware.use(initLogger());

export default middleware;
