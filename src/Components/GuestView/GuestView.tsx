import * as React from 'react';
import { Button } from '@material-ui/core';
import { AuthActions } from '../../actions/Auth/action';
import { IApplicationState } from '../../store/state';
import { connect } from 'react-redux';

type IProps = typeof AuthActions;
const GuestView = (props: IProps) => {


    return (
        <div className="guestView">
            <h3>Note Project</h3>
            <p>A simple note app client that create notes with title and content</p>
            <Button variant="contained" color="primary" onClick={()=>props.toggleLoginModal(true)}> LOGIN / REGISTER </Button>
        </div>
    )
}

export default connect(
    (state: IApplicationState) => state.auth,
    AuthActions,
  )(GuestView);