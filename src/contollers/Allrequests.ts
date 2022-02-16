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
  userId: number;
  TodoStatus: boolean;
  resultType: any;
  id: number;
  msg: string;
  code: number;
}

function bodycheck(datachecked: any) {
  const { TodoStatus, TodoTitle, userId, resultType, id }: postT = datachecked;

  if (!userId || !TodoStatus === undefined || !TodoTitle || !id) {
    return true;
  } else {
    return false;
  }
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
const createTodos = (req: Request, res: Response) => {
  const resarr = new Array(...atJson);
  const { limit, page, TodoStatus, TodoTitle, userId, resultType, id }: postT =
    req.body;
  if (!bodycheck(req.body)) {
    const resType: undefined | string = resultType || "normal";
    if (resType === "normal" || resType === undefined) {
      return res.status(200).json({
        userId,
        id,
        title: TodoTitle,
        completed: TodoStatus,
      });
    } else {
      const limit_dec: number = ~~(limit || 20); //the limit per page declaration
      const page_dec: number = ~~(page || 1); //the page number declaration

      if (limit >= 1) {
        let rawdata = [
          ...atJson,
          {
            userId,
            id,
            title: TodoTitle,
            completed: TodoStatus,
          },
        ];
        const pageArr = getPageArrangement({
          limit: limit_dec,
          page: page_dec,
        });
        const processingdata = rawdata.slice(
          pageArr.sliceStart,
          pageArr.sliceLimit
        );
        return res
          .status(200)
          .json({ result: processingdata, amount: limit_dec, page: page_dec });
      } else {
        return res.status(200).json([
          ...atJson,
          {
            userId,
            id,
            title: TodoTitle,
            completed: TodoStatus,
          },
        ]);
      }
    }
  } else {
    const arrtcheck = [
      { type: userId, name: "userId" },
      { type: id, name: id },
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
    // return res.status(403).json({msg: 'error'})
  }
};
const deleteTodos = (req: Request, res: Response) => {
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
  editTodos,
  createTodos,
  deleteTodos,
};
