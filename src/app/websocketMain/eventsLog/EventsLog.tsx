import React, { useContext } from "react";
import { WebsocketEventsContext } from "../../../context/websocketsEvents/WebsocketEventsContext";
import { CardHeader } from "@material-ui/core";




export const EventsLog = () => {

    const websocketsEventsContext = useContext(WebsocketEventsContext);

    return (
        <div>
            <CardHeader title='Events list'/>
            {websocketsEventsContext.events.map((event:any)=>event.message)}
        </div>
    )
}