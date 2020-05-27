import morgan from "morgan";
import {Middleware} from "next-connect";

export const initLogger: () => Middleware = () => {
    return morgan("combined") as any;
};
