import * as React from "react";
import { IAuthState } from '../../actions/Auth/model';
import { AuthActions } from '../../actions/Auth/action';
import { IApplicationState } from '../../store/state';
import { connect } from 'react-redux';
import CusmtomModal from '../../Utils/Modal/Modal';
import { TextField } from "@material-ui/core";
import { FormCreator, IFormProps } from "../../Utils/FormCreator";

type IProps = IAuthState & typeof AuthActions & IFormProps;

type IState = { };

class Login extends React.Component<IProps, IState> {

    // classes = useStyles({});
    constructor(props: IProps) {
        super(props);
        this.state = { }
    }
    onOk = () => {
        const values = this.props.onFormSubmit()
        this.props.toggleLoginModal(false)
        this.props.resetForm()
        console.log("values, ", values)
    }
    onCancelHandler = () => {
        this.props.resetForm()
        this.props.toggleLoginModal(false)
    }
    render() {
        const { getFormItem } = this.props
        return (
            <CusmtomModal
                title="Login"
                open={this.props.login.open}
                onCancel={this.onCancelHandler}
                onOk={this.onOk}>
                <form className="form">
                    {getFormItem({
                        name: "email",
                        label: " Email Address",
                        rules: [{
                            required: true,
                            msg: "must fill"
                        }]
                    },

                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            type="email"
                            fullWidth />
                    )}
                    {getFormItem({
                        name: "password",
                        label: "Password",
                        rules: [{
                            required: true,
                            msg: "must fill"
                        }]
                    },
                        <TextField
                            margin="dense"
                            id="email"
                            label="Password"
                            type="password"
                            fullWidth />
                    )}
                </form>
            </CusmtomModal>
        );
    }
}


export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(FormCreator(Login));