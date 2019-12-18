import * as React from 'react';
import { IconButton, Button, Snackbar, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Close} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);

interface IProps {
    open: boolean;
    onClose: () => void;
    onOk: () => void;
}

const ConfirmMessage = (props: IProps) => {
    const classes = useStyles({});
    let confirmBtn: JSX.Element | null = null;
    if(props.onOk){
        confirmBtn = <Button key="undo" color="secondary" size="small" onClick={props.onOk}>
        Confirm
      </Button>
    }
    return (
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.onClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Are You Shure?</span>}

        action={[
            confirmBtn,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={props.onClose}
          >
            <Close />
          </IconButton>,
        ]}
      />
    )
} 


export default ConfirmMessage