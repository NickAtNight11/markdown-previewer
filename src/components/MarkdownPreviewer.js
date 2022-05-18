import React, { useState, useEffect } from 'react'
import Markdown from 'marked-react';
import './MarkdownPreviewer.css'

function MarkdownPreviewer() {
  const fulltitle = "Github Markdown Previewer";

  const inittext = "Welcome to the GitHub Markdown Previewer!\rThe following are basic functions of the Markdown Language: \r\r<!-- This is a Markdown comment -->\r\r# This is a Header.\r## This is a Subheader.\r### This is a Sub-subheader.\r\r[This is a link](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)\r\rText can become **bolded**, *italicized*, or ***both***. You can also ~strike through it.~\r\r> This text is a quote.\r\rYou can also make\r1. Numbered\r2. Lists\ror\r- Bulleted\r- Lists\r- [x] This is a checked task.\r- [ ] This is an unchecked task.\r\rYou can `quote code` as well.\r\r```\rfunction getCode() {\r print(\"This is a code block\");\r}\r```\r\r![You can also import an image.](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)";

  const [title, setTitle] = useState("");
  const [titlelength, setTitleLength] = useState(0);
  const [markedtext, setMarkedText] = useState(<Markdown>{inittext}</Markdown>)

  useEffect(() => {
    if(titlelength <= fulltitle.length)
    {
      setTimeout(() => {
        setTitleLength(titlelength+1);
        setTitle(fulltitle.slice(0, titlelength));
      }, 100);
    }
  }, [title, titlelength]);

  let editText = (event) => {
    if(event.target.value === "")
    {
      setMarkedText(<Markdown>{inittext}</Markdown>);
    }
    else
    {
      setMarkedText(<Markdown>{event.target.value}</Markdown>);
    }
  };

  return (
    <div id="page" className="box">
        <h1 id="title">{title}_</h1>
        <div id="content" className="box">
          <div id="left">
            <div className="subheader">
              <h2 className="subheader-title">Editor</h2>
            </div>
            <div id="edit-container">
              <textarea id="editor" placeholder={inittext} rows="45" onChange={editText}/>
            </div>
          </div>
          <div id="right" className="box">
            <div className="subheader">
              <h2 className="subheader-title">Preview</h2>
            </div>
            <div id="preview-container">
              <div id="preview">{markedtext}</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MarkdownPreviewer