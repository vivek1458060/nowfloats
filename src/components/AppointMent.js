import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BookAppointment from './BookAppointment'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '500px',
    background: 'hsla(0,0%,100%,.85)',
    color: theme.palette.text.secondary,
    border: '1px solid rgba(0, 0, 0, 0.23)'
  },
  enquiryContainer: {
    margin: theme.spacing(3)
  }
}));

export default function DisabledTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue)
  };

  return (
    <Paper className={classes.root}>
      <Tabs value={value} variant="fullWidth" indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab label="Book Appointment" />
        <Tab label="Have an enquiry?" />
      </Tabs>
      { value === 0 && <BookAppointment /> }
      { value === 1 && (
        <Typography variant="body1" className={classes.enquiryContainer} gutterBottom>
            Please have a look into Contact section!
        </Typography>
      )}
    </Paper>
  );
}
