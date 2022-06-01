import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "../../assets/style.css";


const TextEditor = () => (
    <>
    <div className='textEditor' style={{width : '50%'}}>

    <Editor
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
              { text: 'APPLE', value: 'apple', url: 'apple' },
              { text: 'BANANA', value: 'banana', url: 'banana' },
              { text: 'CHERRY', value: 'cherry', url: 'cherry' },
              { text: 'DURIAN', value: 'durian', url: 'durian' },
              { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
              { text: 'FIG', value: 'fig', url: 'fig' },
              { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
              { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
            ],
      }}
      hashtag={{}}
      />
      </div>
    </>
)

export default TextEditor;