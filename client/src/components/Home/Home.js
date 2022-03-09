import React, { useEffect, useState } from "react";
import homeStyles from "./homeStyles";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form.jsx";
import { getPosts } from "../../actions/postsAction";
/** Redux Hooks */
import { useDispatch } from "react-redux"; // It dispatch an action

export const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const classes = homeStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mobilContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
