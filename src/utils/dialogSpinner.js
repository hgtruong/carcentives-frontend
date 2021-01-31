import {
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles
} from "@material-ui/core";
import React from 'react';

const DialogSpinner = (props) => {
  const classes = useStyles();
  return (
    <Dialog open={props.dialogOpen}>
    <DialogTitle id="alert-dialog-title" className={classes.dialog}>{props.message}</DialogTitle>
    <DialogContent>
      <div className={classes.root}>
        <LinearProgress />
      </div>
    </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    colorPrimary: {
      backgroundColor: 'red'
    }
  },
  dialog: {
    width: '300px',
    margin: 'auto',
    textAlign: 'center'
  }
}));


export { DialogSpinner }