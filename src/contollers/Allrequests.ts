var apJson = require('../../apidata/allPosts.json');
var acJson = require('../../apidata/allComments.json');
var atJson = require('../../apidata/allTodos.json');
var auJson = require('../../apidata/allUsers.json');
interface queryTi {
    limit: number;
    page: number;
  }
function getPageArrangement(queryT:queryTi){
    const {limit,page} = queryT;
    const first = (page-1) * limit;
    const second = page * limit;

    if(page < 1){
        let y = second -1;
        return {sliceStart: first, sliceLimit: y}
    }
    return {sliceStart: first, sliceLimit: second}
    
}

const getPosts = (req:any, res:any)=>{
    const data:JSON = apJson;
    res.json(apJson)
}
const getUsers = (req:any, res:any)=>{
    const data:JSON = auJson;
    res.json(auJson)
}
const getComments = (req:any, res:any)=>{
    const data:JSON = acJson;
    res.json(acJson)
}
const getTodos = (req:any, res:any)=>{
    const reqQueryLen: number = Object.keys(req.query).length;
    console.log(req.body);
    
    if(reqQueryLen < 1){
        try {
            res.status(200).json(atJson)
        } catch (error:any) {  
            const message : String = error?.message;          
            res.status(400).json({message})
        }
    }
    else{
        const limit: number = ~~(req.query.limit || 20);//the limit per page
        const page: number = ~~(req.query.page || 1);//the page number
        let rawdata = atJson;
        const pageArr=  getPageArrangement({limit,page});
        const processingdata = rawdata.slice(pageArr.sliceStart, pageArr.sliceLimit);
        res.json({result: processingdata, amount: pageArr.sliceLimit, page :pageArr.sliceStart +1})

    }
}
const postTodos = (req:any, res:any)=>{
    const data:JSON = atJson;
    res.json(atJson)
}
const deleteTodos = (req:any, res:any)=>{
    const data:JSON = atJson;
    res.json(atJson)
}
const createTodos = (req:any, res:any)=>{
    const data:JSON = atJson;
    res.json(atJson)
}
const editTodos = (req:any, res:any)=>{
    const data:JSON = atJson;
    res.json(atJson)
}

export {
    getPosts,getUsers,getComments, getTodos,postTodos,editTodos,createTodos,deleteTodos
}