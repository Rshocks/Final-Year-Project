import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import echo from './images/echo.png';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varient="h2" allign="center">Echo</Typography>
                <img src={echo} alt="echo" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" allignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;