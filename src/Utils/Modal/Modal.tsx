import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { LinearProgress } from '@material-ui/core';


interface IProps {
    open: boolean;
    title: string;
    onOk: () => void;
    onCancel: () => void;
    children: any;
    loading: boolean
}
export default function CusmtomModal(props: IProps) {
  return (
    <div>
      <Dialog
      maxWidth="sm"
      fullWidth
      open={props.open} 
      onClose={props.onCancel} 
      aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> {props.title} </DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button disabled={props.loading} onClick={props.onCancel}  color="secondary">
            Cancel
          </Button>
          <Button disabled={props.loading} onClick={props.onOk} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
        
        {props.loading && <LinearProgress variant="query" />}
      </Dialog>
    </div>
  );
}