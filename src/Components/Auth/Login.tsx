import * as React from "react";
import { IAuthState } from '../../actions/Auth/model';
import { AuthActions } from '../../actions/Auth/action';
import { IApplicationState } from '../../store/state';
import { connect } from 'react-redux';


type IProps = IAuthState & typeof AuthActions;

type IState = {
    visible: boolean;
};

class Login extends React.Component<IProps, IState> {

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
        console.log(this.props.login)
        return (
            <p>Auth</p>
        );
    }
}

// export default Login;
export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
)(Login);