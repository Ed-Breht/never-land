import { Button, IconButton } from "@material-ui/core";
import React from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';

const Notifications = () => {
    return (
        <div >
            <IconButton aria-label="notification">
                <NotificationsIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default Notifications;