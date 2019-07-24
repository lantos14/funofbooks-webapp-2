/** @jsx jsx */
import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { jsx } from '@emotion/core';
import editorStyle from './Editor.style';
import { newBookPosting } from '../../../../actions/actions';

const Editor = ({ newBookPosting }) => {
  const handleNewPost = () => {
    const title = document.querySelector('#title-input').value;
    const imgSrc = document.querySelector('#image-source-input').value;
    const description = document.querySelector('#description-input').value;
    const story = document.querySelector('#story-input').value;
    const opinion = document.querySelector('#opinion-input').value;
    const summary = document.querySelector('#summary-input').value;
    const isFun = false;
    newBookPosting({
      title, imgSrc, description, story, opinion, summary, isFun,
    });
  };
  return (
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
};

Editor.propTypes = {
  newBookPosting: func.isRequired,
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
  newBookPosting,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
