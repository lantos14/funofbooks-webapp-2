/** @jsx jsx */
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { jsx } from '@emotion/core';
import editorStyle from './Editor.style';

const Editor = ({
  handleNewPost,
}) => (
  <div className="editor" css={editorStyle.editor}>
    <div className="text-area-container" css={editorStyle.container}>
      <h2>Mit olvastál mostanában?</h2>
      <FormControl>
        <TextField
          id="title-input"
          autoFocus
          label="Könyv címe"
          margin="dense"
          css={editorStyle.textAreas}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <TextField
          id="image-source-input"
          label="Kép linkje"
          margin="dense"
          css={editorStyle.textAreas}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <TextField
          id="description-input"
          multiline
          rows="10"
          label="Leírás"
          margin="dense"
          css={editorStyle.textAreas}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <TextField
          id="story-input"
          multiline
          rows="20"
          label="Történet röviden"
          margin="dense"
          css={[editorStyle.textAreas, editorStyle.widerTextAreas]}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <TextField
          id="opinion-input"
          multiline
          rows="20"
          label="Véleményem"
          margin="dense"
          css={[editorStyle.textAreas, editorStyle.widerTextAreas]}
          variant="outlined"
        />
      </FormControl>

      <FormControl>
        <TextField
          id="summary-input"
          multiline
          rows="20"
          label="Összegzés"
          margin="dense"
          css={[editorStyle.textAreas, editorStyle.widerTextAreas]}
          variant="outlined"
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleNewPost}>
        Rögzítés
      </Button>
    </div>
  </div>
);

export default Editor;
