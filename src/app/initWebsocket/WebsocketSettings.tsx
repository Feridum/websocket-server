import React from 'react'
import { WebsocketInitForm } from './websocketInitForm/WebsocketInitForm';


export const InitWebsocket = ({history}:any) => {

    const redirectOnSuccess = ()=>{
        history.replace('/main');
    }

    return (
        <div>
           <WebsocketInitForm redirectOnSuccess={redirectOnSuccess}/>
        </div>
    )
}