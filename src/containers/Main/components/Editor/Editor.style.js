import { css } from '@emotion/core';

const editorStyle = {
  editor: css`
    display: flex;
    background-color: #e7ebea;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 60px 0;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  textAreas: css`
    width: 400px;
    font-size: 21px;
    background-color: white;
    border-radius: 10px;
  `,
  widerTextAreas: css`
    width: 650px;
  `,
  inputRoot: css`
    font-size: 30px;
  `,
};

export default editorStyle;
