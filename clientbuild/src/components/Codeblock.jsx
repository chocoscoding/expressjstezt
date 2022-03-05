import React from 'react'
import { CodeBlock, dracula  } from "react-code-blocks";
import home from "../styles/home.module.css";

const Codeblock = (data) => {
    const { code, language, showLineNumbers, startingLineNumber } = data
    return (

        <CodeBlock classname={home.cd}
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          startingLineNumber={startingLineNumber}
          theme={dracula}
          wrapLines
        />
      );
}

export default Codeblock