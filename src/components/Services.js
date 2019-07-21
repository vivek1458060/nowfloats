import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '40px 0'
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 200
  },
  link: {
    margin: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  amount: {
    fontWeignt: "bold",
    color: "#3f51b5"
  }
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item md="3">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.pachemdental.com/wp-content/uploads/2017/08/Screenshot_1.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Holistic Healthcare Package
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.amount}
                >
                  INR 1,230
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Our preventive healthcare package that care every fecet of
                  your medical needs. We will screen for your ch.
                  <Link href={"/"} className={classes.link}>
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                size="large"
                className={classes.button}
              >
                Book Appointment
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md="3">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://ak4.picdn.net/shutterstock/videos/3810644/thumb/1.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Holistic Healthcare Package
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.amount}
                >
                  INR 1,230
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Our preventive healthcare package that care every fecet of
                  your medical needs. We will screen for your ch.
                  <Link href={"/"} className={classes.link}>
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                size="large"
                className={classes.button}
              >
                Book Appointment
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md="3">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.muthoothealthcare.com/Uploads/PackagesImages/Thumb1/PackagesImages128460.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Holistic Healthcare Package
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.amount}
                >
                  INR 1,230
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Our preventive healthcare package that care every fecet of
                  your medical needs. We will screen for your ch.
                  <Link href={"/"} className={classes.link}>
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                size="large"
                className={classes.button}
              >
                Book Appointment
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
