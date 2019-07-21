import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const currencies = [
  {
    value: "CONSULTATION",
    label: "Consultation"
  },
  {
    value: "OTHER",
    label: "Other"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: "15px",
  },
  textField: {
    margin: 0
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  dates: {
    marginTop: "20px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    background: 'hsla(0,0%,100%,.85)',
    boxShadow: 'none'
  },
  dates__top: {
    borderRadius: "4px",
    display: "flex"
  },
  arrowLeft: {
    marginLeft: "initial"
  },
  arrowRight: {
    marginLeft: "initial"
  },
  currentDate: {
    textAlign: "center",
    flexGrow: 1,
    borderRadius: "4px",
    borderRight: "1px solid rgba(0, 0, 0, 0.23)",
    borderLeft: "1px solid rgba(0, 0, 0, 0.23)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  timings: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderBottom: "none",
    borderTop: "unset",
    display: "flex"
  },
  timings_icon: {
    flexGrow: 1,
    minWidth: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.23)"
  },
  timeBox: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex"
  },
  timeBox_item: {
    padding: "10px 0",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderTop: "none",
    borderRight: "none",
    minWidth: "100px",
    flexGrow: 1,
    display: "flex",
    fontFamily: "roboto",
    justifyContent: "center"
  }
}));

export default function BookAppointment() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    currency: "CONSULTATION"
  });

  const handleFieldChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-select-currency"
        select
        label="Purpose"
        className={classes.textField}
        value={values.currency}
        onChange={handleFieldChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
        fullWidth={true}
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Paper className={classes.dates}>
        <div className={classes.dates__top}>
          <IconButton
            edge="start"
            className={classes.arrowRight}
            color="inherit"
            aria-label="Menu"
          >
            <ArrowLeft />
          </IconButton>
          <Typography variant="body1" className={classes.currentDate}>
            Today (Sun, 7 Aug)
          </Typography>
          <IconButton
            edge="start"
            className={classes.arrowLeft}
            color="inherit"
            aria-label="Menu"
          >
            <ArrowRight />
          </IconButton>
        </div>
      </Paper>
      <div className={classes.timings}>
        <Hidden smDown className={classes.timings_icon}>
          <div className={classes.timings_icon}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/sun-11/50/75-512.png"
              width="70"
            />
          </div>
        </Hidden>
        <div style={{ flexGrow: 1 }}>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>11:30 AM</li>
            <li
              className={classes.timeBox_item}
              style={{ background: "#3f51b5", color: "#f5f5f5" }}
            >
              12:00 PM
            </li>
            <li className={classes.timeBox_item}>12:00 PM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>01:00 PM</li>
            <li className={classes.timeBox_item}>-</li>
            <li className={classes.timeBox_item}>-</li>
          </ul>
        </div>
      </div>
      <div className={classes.timings}>
        <Hidden smDown className={classes.timings_icon}>
          <div className={classes.timings_icon}>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_153154.png"
              width="70"
            />
          </div>
        </Hidden>
        <div style={{ flexGrow: 1 }}>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
        </div>
      </div>
      <div className={classes.timings} style={{ marginBottom: "20px" }}>
        <Hidden smDown className={classes.timings_icon}>
          <div className={classes.timings_icon}>
            <img
              src="https://image.flaticon.com/icons/svg/17/17279.svg"
              width="60"
            />
          </div>
        </Hidden>
        <div style={{ flexGrow: 1 }}>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
          <ul className={classes.timeBox}>
            <li className={classes.timeBox_item}>10:00 AM</li>
            <li className={classes.timeBox_item}>10.:30 AM</li>
            <li className={classes.timeBox_item}>11:00 AM</li>
          </ul>
        </div>
      </div>
      <Button
        variant="contained"
        size="large"
        fullWidth={true}
        color="primary"
        className={classes.margin}
      >
        Large
      </Button>
    </div>
  );
}
