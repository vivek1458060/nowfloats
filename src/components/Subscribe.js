import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 2),
    textAlign: "center",
    boxShadow: "none",
    color: theme.palette.text.secondary,
  },
  actionsCont: {
    display: "flex",
    justifyContent: "center"
  },
  actions: {
    display: "flex",
    maxWidth: 500,
    flexGrow: 1
  },
  subtitle: {
    padding: theme.spacing(2),
    fontWeight: 500
  },
  textField: {
    margin: 0
  },
  button: {
    padding: "14px 36px"
  }
}));

export default function Subscribe() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4">
        Get tips in your box!
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Great way to stay updated about latest health tips, alerts and
        enhancements.
      </Typography>
      <div className={classes.actionsCont}>
        <div className={classes.actions}>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "bare" }}
            fullWidth={true}
            placeholder="Your Mobile/Email here..."
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </Paper>
  );
}
