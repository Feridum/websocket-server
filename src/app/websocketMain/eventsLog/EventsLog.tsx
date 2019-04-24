import React, { useContext } from "react";
import { WebsocketEventsContext } from "../../../context/websocketsEvents/WebsocketEventsContext";
import { CardHeader, List } from "@material-ui/core";
import { SingleEvent } from "./singleEvent/SingleEvent";




export const EventsLog = () => {

    const websocketsEventsContext = useContext(WebsocketEventsContext);
    return (
        <div>
            <CardHeader title='Events list'/>
            <div>
            {websocketsEventsContext.events.map((event:any)=><SingleEvent {...event}/>)}
            </div>
        </div>
    )
}