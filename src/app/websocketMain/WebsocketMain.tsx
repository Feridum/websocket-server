import React from 'react';
import { WebsocketEventForm } from "./websocketEventForm/WebsocketEventForm";
import { EventsLog } from './eventsLog/EventsLog';
import { Grid, Button } from '@material-ui/core';
import { ipcRenderer } from '../../electron';



export const WebsocketMain = ({history}:any) => {

    const closeWebsocketServer = () => {
        ipcRenderer.send('close-websocket');
        history.replace('/');
    }

    return (
        <Grid container direction='row' justify="space-between">
            <Grid item xs={12} justify='flex-end' style={{ display: "flex" }}>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={closeWebsocketServer}
                >
                    Close socket
                        </Button>
            </Grid>
            <Grid item xs={5}><WebsocketEventForm /></Grid>
            <Grid item xs={6} > <EventsLog /></Grid>
        </Grid>
    )
}