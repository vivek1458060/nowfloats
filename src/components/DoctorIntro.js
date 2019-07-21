import React from "react";
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhoneInTalk from "@material-ui/icons/PhoneInTalk";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '40px 0'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: "none"
  },
  img: {
    marginBottom: "20px",
    width: "100%"
  },
  doctorIntro: {
    maxWidth: "450px"
  },
  doctorDesc: {
    maxWidth: "450px"
  },
  button: {
    margin: theme.spacing(1)
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  callDetail: {
    display: "flex",
    alignItems: "center"
  },
  callDetail__line: {
    border: "1px solid lightgrey",
    flexGrow: 1
  }
}));

export function DoctorIntro(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {
          props.doctors.map(({ name, degree, speciality, imgUrl, intro, mobile }, index) => (
            <Grid item xs={12} md={12} key={index}>
              <Grid container justify="center">
                <Grid item xs={12} md={6} className={classes.doctorIntro}>
                  <Paper className={classes.paper}>
                    <img
                      src={imgUrl}
                      className={classes.img}
                      alt="img"
                    />
                    <Typography gutterBottom variant="h3" color="primary">
                      {name}
                    </Typography>
                    <Typography variant="h5">{speciality}</Typography>
                    <Typography gutterBottom variant="subtitle1">
                      {degree}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} className={classes.doctorDesc}>
                  <Paper className={classes.paper}>
                    <Typography gutterBottom variant="h5">
                      {intro}
                    </Typography>
                    <div className={classes.callDetail}>
                      <Button className={classes.button} color="primary">
                        <PhoneInTalk className={classes.extendedIcon} />
                        {mobile}
                      </Button>
                      <hr className={classes.callDetail__line} />
                    </div>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.button}
                    >
                      Read More
                    </Button>
                    <Button variant="outlined" size="large" color="primary">
                      Book Appointment
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  doctors: state.doctors
})

export default connect(mapStateToProps)(DoctorIntro)
