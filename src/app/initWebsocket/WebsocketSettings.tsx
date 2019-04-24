import React from 'react'
import { WebsocketInitForm } from './websocketInitForm/WebsocketInitForm';
import { Grid } from '@material-ui/core';


export const InitWebsocket = ({history}:any) => {

    const redirectOnSuccess = ()=>{
        history.replace('/main');
    }

    return (
        <Grid container direction='row' justify="center" style={{padding: 16, marginTop: '1   0%'}}>
           <WebsocketInitForm redirectOnSuccess={redirectOnSuccess}/>
        </Grid>
    )
}