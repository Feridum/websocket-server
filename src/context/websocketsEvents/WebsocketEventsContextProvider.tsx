import { WebsocketEventsContext } from "./WebsocketEventsContext";
import React, { useState } from "react";



export const WebsocketEventsContextProvider = ({children}:any) => {

    const [events, setEvents] = useState<any[]>([]);

    const addEvent = (event:any)=>{
        setEvents([...events, event])
    }

    return (   
        <WebsocketEventsContext.Provider value={{events: events, addEvent}}>
            {children}
        </WebsocketEventsContext.Provider>
    )
}