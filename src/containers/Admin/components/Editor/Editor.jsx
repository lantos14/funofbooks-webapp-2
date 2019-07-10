/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import editorStyle from './Editor.style';

const Editor = () => (
  <div className="editor" css={editorStyle.editor}>
    <div className="text-area-container" css={editorStyle.container}>
      <textarea rows="20" cols="150" />
    </div>
  </div>
);

export default Editor;
