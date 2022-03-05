import React from "react";
import { Codeblock, Footer } from "../components";
import guides from "../styles/guides.module.css";

const Guides = () => {
  return (
    <div>
      <div className={guides.cont}>
        <h2>Parameters</h2>
        <p>These are all the possible params and it's types</p>
        <div className={`${guides.wrapper} ${guides.overflow}`}>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>TodoTitle :</span>{" "}
            <span className={guides.importantparam}>
              " This can be any string "
            </span>{" "}
            <span className={guides.types}>(String)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>userId :</span>{" "}
            <span className={guides.importantparam}>" This any user Id "</span>{" "}
            <span className={guides.types}>(Number)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>TodoStatus :</span>{" "}
            <span className={guides.importantparam}>
              " This is only 'True | False' of the todoStatus"
            </span>{" "}
            <span className={guides.types}>(Boolean)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>id :</span>{" "}
            <span className={guides.importantparam}>
              " This is the todo id"
            </span>{" "}
            <span className={guides.types}>(Number)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>limit:</span>{" "}
            <span className={guides.importantparam}>
              " The max amount of data returned"
            </span>{" "}
            <span className={guides.types}>(Number)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>page:</span>{" "}
            <span className={guides.importantparam}>
              " The page if the result is plenty"
            </span>{" "}
            <span className={guides.types}>(Number)</span>,
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>resultType:</span>{" "}
            <span className={guides.importantparam}>
              " Returns either the changed data or the full data list with the
              changed data included. <i>['"normal" or "mutated" or nothing']</i>{" "}
              "
            </span>{" "}
            <span className={guides.types}>(String | null)</span>
          </p>
          <p className={guides.datab}>
            {" "}
            <span className={guides.name}>
              Route id :
            </span>{" "}
            <span className={guides.importantparam}>/id</span>{" "}
            <span className={guides.types}>(String | null)</span>
          </p>
        </div>
      </div>

      <div className={guides.cont}>
        <h2>Routes</h2>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get All
          Posts
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/posts", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get
          Specific Posts
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/posts/33", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get All
          Users
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/users", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get
          Specific User
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/users/3", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get All
          Comments
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/comments", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get
          Specific Comment
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `fetch("https://expressjstezt-production.up.railway.app/api/comments/234", { 
                method: "GET"
              }).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data);
              })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
        <h3>
          <span className={`${guides.spanbox} ${guides.get}`}>GET</span> Get
          Todos
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
              "limit":20,
              "page": 2
          });
          
          fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
            method: "GET",
            body: bodyContent,
          }).then(function(response) {
            return response.text();
          }).then(function(data) {
            console.log(data);
          })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
      </div>
      <div className={guides.cont}>
        <h3>
          <span className={`${guides.spanbox} ${guides.post}`}>POST</span> Post
          Todo
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
              "limit":20,
              "page": 2
          });
          
          fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
            method: "GET",
            body: bodyContent,
          }).then(function(response) {
            return response.text();
          }).then(function(data) {
            console.log(data);
          })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />

          <p>OR</p>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                "userId": 10,
                "id": 201,
                "TodoTitle": "lorem ipsum idome trepose rikla",
                "TodoStatus": false,
                "limit":20,
                "page": 2
            
            });
            
            fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
              method: "POST",
              body: bodyContent
            }).then(function(response) {
              return response.text();
            }).then(function(data) {
              console.log(data);
            })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
          <p>OR</p>

          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                "userId": 10,
                "id": 201,
                "TodoTitle": "lorem ipsum idome trepose rikla",
                "TodoStatus": false,
                "resultType": "mutated",
                "limit":20,
                "page": 2
            
            });
            
            fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
              method: "POST",
              body: bodyContent
            }).then(function(response) {
              return response.text();
            }).then(function(data) {
              console.log(data);
            })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
      </div>
      <div className={guides.cont}>
        <h3>
          <span className={`${guides.spanbox} ${guides.patch}`}>PATCH</span>{" "} Edit Todo
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                    "userId": 10,
                        "id": 200,
                        "TodoTitle": "dljjdjklcjdsjlljclkjalkjadkljkljakljkdjdj",
                        "resultType" : "mutated",
                        "TodoStatus": true,
                        "limit":20,
                        "page": 2
                    
                    });
                    
                    fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
                      method: "PATCH",
                      body: bodyContent
                    }).then(function(response) {
                      return response.text();
                    }).then(function(data) {
                      console.log(data);
                    })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
          <p>OR</p>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                    "userId": 10,
                        "id": 190,
                        "TodoTitle": "dljjdjklcjdsjlljclkjalkjadkljkljakljkdjdj",
                        "resultType" : "mutated",
                        "TodoStatus": true
                    
                    });
                    
                    fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
                      method: "PATCH",
                      body: bodyContent
                    }).then(function(response) {
                      return response.text();
                    }).then(function(data) {
                      console.log(data);
                    })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
          <p>OR</p>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                    "userId": 10,
                        "id": 200,
                        "TodoTitle": "dljjdu u u aljkljakljkdjdj",
                        "TodoStatus": true,
                    
                    });
                    
                    fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
                      method: "PATCH",
                      body: bodyContent
                    }).then(function(response) {
                      return response.text();
                    }).then(function(data) {
                      console.log(data);
                    })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
          <p>OR</p>
        </div>
      </div>
      <div className={guides.cont}>
        <h3>
          <span className={`${guides.spanbox} ${guides.delete}`}>DELETE</span>{" "} Delete Todo
        </h3>
        <div className={guides.wrapper}>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                    "userId": 10,
                    "id": 200,
                    "limit":20,
                    "page": 2
                
                });
                
                fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
                  method: "DELETE",
                  body: bodyContent
                }).then(function(response) {
                  return response.text();
                }).then(function(data) {
                  console.log(data);
                })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />

          <p>OR</p>
          <Codeblock
            {...{
              code: `let bodyContent = JSON.stringify({
                    "userId": 10,
                    "id": 200,
                
                });
                
                fetch("https://expressjstezt-production.up.railway.app/api/todos", { 
                  method: "DELETE",
                  body: bodyContent
                }).then(function(response) {
                  return response.text();
                }).then(function(data) {
                  console.log(data);
                })`,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }}
          />
        </div>
      </div>
<br /> <br />
      <Footer />
    </div>
  );
};

export default Guides;
