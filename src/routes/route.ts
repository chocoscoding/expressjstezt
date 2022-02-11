import express  from "express";
const router = express.Router();

import { getsPosts, getsUsers, getsComments, getsTodos, postTodos, editTodos, createTodos, deleteTodos } from '../contollers/Allrequests';

router.route('/posts').get(getsPosts)

export { router}