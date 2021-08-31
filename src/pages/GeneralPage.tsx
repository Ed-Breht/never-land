import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import AvatarImage from "../components/AvatarImage";
import Notifications from "../components/Notifications";

const GeneralPage = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Box component="span" m={5}>
            <AvatarImage />
          </Box>
        </Grid>
        <Grid item xs>
          <Box ml={2}>
            <Typography variant="subtitle1">Имя персонажа</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box mr={3}>
            <Notifications />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GeneralPage;
