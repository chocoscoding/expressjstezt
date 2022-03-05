"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bodyParser from "body-parser";
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const route_1 = require("./routes/route");
const app = (0, express_1.default)();
const port = process.env.PORT || 3304;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', route_1.router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.use(express_1.default.static(path_1.default.join(__dirname, '../clientbuild/build')));
const frontendArr = ['/', '/about'];
app.get(frontendArr, (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../clientbuild/build', 'index.html'));
});
app.get('*', (req, res) => {
    res.send('not found');
});
