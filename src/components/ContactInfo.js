import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhoneInTalk from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '40px 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  card: {
    width: "100%"
  },
  media: {
    height: 200
  },
  cardActionArea: {
    borderBottom: "1px solid lightgrey"
  },
  actionContainer: {
    display: "flex"
  },
  cardActionDiv: {
    borderLeft: "1px solid lightgrey",
    margin: "10px 0"
  }
}));

export default function ContactInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid item xs="12" md="4" lg="4">
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              +91 7992356845
            </Typography>
            <Typography variant="body1" gutterBottom>
              (Please keep +91 or 0 before the number you dial.)
            </Typography>
            <div>
              <Button color="primary" className={classes.button}>
                <PhoneInTalk className={classes.icon} />
                +91 8454786584
              </Button>
              <Button color="primary" className={classes.button}>
                <PhoneInTalk className={classes.icon} />
                +91 8574256845
              </Button>
            </div>
            <div>
              <Button color="primary" style={{ textTransform: "none" }}>
                <EmailIcon className={classes.icon} />
                dixithealingchamber@gmail.com
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs="12" md="4" lg="3">
          <Card className={classes.card}>
            <CardActionArea className={classes.cardActionArea}>
              <CardMedia
                className={classes.media}
                image="https://maps.placesmap.net/IN/1235639.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  Plot no. 275, Kavuri hills, Madhapur opp: police station,above
                  ICICI bank, Hyderabad, Telangana, 500033
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className={classes.actionContainer}>
              <Button
                size="large"
                color="primary"
                fullWidth={true}
                className={classes.button}
              >
                open maps
              </Button>
              <div className={classes.cardActionDiv} />
              <Button
                size="large"
                color="primary"
                fullWidth={true}
                className={classes.button}
              >
                Directions
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs="12" md="4" lg="3">
          <Paper className={classes.paper}>
            <Typography variant="h4" color="textSecondary" gutterBottom>
              Recently updated about
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Dentist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              General physicians in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Cardiologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Gaynaecologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Psychiatrist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Dermatologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Neurologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Urologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Ophthalmologist in Bangalore
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Sexologist in Bangalore
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
