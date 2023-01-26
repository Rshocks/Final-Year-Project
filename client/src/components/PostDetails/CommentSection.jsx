import React, { useState, useRef } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {

    const classes = useStyles();
    const [comments, setComments] = useState([1,2,3,4]);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();

    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`;

        dispatch(commentPost(finalComment, post._id))
    };

    return(
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Echoes </Typography>
                    {comments.map((c,i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            Echo {i}
                        </Typography>
                    ))}
                </div>
                <div style={{ width: '70%'}}>
                    <Typography gutterBottom variant="h6">Write a Echo</Typography>
                    <TextField 
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Echo"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                        Comment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
