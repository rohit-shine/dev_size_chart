import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "../../assets/style.css";


const TextEditor = () => (
    <>
    <div className='textEditor' style={{width : '50%'}}>

    <Editor
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      />
      </div>
    </>
)

export default TextEditor;