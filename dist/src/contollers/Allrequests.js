"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.createTodos = exports.editTodos = exports.getTodos = exports.getComments = exports.getUsers = exports.getPosts = void 0;
const allPosts_json_1 = __importDefault(require("../../apidata/allPosts.json"));
const allComments_json_1 = __importDefault(require("../../apidata/allComments.json"));
const allTodos_json_1 = __importDefault(require("../../apidata/allTodos.json"));
const allUsers_json_1 = __importDefault(require("../../apidata/allUsers.json"));
function bodycheck(datachecked) {
    //this is to check if the data supplied in the req.body are complete.
    const { TodoStatus, TodoTitle, userId, resultType, id, type } = datachecked;
    if (type === 1) {
        //checking for userid, normal id, todotitle, and todo status
        if (!userId || !TodoStatus === undefined || !TodoTitle || !id) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (type === 2) {
        //checking for userid, normal id
        if (!userId || !id) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (type === 3) {
        //checking for userid, normal id, todotitle, and todo status
        if (!userId || !id || TodoStatus !== undefined || !TodoTitle) {
            return true;
        }
        else {
            return false;
        }
    }
}
function getPageArrangement(queryT) {
    //return the start and end limit for slice funtion (FOR PAGINATION)
    const { limit, page } = queryT;
    const first = (page - 1) * limit;
    const second = page * limit;
    if (page < 1) {
        let y = second - 1;
        return { sliceStart: first, sliceLimit: y };
    }
    return { sliceStart: first, sliceLimit: second };
}
function err1(data) {
    //To generate error sting for error manage
    const { param, type } = data;
    if (type === 1) {
        return `${param} doesn't exist`;
    }
}
function err2(data) {
    //to generate array of unavailable parameters
    let arrtReceive = [];
    data.forEach((element) => {
        if (element.name === "resultType") {
            if (element.type === undefined || element.type === "mutated") {
                console.log("right");
            }
            else {
                arrtReceive.push(element.name);
            }
        }
        else if (!element.type) {
            arrtReceive.push(element.name);
        }
    });
    return arrtReceive;
}
function lim_pg(data) {
    //For returning a sliced data with data from "getPageArrangement" function
    const { limit_dec, page_dec, rawdata } = data;
    const pageArr = getPageArrangement({
        limit: limit_dec,
        page: page_dec,
    });
    const processeddata = rawdata.slice(pageArr.sliceStart, pageArr.sliceLimit);
    return processeddata;
}
function exists(data) {
    const { type, userId, id, rawdata } = data;
    if (type === 1) {
        // check if data exists in list of data for only id
        const firstarray = rawdata.filter((data) => data.id === id);
        if (firstarray.length > 0) {
            return true;
        }
        return false;
    }
    else if (type === 2) {
        // check if data exists in list of data for both userid and if
        const firstarray = rawdata.filter((data) => data.userId === userId);
        if (firstarray.length > 0) {
            const secondarray = firstarray.filter((data) => data.id === id);
            if (secondarray.length > 0) {
                return true;
            }
            return false;
        }
        return false;
    }
}
function sortarr(arr) {
    const a = arr;
    a.sort(function (a, b) {
        return a - b;
    });
    return a;
}
const getPosts = (req, res) => {
    const { id } = req.params;
    if (id) {
        const firstarray = allPosts_json_1.default.filter((data) => data.id === ~~id);
        if (firstarray.length < 1) {
            return res.status(400).json({ msg: "This id doesn't exist" });
        }
        else {
            return res.status(200).json(Object.assign({}, firstarray));
        }
    }
    //get the posts data
    return res.status(200).json(allPosts_json_1.default);
};
exports.getPosts = getPosts;
const getUsers = (req, res) => {
    const { id } = req.params;
    if (id) {
        const firstarray = allUsers_json_1.default.filter((data) => data.id === ~~id);
        if (firstarray.length < 1) {
            return res.status(400).json({ msg: "This id doesn't exist" });
        }
        else {
            return res.status(200).json(Object.assign({}, firstarray));
        }
    }
    //get users data
    return res.status(200).json(allUsers_json_1.default);
};
exports.getUsers = getUsers;
const getComments = (req, res) => {
    const data = allComments_json_1.default;
    const { id } = req.params;
    if (id) {
        const firstarray = data.filter((data) => data.id === ~~id);
        if (firstarray.length < 1) {
            return res.status(400).json({ msg: "This id doesn't exist" });
        }
        else {
            return res.status(200).json(firstarray);
        }
    }
    //get comments data
    return res.status(200).json(allComments_json_1.default);
};
exports.getComments = getComments;
const getTodos = (req, res) => {
    //get todods
    const { limit, page } = req.body;
    if (limit || page) {
        const limit_dec = ~~(limit || 20); //the limit per page
        const page_dec = ~~(page || 1); //the page number
        return res.status(200).json({
            result: lim_pg({ limit_dec, page_dec, rawdata: allTodos_json_1.default }),
            amount: limit_dec,
            page: page_dec,
        });
    }
    return res.status(200).json(allTodos_json_1.default);
};
exports.getTodos = getTodos;
const createTodos = (req, res) => {
    //create todos
    const { limit, page, TodoStatus, TodoTitle, userId, resultType, id } = req.body;
    if (!bodycheck(Object.assign(Object.assign({}, req.body), { type: 1 }))) {
        if (
        ///check if data exist before posting
        !exists({
            type: 1,
            userId,
            id,
            rawdata: allTodos_json_1.default,
        })) {
            const resType = resultType || "normal";
            if (resType === "normal" || resType === undefined) {
                return res.status(200).json({
                    userId,
                    id,
                    title: TodoTitle,
                    completed: TodoStatus,
                });
            }
            else {
                const limit_dec = ~~(limit || 20); //the limit per page declaration
                const page_dec = ~~(page || 1); //the page number declaration
                if (limit >= 1) {
                    let rawdata = [
                        ...allTodos_json_1.default,
                        {
                            userId,
                            id,
                            title: TodoTitle,
                            completed: TodoStatus,
                        },
                    ];
                    return res.status(200).json({
                        result: lim_pg({ limit_dec, page_dec, rawdata }),
                        amount: limit_dec,
                        page: page_dec,
                    });
                }
                else {
                    return res.status(200).json([
                        ...allTodos_json_1.default,
                        {
                            userId,
                            id,
                            title: TodoTitle,
                            completed: TodoStatus,
                        },
                    ]);
                }
            }
        }
        else {
            return res.status(400).json({ message: "data already exists" });
        }
    }
    else {
        const arrtcheck = [
            { type: userId, name: "userId" },
            { type: id, name: "id" },
            { type: TodoTitle, name: "TodoTitle" },
            { type: resultType, name: "resultType" },
        ];
        const message = `Provide the valid data for ${err2(arrtcheck).toString()}`;
        return res.status(403).json({ message });
    }
};
exports.createTodos = createTodos;
const deleteTodos = (req, res) => {
    //delete todos
    const { limit, page, userId, id } = req.body;
    if (!bodycheck(Object.assign(Object.assign({}, req.body), { type: 2 }))) {
        if (exists({
            type: 2,
            userId,
            id,
            rawdata: allTodos_json_1.default,
        })) {
            const rawdata = allTodos_json_1.default;
            const rd = rawdata, firstarray = rd.filter((data) => data.userId === userId);
            if (firstarray.length > 0) {
                const secondarray = firstarray.filter((data) => data.id === id);
                const thirdarray = rd.filter((data) => data.id !== secondarray[0].id);
                if (secondarray.length > 0) {
                    const limit_dec = ~~(limit || 20); //the limit per page declaration
                    const page_dec = ~~(page || 1); //the page number declaration
                    if (limit || page) {
                        return res.status(200).json({
                            deleteTodos: secondarray[0],
                            dataleft: lim_pg({ limit_dec, page_dec, rawdata: thirdarray }),
                        });
                    }
                    return res
                        .status(200)
                        .json({ deleteTodos: secondarray[0], dataleft: thirdarray });
                }
                else {
                    return res.status(400).json({
                        message: err1({ param: "Id", type: 1 }),
                    });
                }
            }
            else {
                return res.status(400).json({
                    message: err1({ param: "userId", type: 1 }),
                });
            }
        }
        else {
            return res.status(400).json({ message: "data doesn't exists" });
        }
    }
    else {
        const arrtcheck = [
            { type: userId, name: "userId" },
            { type: id, name: "id" },
        ];
        const message = `Provide the valid data for ${err2(arrtcheck).toString()} to be able to delete`;
        return res.status(403).json({ message });
    }
};
exports.deleteTodos = deleteTodos;
const editTodos = (req, res) => {
    //edit todos
    const { limit, page, TodoStatus, TodoTitle, userId, resultType, id } = req.body;
    if (bodycheck(Object.assign(Object.assign({}, req.body), { type: 3 }))) {
        if (exists({
            type: 2,
            userId,
            id,
            rawdata: allTodos_json_1.default,
        })) {
            const resType = resultType || "normal";
            if (resType === "normal" || resType === undefined) {
                return res.status(200).json({
                    result: { userId, id, title: TodoTitle, completed: TodoStatus },
                });
            }
            else {
                const limit_dec = ~~(limit || 20); //the limit per page declaration
                const page_dec = ~~(page || 1); //the page number declaration
                if (limit || page) {
                    const datachange = allTodos_json_1.default.filter((data) => data.id !== id);
                    let d = [
                        ...datachange,
                        {
                            userId,
                            id,
                            title: TodoTitle,
                            completed: TodoStatus,
                        },
                    ];
                    d.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    return res.status(200).json({
                        result: lim_pg({ limit_dec, page_dec, rawdata: d }),
                        amount: limit_dec,
                        page: page_dec,
                    });
                }
                else {
                    const datachange = allTodos_json_1.default.filter((data) => data.id !== id);
                    let d = [
                        ...datachange,
                        {
                            userId,
                            id,
                            title: TodoTitle,
                            completed: TodoStatus,
                        },
                    ];
                    d.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    return res.status(200).json({ result: sortarr(d) });
                }
            }
        }
        else {
            return res.status(400).json({ message: "data doesn't exists" });
        }
    }
    else {
        const arrtcheck = [
            { type: userId, name: "userId" },
            { type: id, name: "id" },
            { type: TodoTitle, name: "TodoTitle" },
            { type: TodoStatus, name: "TodoStatus" },
            { type: resultType, name: "resultType" },
        ];
        const message = `Provide the valid data for ${err2(arrtcheck).toString()}`;
        return res.status(403).json({ message });
    }
};
exports.editTodos = editTodos;
