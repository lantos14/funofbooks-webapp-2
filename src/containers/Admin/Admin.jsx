/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import { loginRequested, newBookPosting } from '../../actions/actions';
import Greeter from './components/Greeter/Greeter';
import Editor from './components/Editor/Editor';
import appStyle from '../Main/Main.style';

const Admin = ({
  loginRequested,
  newBookPosting,
}) => {
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
    <div className="app" css={appStyle}>
      <NavBar userRole="admin" loginRequested={loginRequested} />
      <Header />
      {localStorage.getItem('username')
        && <Greeter username={localStorage.getItem('username')} />}
      <Editor handleNewPost={handleNewPost} />
    </div>
  );
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
  loginRequested,
  newBookPosting,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
