import * as React from 'react';
import { Button } from '@material-ui/core';

interface IProps {
    registerHandler: () => void;
}
const GuestView = (props: IProps) => {


    return (
        <div>
            GuestView
            <Button variant="contained" color="primary" onClick={props.registerHandler}> LOGIN / REGISTER </Button>
        </div>
    )
}

export default GuestView