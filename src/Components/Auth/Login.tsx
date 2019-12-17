import * as React from "react";
import { IAuthState } from '../../actions/Auth/model';
import { AuthActions } from '../../actions/Auth/action';
import { IApplicationState } from '../../store/state';
import { connect } from 'react-redux';
import CusmtomModal from '../../Utils/Modal/Modal';
import { TextField, FormControl, makeStyles, createStyles, Theme } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         form: {
//             display: 'flex',
//             flexDirection: 'column',
//             margin: 'auto',
//             width: 'fit-content',
//         },
//         formControl: {
//             marginTop: theme.spacing(2),
//             minWidth: 120,
//         },
//         formControlLabel: {
//             marginTop: theme.spacing(1),
//         },
//     }),
// );

type IProps = IAuthState & typeof AuthActions;

type IState = {
    visible: boolean;
};

class Login extends React.Component<IProps, IState> {

    // classes = useStyles({});
    constructor(props: IProps) {
        super(props);
        this.state = {
            visible: false
        }
    }
    onCancelHandler = () => {
        this.props.toggleLoginModal(false)
    }
    render() {
        return (
            <CusmtomModal
                title="Login"
                open={this.props.login.open}
                onCancel={this.onCancelHandler}
                onOk={this.onCancelHandler}>
                <form className="form">
                        <TextField
                        name="email"
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth />
                        <TextField
                            name="password"
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Password"
                            type="email"
                            fullWidth />
                </form>
            </CusmtomModal>
        );
    }
}


export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(Login);