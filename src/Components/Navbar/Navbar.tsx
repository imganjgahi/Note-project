import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/state';
import { AuthActions } from '../../actions/Auth/action';
import { IAuthState } from '../../actions/Auth/model';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

type IProps = IAuthState & typeof AuthActions;
const Navbar = (props: IProps) => {
    const classes = useStyles({});
    return (
        <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      Take a Note ...
    </Typography>
    {!props.isAuth && <Button variant="contained" color="default" onClick={() => props.toggleLoginModal(true)}>Login</Button>}
    {props.isAuth && <Button variant="contained" color="secondary" onClick={() => props.logOutRequest()}>Logout</Button>}
  </Toolbar>
</AppBar>
    )
}



export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(Navbar);