/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookCardStyle from './BookCard.style';
import BookCardTypes from './BookCard.types';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const BookCard = ({
  title, description, image,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} css={BookCardStyle.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
          css={BookCardStyle.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

BookCard.propTypes = BookCardTypes;

export default BookCard;
