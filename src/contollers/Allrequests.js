"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.createTodos = exports.editTodos = exports.postTodos = exports.getsTodos = exports.getsComments = exports.getsUsers = exports.getsPosts = void 0;
const apJson = require('../apidata/allPosts.json');
const getsPosts = (req, res) => {
    const data = apJson;
    res.json(apJson);
};
exports.getsPosts = getsPosts;
const getsUsers = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.getsUsers = getsUsers;
const getsComments = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.getsComments = getsComments;
const getsTodos = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.getsTodos = getsTodos;
const postTodos = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.postTodos = postTodos;
const deleteTodos = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.deleteTodos = deleteTodos;
const createTodos = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.createTodos = createTodos;
const editTodos = (req, res) => {
    res.json({ data: 'this is the posts' });
};
exports.editTodos = editTodos;
