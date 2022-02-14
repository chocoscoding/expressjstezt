var apJson = require("../../apidata/allPosts.json");
var acJson = require("../../apidata/allComments.json");
var atJson = require("../../apidata/allTodos.json");
var auJson = require("../../apidata/allUsers.json");
import { Application, NextFunction, Request, Response } from "express";

interface queryTi {
  limit: number;
  page: number;
}
interface postT {
  limit: number;
  page: number;
  TodoTitle: any;
  TodoId: number;
  userId: number;
  TodoStatus: boolean;
  resultType: any;
  msg: string;
  code: number;
}
var auJson = require("../../apidata/allUsers.json");
function getPageArrangement(queryT: queryTi) {
  const { limit, page } = queryT;
  const first = (page - 1) * limit;
  const second = page * limit;

  if (page < 1) {
    let y = second - 1;
    return { sliceStart: first, sliceLimit: y };
  }
  return { sliceStart: first, sliceLimit: second };
}

const getPosts = (req: Request, res: Response) => {
  const data: JSON = apJson;
  return res.status(200).json(apJson);
};
const getUsers = (req: Request, res: Response) => {
  const data: JSON = auJson;
  return res.status(200).json(auJson);
};
const getComments = (req: Request, res: Response) => {
  const data: JSON = acJson;
  return res.status(200).json(acJson);
};
const getTodos = (req: Request, res: Response) => {
  const reqQueryLen: number = Object.keys(req.query).length;
  console.log(req.body);

  if (reqQueryLen < 1) {
    try {
      return res.status(200).json(atJson);
    } catch (error: any) {
      const message: String = error?.message;
      return res.status(400).json({ message });
    }
  } else {
    const limit: number = ~~(req.query.limit || 20); //the limit per page
    const page: number = ~~(req.query.page || 1); //the page number
    let rawdata = atJson;
    const pageArr = getPageArrangement({ limit, page });
    const processingdata = rawdata.slice(
      pageArr.sliceStart,
      pageArr.sliceLimit
    );
    return res
      .status(200)
      .json({ result: processingdata, amount: limit, page });
  }
};
const postTodos = (req: Request, res: Response) => {
  const data: JSON = atJson;
  const data2: any = Object.values(atJson);
  const {
    limit,
    page,
    TodoId,
    TodoStatus,
    TodoTitle,
    userId,
    resultType,
  }: postT = req.body;

  if (
    !userId ||
    !TodoId ||
    !TodoStatus === undefined ||
    !TodoTitle ||
    !resultType === undefined ||
    resultType !== "mutated"
  ) {
    if (resultType !== "mutated") {
      const arrtcheck = [
        { type: userId, name: "userId" },
        { type: TodoId, name: "TodoId" },
        { type: TodoStatus, name: "TodoStatus" },
        { type: TodoTitle, name: "TodoTitle" },
        { type: resultType, name: "resultType" },
      ];
      let arrtReceive: any = [];
      arrtcheck.forEach((element) => {
        if (element.name === "resultType") {
          if (element.type === undefined || element.type === "mutated") {
            console.log("right");
          } else {
            // console.log('wrong');
            arrtReceive.push(element.name);
          }
        } else if (!element.type) {
          arrtReceive.push(element.name);
        }
      });
      const msg = `Provide the valid data for ${arrtReceive.toString()}`;
      return res.status(403).json({ msg });
    }
    // return res.status(403).json({msg: 'error'})
  } else {
    const resType: undefined | string = resultType || "normal";
    if (resType === "normal") {
      return res.status(200).json({
        id: 1,
      });
    } else {
      res.json(atJson);
    }
  }
};
const deleteTodos = (req: Request, res: Response) => {
  const data: JSON = atJson;
  res.json(atJson);
};
const createTodos = (req: Request, res: Response) => {
  const data: JSON = atJson;
  res.json(atJson);
};
const editTodos = (req: Request, res: Response) => {
  const data: JSON = atJson;
  res.json(atJson);
};

export {
  getPosts,
  getUsers,
  getComments,
  getTodos,
  postTodos,
  editTodos,
  createTodos,
  deleteTodos,
};
