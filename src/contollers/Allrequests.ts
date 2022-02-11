const apJson = require('../apidata/allPosts.json');

const getsPosts = (req:any, res:any)=>{
    const data:JSON = apJson;
    res.json(apJson)
}
const getsUsers = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const getsComments = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const getsTodos = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const postTodos = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const deleteTodos = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const createTodos = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}
const editTodos = (req:any, res:any)=>{
    res.json({data: 'this is the posts'})
}

export {
    getsPosts,getsUsers,getsComments, getsTodos,postTodos,editTodos,createTodos,deleteTodos
}