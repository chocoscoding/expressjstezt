"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const Allrequests_1 = require("../contollers/Allrequests");
router.route("/posts").get(Allrequests_1.getPosts);
router.route("/posts/:id").get(Allrequests_1.getPosts);
router.route("/users").get(Allrequests_1.getUsers);
router.route("/users/:id").get(Allrequests_1.getUsers);
router.route("/comments").get(Allrequests_1.getComments);
router.route("/comments/:id").get(Allrequests_1.getComments);
router
    .route("/todos")
    .get(Allrequests_1.getTodos)
    .post(Allrequests_1.createTodos)
    .patch(Allrequests_1.editTodos)
    .delete(Allrequests_1.deleteTodos);
