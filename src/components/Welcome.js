import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import AppointMent from "./AppointMent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '66px 0',
    marginTop: '64px',
    backgroundImage: 'url("/images/d1.png")',
    backgroundSize: 'cover'
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'hsla(0,0%,100%,.85)'
  },
  meetDoctorBtn: {
    marginTop: "40px"
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={5}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              gutterBottom
              style={{ letterSpacing: "7px" }}
            >
              WELCOME TO
            </Typography>
            <Typography variant="h3" gutterBottom>
              Dixit Healing Chamber
            </Typography>
            <Typography variant="h6" gutterBottom>
              Homeopathic clininc of Dr. Shravan Dixit is located in Jublie
              Hills, Hyderabad.The clinic was established in 2006 and is one of
              the most reput...
              <Link href="/" className={classes.link} >
                See more
              </Link>
            </Typography>
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              size="large"
              className={classes.meetDoctorBtn}
            >
              Meet the Doctor
            </Fab>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <AppointMent />
        </Grid>
      </Grid>
    </div>
  );
}
