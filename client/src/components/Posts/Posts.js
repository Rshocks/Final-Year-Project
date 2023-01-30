import React from "react";
import { Grid, CircularProgress ,Typography, Paper, Divider } from '@material-ui/core'
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from './styles'
import noPost from '../../images/noPost.PNG'

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();

    if(!posts.length && !isLoading) return (            
    <Paper className={classes.paper}>
        <Typography className={classes.noPost} variant="h5" align="center">
        <img style={{ width: '35%', height: 'auto' }} src={noPost}/>
        <Divider style={{ margin: '20px 0' }} />
        There isn't an echo with the provided name or tag; make sure the tags are capitalized and lowercase, and check that the title is written correctly.
        </Typography>
    </Paper>
    );

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container allignitems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;