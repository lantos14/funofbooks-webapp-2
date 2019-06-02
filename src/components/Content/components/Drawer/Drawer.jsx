import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import ReorderIcon from '@material-ui/icons/Reorder';
import BookShelf from '../BookShelf/BookShelf';
import BookShelfTypes from '../BookShelf/BookShelf.types';
import DrawerStyle from './Drawer.style';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawer({ bookList }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <BookShelf bookList={bookList} />
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <BookShelf bookList={bookList} />
    </div>
  );

  const toggleStyle = state.left ? DrawerStyle.lowIndex : DrawerStyle.highIndex;

  return (
    <div
      className="shelf-toggle"
      css={[DrawerStyle.shelfToggle, toggleStyle]}
    >
      <Button onClick={toggleDrawer('left', true)}>
        <ReorderIcon fontSize="64px" />
      </Button>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        {fullList('top')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {fullList('bottom')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  ...BookShelfTypes,
};

export default SwipeableTemporaryDrawer;
