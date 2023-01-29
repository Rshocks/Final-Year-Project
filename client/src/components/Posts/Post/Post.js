import React, { useState } from "react";
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import  ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";
import { useHistory } from "react-router-dom";

// if theres an error with loading the posts its coming from this js script just take out
// ButtonBase line 38 and its closing tag on line 56

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const [likes, setLikes] = useState(post?.likes);

    const userLikeId = user?.result.googleId || user?.result?._id;
    const hadLikedPost = likes.find((like) => like === userLikeId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if(hadLikedPost){
            setLikes(post.likes.filter((id) => id !== userLikeId));
        } else {
            setLikes([ ...post.likes, userLikeId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === userLikeId)
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    }

    const openPost = () => history.push(`/posts/${post._id}`);

    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography varient="h6">{post.name}</Typography>
                <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={openPost}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography varient="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} varient="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography varient="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
export default Post;