import React, { useState } from "react";
import home from "../styles/home.module.css";
import { Codeblock } from "../components";
import {Footer} from '../components'
const Home = () => {
  const [runf, setrun] = useState(false);
  const [textl, settextl] = useState(false);
  function setrunf() {
    settextl(true);
    setTimeout(() => {
      setrun(true);
    }, 1000);
  }
  return (
    <div className={home.gradient_bg_services}>
      <div className={home.titlecont}>
        <h1 className={home.title}>{`{JSON} FakeApi`}</h1>
        <p className={home.titlep}>
          Free fake API for testing and prototyping.
        </p>
        <h4 className={home.titleh4}>
          As of Jan 2022, serving <span className={home.bold}>~25000</span>{" "}
          requests each month.
        </h4>
      </div>

      <div className={home.secondcont}>
        <h3> Try it</h3>
        <h4>Run this code here, in a console or from any site:</h4>

        <Codeblock
          {...{
            code: `fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))`,
            language: "javascript",
            showLineNumbers: true,
            startingLineNumber: 1,
          }}
        />

        <button className={home.run} onClick={setrunf}>
          {runf ? `Done` : `Run Code`}
        </button>

        {runf ? (
          <React.Fragment>
            <Codeblock
              {...{
                code: `fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))`,
                language: "json",
                showLineNumbers: true,
                startingLineNumber: 1,
              }}
            />
            <h3>Awesome✨✨✨, You can even get more features and data</h3>
          </React.Fragment>
        ) : (
          <Codeblock
            {...{
              code: `${textl ? `{ Loading... }` : `{ }`}`,
              language: "json",
              showLineNumbers: false,
            }}
          />
        )}

        <br />
      </div>
      <div className={home.thirdcont}>
        <h2> When to use</h2>
        <p>
          {" "}
          FakeApi is a free online REST API that you can use whenever you need
          some fake data. It can be used in a README on GitHub, for a demo on
          CodeSandbox, in code examples on Stack Overflow, ...or simply to test
          things locally.
        </p>
        <h2> Resources</h2>
        <p> FakeApi comes with a set of 6 common resources:</p>
        <ul>
          <li>/posts 100 posts</li>
          <li>/comments 500 comments</li>
          <li>/albums 100 albums</li>
          <li>/todos 200 todos</li>
          <li>/users 10 users</li>
          <li></li>
        </ul>
        <p>
          Note: resources have relations. For example: posts have many comments,
          albums have many photos, ... see guide for the full list.
        </p>

        <br />

        <p>
        Routes All HTTP methods are supported. You can use http or https for
        your requests.
</p>

<ul>
          <li>GET /posts</li>
          <li>/comments 500 comments</li>
          <li>/albums 100 albums</li>
          <li>/todos 200 todos</li>
          <li>PATCH /posts</li>
          <li>DELETE
        /posts</li>
        </ul>
      </div>
        <Footer/>
    </div>
  );
};

export default Home;
