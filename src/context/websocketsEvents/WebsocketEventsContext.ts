import { createContext } from "react";



export const WebsocketEventsContext = createContext<any>({
    events: [],
    addEvent: ()=>null,
})