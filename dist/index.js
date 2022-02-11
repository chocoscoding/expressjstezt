"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./routes/route");
const app = express_1.default();
const port = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use('/', route_1.router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
