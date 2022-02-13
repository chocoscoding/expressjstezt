"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.createTodos = exports.editTodos = exports.postTodos = exports.getTodos = exports.getComments = exports.getUsers = exports.getPosts = void 0;
var apJson = require('../../apidata/allPosts.json');
var acJson = require('../../apidata/allComments.json');
var atJson = require('../../apidata/allTodos.json');
var auJson = require('../../apidata/allUsers.json');
var auJson = require('../../apidata/allUsers.json');
function getPageArrangement(queryT) {
    const { limit, page } = queryT;
    const first = (page - 1) * limit;
    const second = page * limit;
    if (page < 1) {
        let y = second - 1;
        return { sliceStart: first, sliceLimit: y };
    }
    return { sliceStart: first, sliceLimit: second };
}
const getPosts = (req, res) => {
    const data = apJson;
    res.status(200).json(apJson);
};
exports.getPosts = getPosts;
const getUsers = (req, res) => {
    const data = auJson;
    res.status(200).json(auJson);
};
exports.getUsers = getUsers;
const getComments = (req, res) => {
    const data = acJson;
    res.status(200).json(acJson);
};
exports.getComments = getComments;
const getTodos = (req, res) => {
    const reqQueryLen = Object.keys(req.query).length;
    console.log(req.body);
    if (reqQueryLen < 1) {
        try {
            res.status(200).json(atJson);
        }
        catch (error) {
            const message = error === null || error === void 0 ? void 0 : error.message;
            res.status(400).json({ message });
        }
    }
    else {
        const limit = ~~(req.query.limit || 20); //the limit per page
        const page = ~~(req.query.page || 1); //the page number
        let rawdata = atJson;
        const pageArr = getPageArrangement({ limit, page });
        const processingdata = rawdata.slice(pageArr.sliceStart, pageArr.sliceLimit);
        res.status(200).json({ result: processingdata, amount: limit, page });
    }
};
exports.getTodos = getTodos;
const postTodos = (req, res) => {
    const data = atJson;
    const data2 = Object.values(atJson);
    const { limit, page, TodoId, TodoStatus, TodoTitle, userId, resultType } = req.body;
    if (!userId || !TodoId || !TodoStatus === undefined || !TodoTitle || !resultType === undefined || !resultType === 'mutated') {
        // if(!userId || !TodoId || !TodoStatus || !TodoTitle || (resultType !== (undefined || 'mutated'))){
        // const arrtcheck = [{type: userId, name:'userId'}, {type: TodoId, name: 'TodoId'}, {type: TodoStatus, name:'TodoStatus'}, {type: TodoTitle, name:'TodoTitle'}, {type: resultType, name:'resultType'}];
        // let arrtReceive: any = [];
        // arrtcheck.forEach((element) => {
        //     if(element.name === 'resultType'){
        //         if(element.type === undefined || element.type === 'mutated'){
        //             console.log('right');
        //         }
        //         else{
        //             // console.log('wrong');
        //             arrtReceive.push(element.name)                    
        //         }
        //     }
        //     else if(!element.type){
        //         arrtReceive.push(element.name)
        //     }
        // });
        // const msg = `Provide the valid data for ${arrtReceive.toString()}`;
        // res.status(403).json({msg})         
        res.status(403).json({ msg: 'error' });
    }
    else {
        const resType = resultType || "normal";
        if (resType === 'normal') {
            res.status(200).json({
                id: 1
            });
        }
        else {
            res.json(atJson);
        }
    }
};
exports.postTodos = postTodos;
const deleteTodos = (req, res) => {
    const data = atJson;
    res.json(atJson);
};
exports.deleteTodos = deleteTodos;
const createTodos = (req, res) => {
    const data = atJson;
    res.json(atJson);
};
exports.createTodos = createTodos;
const editTodos = (req, res) => {
    const data = atJson;
    res.json(atJson);
};
exports.editTodos = editTodos;
