import React from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: 'center', 
        color: theme.palette.text.secondary
    }
  }));

export default () => {
    const classes = useStyles();
    return (
        <Typography variant="body2" gutterBottom className={classes.text}>
            &copy; 2017 | Powered by NOWFLOATS
        </Typography>
    )
}