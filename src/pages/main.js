import React, { useEffect, useState } from "react";
import Editor from "../components/Editor";
import readme from '../res/main.md';

const Main = () => {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch(readme)
    .then(res => res.text())
    .then(res => setText(res))
  }, []);

  return (
    <>
      {text === null ? <div/> : <Editor initialValue={text} viewer={true}/>}
    </>
  )
}

export default Main;