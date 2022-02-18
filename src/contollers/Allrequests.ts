import apJson from "../../apidata/allPosts.json";
import acJson from "../../apidata/allComments.json";
import atJson from "../../apidata/allTodos.json";
import auJson from "../../apidata/allUsers.json";
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
  message: string;
  code: number;
  type: number;
}

function bodycheck(datachecked: any) {
  //this is to check if the data supplied in the req.body are complete.
  const { TodoStatus, TodoTitle, userId, resultType, id, type }: postT =
    datachecked;

  if (type === 1) {
    //checking for userid, normal id, todotitle, and todo status
    if (!userId || !TodoStatus === undefined || !TodoTitle || !id) {
      return true;
    } else {
      return false;
    }
  } else if (type === 2) {
    //checking for userid, normal id
    if (!userId || !id) {
      return true;
    } else {
      return false;
    }
  } else if (type === 3) {
    //checking for userid, normal id, todotitle, and todo status
    if (!userId || !id || TodoStatus !== undefined || !TodoTitle) {
      return true;
    } else {
      return false;
    }
  }
}
function getPageArrangement(queryT: queryTi) {
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
function err1(data: { param: string; type: number }) {
  //To generate error sting for error manage
  const { param, type } = data;
  if (type === 1) {
    return `${param} doesn't exist`;
  }
}
function err2(data: { type: any; name: string }[]) {
  //to generate array of unavailable parameters
  let arrtReceive: any = [];
  data.forEach((element) => {
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
  return arrtReceive;
}
function lim_pg(data: { limit_dec: number; page_dec: number; rawdata: any }) {
  //For returning a sliced data with data from "getPageArrangement" function
  const { limit_dec, page_dec, rawdata } = data;
  const pageArr = getPageArrangement({
    limit: limit_dec,
    page: page_dec,
  });
  const processeddata = rawdata.slice(pageArr.sliceStart, pageArr.sliceLimit);

  return processeddata;
}
function exists(data: {
  type: number;
  userId: number;
  id: number;
  rawdata: any;
}) {
  const { type, userId, id, rawdata } = data;

  if (type === 1) {
    // check if data exists in list of data for only id
    const firstarray = rawdata.filter((data: any) => data.id === id);
    if (firstarray.length > 0) {
      return true;
    }
    return false;
  } else if (type === 2) {
    // check if data exists in list of data for both userid and if
    const firstarray = rawdata.filter((data: any) => data.userId === userId);
    if (firstarray.length > 0) {
      const secondarray = firstarray.filter((data: any) => data.id === id);
      if (secondarray.length > 0) {
        return true;
      }
      return false;
    }
    return false;
  }
}
function sortarr(arr: any) {
  const a = arr;
  a.sort(function (a: any, b: any) {
    return a - b;
  });
  return a;
}

const getPosts = (req: Request, res: Response) => {
  //get the posts data
  return res.status(200).json(apJson);
};
const getUsers = (req: Request, res: Response) => {
  //get users data
  return res.status(200).json(auJson);
};
const getComments = (req: Request, res: Response) => {
  //get comments data
  return res.status(200).json(acJson);
};
const getTodos = (req: Request, res: Response) => {
  //get todods
  const { limit, page } = req.body;

  if (limit || page) {
    const limit_dec: number = ~~(limit || 20); //the limit per page
    const page_dec: number = ~~(page || 1); //the page number
    return res.status(200).json({
      result: lim_pg({ limit_dec, page_dec, rawdata: atJson }),
      amount: limit_dec,
      page: page_dec,
    });
  }
  return res.status(200).json(atJson);
};
const createTodos = (req: Request, res: Response) => {
  //create todos
  const { limit, page, TodoStatus, TodoTitle, userId, resultType, id }: postT =
    req.body;
  if (!bodycheck({ ...req.body, type: 1 })) {
    if (
      ///check if data exist before posting
      !exists({
        type: 1,
        userId,
        id,
        rawdata: atJson,
      })
    ) {
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
          return res.status(200).json({
            result: lim_pg({ limit_dec, page_dec, rawdata }),
            amount: limit_dec,
            page: page_dec,
          });
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
      return res.status(400).json({ message: "data already exists" });
    }
  } else {
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
const deleteTodos = (req: Request, res: Response) => {
  //delete todos
  const { limit, page, userId, id }: postT = req.body;
  if (!bodycheck({ ...req.body, type: 2 })) {
    if (
      exists({
        type: 2,
        userId,
        id,
        rawdata: atJson,
      })
    ) {
      const rawdata = atJson;
      const rd = rawdata,
        firstarray = rd.filter((data: any) => data.userId === userId);

      if (firstarray.length > 0) {
        const secondarray = firstarray.filter((data: any) => data.id === id);
        const thirdarray = rd.filter(
          (data: any) => data.id !== secondarray[0].id
        );
        if (secondarray.length > 0) {
          const limit_dec: number = ~~(limit || 20); //the limit per page declaration
          const page_dec: number = ~~(page || 1); //the page number declaration

          if (limit || page) {
            return res.status(200).json({
              deleteTodos: secondarray[0],
              dataleft: lim_pg({ limit_dec, page_dec, rawdata: thirdarray }),
            });
          }
          return res
            .status(200)
            .json({ deleteTodos: secondarray[0], dataleft: thirdarray });
        } else {
          return res.status(400).json({
            message: err1({ param: "Id", type: 1 }),
          });
        }
      } else {
        return res.status(400).json({
          message: err1({ param: "userId", type: 1 }),
        });
      }
    } else {
      return res.status(400).json({ message: "data doesn't exists" });
    }
  } else {
    const arrtcheck = [
      { type: userId, name: "userId" },
      { type: id, name: "id" },
    ];
    const message = `Provide the valid data for ${err2(
      arrtcheck
    ).toString()} to be able to delete`;

    return res.status(403).json({ message });
  }
};
const editTodos = (req: Request, res: Response) => {
  //edit todos
  const { limit, page, TodoStatus, TodoTitle, userId, resultType, id }: postT =
    req.body;
  if (bodycheck({ ...req.body, type: 3 })) {
    if (
      exists({
        type: 2,
        userId,
        id,
        rawdata: atJson,
      })
    ) {
      const resType: undefined | string = resultType || "normal";
      if (resType === "normal" || resType === undefined) {
        return res.status(200).json({
          result: { userId, id, title: TodoTitle, completed: TodoStatus },
        });
      } else {
        const limit_dec: number = ~~(limit || 20); //the limit per page declaration
        const page_dec: number = ~~(page || 1); //the page number declaration

        if (limit || page) {
          const datachange = atJson.filter((data) => data.id !== id);
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
        } else {
          const datachange = atJson.filter((data) => data.id !== id);
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
    } else {
      return res.status(400).json({ message: "data doesn't exists" });
    }
  } else {
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

export {
  getPosts,
  getUsers,
  getComments,
  getTodos,
  editTodos,
  createTodos,
  deleteTodos,
};
