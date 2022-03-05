import express from "express";
const router = express.Router();

import {
  getPosts,
  getUsers,
  getComments,
  getTodos,
  editTodos,
  createTodos,
  deleteTodos,
} from "../contollers/Allrequests";

router.route("/posts").get(getPosts);
router.route("/posts/:id").get(getPosts);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUsers);
router.route("/comments").get(getComments);
router.route("/comments/:id").get(getComments);
router
  .route("/todos")
  .get(getTodos)
  .post(createTodos)
  .patch(editTodos)
  .delete(deleteTodos);

export { router };
